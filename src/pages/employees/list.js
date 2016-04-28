import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';

@inject(Router, Service)
export class List {
  constructor(router, service) {
    this.router = router;
    this.service = service;
  }

  view(employee) {
    this.router.navigateToRoute('view', {
      initial: employee.initial
    })

  }

  edit(employee) {
    this.router.navigateToRoute('edit', {
      initial: employee.initial
    })
  }
  
  create() {
    this.router.navigateToRoute('create');
  }

  activate() {
    this.service.get()
      .then(json => this.data = json.data);
  }
}
