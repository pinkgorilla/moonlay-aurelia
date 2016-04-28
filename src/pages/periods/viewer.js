import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {periods} from '../../lookup';
import {Service} from './service';
import 'bootstrap-material-design';
import moment from 'moment';

@inject(Router, Service, periods)
export class Viewer {

  constructor(router, service, periods) {
    this.router = router;
    this.service = service;
    this.periods = periods;
  }
  activate(params) {
    var month = params.month;
    var period = params.period;
    if (month && period) {
      this.service.get(month, period)
        .then(json => this.data = json.data);
    }
  }

  attached() {
    $.material.init();
  }

  //navigation
  back() {
    this.router.navigateToRoute('list');
  }
}
