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
        if (json.error) {
          this.showError(json.error);
        }
        else if (json.data) {
          if (json.data.success === false) {
            this.showError(json.data);
          }
          else {
            this.session.token = json.data.token;
            this.router.navigateToRoute('dashboard');
          }
        }
      })
      .catch(e => this.showError(e));
  }
  attached() {
    $.material.init();
  }
}
