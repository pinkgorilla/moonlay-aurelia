import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {periods} from '../../lookup';
import {Service} from './service';
import {BaseVM} from '../base-vm';
import moment from 'moment';
import 'bootstrap-material-design';

@inject(Router, Service, periods)
export class Editor extends BaseVM {
  constructor(router, service, periods) {
    super();
    this.router = router;
    this.service = service;
    this.periods = periods;
  }

  activate(params) {
    var month = params.month;
    var period = params.period;
    if (month && period) {
      this.service.get(month, period)
        .then(json => {
          this.data = json.data;
        })
        .catch(e => showError(e));
    } else {
      var now = new Date();
      this.data = {
        month: moment(now).format('YYYY-MM'),
        period: 1,
        from: now,
        to: now
      };
    }
  }

  attached() {
    $.material.init();
  }

  //navigation
  back() {
    this.router.navigateToRoute('list');
  }

  save() {
    var promise;
    if (this.data._id)
      promise = this.service.put(this.data)
    else
      promise = this.service.post(this.data)

    promise
      .then(json => {
        this.router.navigateToRoute('list');
      })
      .catch(e => showError(e));
  }
}
