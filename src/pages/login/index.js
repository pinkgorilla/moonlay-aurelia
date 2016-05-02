import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';
import {Session} from 'Session';
import {Settings} from 'app-config';

import 'bootstrap-material-design';

@inject(Router, Service, Settings, Session)
export class Login {
  constructor(router, service, settings, session) {
    this.router = router;
    this.service = service;
    this.settings = settings
    this.session = session;
  }

  login() {
    this.service.authenticate(this.username, this.password)
    .then(json=>{
      this.session.token = json.data.token;
      this.router.navigateToRoute('dashboard');
    })
    .catch(e=> console.log(e));
  }
  attached() {
    $.material.init();
  }
}
