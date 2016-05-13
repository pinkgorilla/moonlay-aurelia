import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';
import {BaseVM} from '../base-vm';

@inject(Router, Service)
export class List extends BaseVM{
  constructor(router, service) {
    super();
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
      .then(json => { 
        this.data = json;
      })
      .catch(e => this.showError(e));
  }
}
