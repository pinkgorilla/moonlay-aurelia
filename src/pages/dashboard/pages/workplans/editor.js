import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service'
import moment from 'moment'
import {BaseVM} from '../../../base-vm';
import 'bootstrap-material-design';

@inject(Service, Router)
export class Editor extends BaseVM {
  constructor(service, router) {
    super();
    this.service = service;
    this.router = router;
  }

  activate(params) {
    this.initial = params.initial;
    this.month = params.month;
    this.period = params.period;

    this.service.get(this.initial, this.month, this.period)
      .then(json => {
        this.data = json.data;
      })
      .catch(e => showError(e));
  }

  attached() {
    $.material.init();
  }

  add() {
    var now = new Date();
    var UserWorkplanItem = require('capital-models').workplan.UserWorkplanItem;
    var item = new UserWorkplanItem(
      {
        estimatedDate: moment(this.data.period.to).format('YYYY-MM-DD'),
        completedDate: moment(this.data.period.to).format('YYYY-MM-DD')
      });
    // var item = {
    //   no: 0,
    //   code: '',
    //   month: this.data.period.month,
    //   period: this.data.period.period,
    //   type: '',
    //   name: '',
    //   description: '',
    //   estDate: moment(this.data.period.to).format('YYYY-MM-DD'),
    //   done: false,
    //   completeDate: moment(this.data.period.to).format('YYYY-MM-DD'),
    //   void: false,
    //   reason: ''
    // };
    this.data.items.push(item);
  }

  save() {
    this.service.put(this.data)
      .then(json => {
        this.router.navigateToRoute('list');
      })
      .catch(e => showError(e));
  }
  back() {
    this.router.navigateToRoute('list');
  }
}
