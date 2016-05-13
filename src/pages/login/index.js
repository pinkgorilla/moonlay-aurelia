import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';
import {Session} from '../../session';
import {BaseVM} from '../base-vm';

import 'bootstrap-material-design';

@inject(Router, Service, Session)
export class Login extends BaseVM {
  constructor(router, service, session) {
    super();
    this.router = router;
    this.service = service;
    this.session = session;
  }

  login() {
    this.service.authenticate(this.username, this.password)
      .then(json => {
        this.session.token = json.token;
        this.router.navigateToRoute('dashboard');
      })
      .catch(e => this.showError(e));
  }
  attached() {
    $.material.init();
  }
}
