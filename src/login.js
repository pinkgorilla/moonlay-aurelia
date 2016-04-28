import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Session} from 'session';
import 'bootstrap-material-design';

@inject(Router)
export class Login {
  constructor(router) {
    this.router = router; 
  }

  login() {
    this.router.navigateToRoute('dashboard', {
      initial: this.initial
    });
  }
  attached() {
    $.material.init();
  }
}
