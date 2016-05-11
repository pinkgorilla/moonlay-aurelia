import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service'
import {types} from '../../../../lookup';
import moment from 'moment'
import 'bootstrap-material-design';

@inject(Service, Router, types)
export class Editor {
  constructor(service, router, types) {
    this.service = service;
    this.router = router;
    this.types = types;
  }

  activate(params) {
    this.initial = params.initial;
    this.month = params.month;
    this.period = params.period;

    this.service.get(this.initial, this.month, this.period)
      .then(json => {
        this.data = json.data;
        console.log(json)
      });
  }

  attached() {
    $.material.init();
  }

  add() {
    var now = new Date();
    var item = {
      no: 0,
      code: '',
      month: this.data.month,
      period: this.data.period,
      type: '',
      name: '',
      description: '',
      estDate: moment(this.data.to).format('YYYY-MM-DD'),
      done: false,
      completeDate: moment(this.data.to).format('YYYY-MM-DD'),
      void: false,
      reason:''
    };
    this.data.items.push(item);
  }
  remove(item) {
    var itemIndex = this.data.items.indexOf(item);
    this.data.items.splice(itemIndex, 1);
  }

  save() {
    this.service.put(this.data)
      .then(json => {
        this.router.navigateToRoute('list');
      })
      .catch(e => console.log(e));
  }
  back() {
    this.router.navigateToRoute('list');
  }
}
