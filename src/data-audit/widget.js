import {inject, bindable} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service';
import 'chart.js';

@inject(Service, Router, Element)
export class DataAuditWidget {
  refreshRate = 5;
  liveUpdate = false;
  lastRefresh = new Date();
  uid = '';
  @bindable options = {
    title: '',
    type: ''
  };


  constructor(service, router, element) {
    this.service = service;
    this.router = router;
    this.element = element;
  }

  updateSetting() {
    switch (this.liveUpdate) {
      case true:
        this.setTimer();
        break;
      case false:
        if (this.__timerToken)
          clearInterval(this.__timerToken);
        this.__timerToken = null;
        break;
    }
  }

  setTimer() {
    if (this.__timerToken)
      clearInterval(this.__timerToken);
    this.__timerToken = setInterval(() => this.refresh(), this.refreshRate * 1000);
  }

  refresh() {
    this.service.get(this.options.type)
      .then(data => {

        this.chart.data.labels = [];
        this.chart.data.datasets[0].data = [];
        for (var item of data) {
          this.chart.data.labels.push(item.createdDate);
          this.chart.data.datasets[0].data.push(item.tableRow);
        }
        this.chart.update();

        this.data = data;
      });
    this.lastRefresh = new Date();
    // console.log(this.data);
  }

  attached() {
    console.log(this.options);
    this.refresh();
    this.setTimer();
    var data = {
      labels: [],
      datasets: [{
        label: this.options.title,
        backgroundColor: "rgba(214,19,75,0.85)",
        data: []
      }]
    };

    var options = {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#F00',
            beginAtZero: true,
            display: false
          }
        }]
      }
    };

    this.canvasContext = this.element.getElementsByTagName('canvas')[0].getContext('2d');
    this.chart = new Chart(this.canvasContext, {
      type: 'bar',
      data: data,
      options: options
    });
  }
}
