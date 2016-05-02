import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';

@inject(Router, Service)
export class List {
  constructor(router, service) {
    this.router = router;
    this.service = service;
  }

  view(user) {
    this.router.navigateToRoute('view', {
      username: user.username
    })

  }

  edit(user) { 
    this.router.navigateToRoute('edit', {
      username: user.username
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
