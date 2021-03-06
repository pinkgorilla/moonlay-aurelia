import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service'
import moment from 'moment'
import {BaseVM} from 'pages/base-vm';
import 'bootstrap-material-design';

@inject(Service, Router)
export class Editor extends BaseVM {
  constructor(service, router) {
    super();
    this.service = service;
    this.router = router;
    this.data = { items: [] };
  }

  activate(params) {
    this.initial = params.initial;
    this.month = params.month;
    this.period = params.period;

    this.service.get(this.month, this.period)
      .then(json => {
        this.data = json;
      })
      .catch(e => this.showError(e));
  }

  attached() {
    $.material.init();
  }

  add() {
    var now = new Date();
    var UserWorkplanItem = require('workplan-models').UserWorkplanItem;
    var item = new UserWorkplanItem(
      {
        estimatedDate: moment(this.data.period.to).format('YYYY-MM-DD'),
        completedDate: moment(this.data.period.to).format('YYYY-MM-DD')
      });
    this.data.items.push(item);
  }

  save() {
    this.service.put(this.data)
      .then(json => {
        this.router.navigateToRoute('list');
      })
      .catch(e => this.showError(e));
  }

  back() {
    this.router.navigateToRoute('list');
  }

  get isValid() {
    for (var item of this.data.items) {
      if (!item.type || item.type.length < 1)
        return false;
      if (!item.name || item.name.length < 1)
        return false;
      if (item.cancel == true && (!item.cancelReason || item.cancelReason.length < 1))
        return false;
    }
    return true;
  }
}
