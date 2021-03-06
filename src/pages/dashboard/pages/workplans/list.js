import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service'
import {BaseVM} from 'pages/base-vm';
import 'bootstrap-material-design';

@inject(Service, Router)
export class List extends BaseVM {

  constructor(service, router) {
    super();
    this.service = service;
    this.router = router;
  }

  activate(params) {
    this.initial = params.initial;
    this.service.get()
      .then(json => {
        this.data = json;
      })
      .catch(e => this.showError(e));
  }

  attached() {
    $.material.init();
  }

  edit(workplan) {
    this.router.navigateToRoute('edit', {
      month: workplan.period.month,
      period: workplan.period.period
    })
  }
}
