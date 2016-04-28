import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service'
import 'bootstrap-material-design';

@inject(Service, Router)
export class List {

  constructor(service, router) {
    this.service = service;
    this.router = router;
  }

  activate(params) {
    this.initial = params.initial;
    this.service.get(this.initial)
      .then(json => {
        this.data = json.data;
        console.log(json)
      });
  }

  attached() {
    $.material.init();
  }

  edit(workplan) {
    this.router.navigateToRoute('edit', {
      month: workplan.month,
      period: workplan.period
    })
  }
}
