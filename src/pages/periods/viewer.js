import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {periods} from '../../lookup';
import {Service} from './service';
import {BaseVM} from '../base-vm';
import moment from 'moment';
import 'bootstrap-material-design';

@inject(Router, Service, periods)
export class Viewer extends BaseVM {

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
