import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service';
import {genders} from '../../lookup';
import {BaseVM} from '../base-vm';
import 'bootstrap-material-design';

@inject(Router, Service, genders)
export class Viewer extends BaseVM {
  constructor(router, service, genders) {
    super();
    this.router = router;
    this.service = service;
    this.genders = genders;
  }

  activate(params) {
    var username = params.username;
    this.service.get(username)
      .then(json => {
        this.data = json.data;
      })
      .catch(e => this.showError(e));
  }

  attached() {
    $.material.init();
  }

  //navigation
  back() {
    this.router.navigateToRoute('list');
  }
}
