import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service';


@inject(Service, Router)
export class FileAuditWidget {
  refreshRate = 5;
  liveUpdate = true;
  lastRefresh = new Date();


  constructor(service, router) {
    this.service = service;
    this.router = router;
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
    this.service.get({})
      .then(data => this.data = data);
    this.lastRefresh = new Date();
    // console.log(this.data);
  }

  attached() {
    this.refresh();
    this.setTimer();
  }
}
