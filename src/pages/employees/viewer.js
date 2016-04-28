import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service';
import {genders} from '../../lookup';
import 'bootstrap-material-design';

@inject(Router, Service, genders)
export class Viewer {
  constructor(router, service, genders) {
    this.router = router;
    this.service = service;
    this.genders = genders;
  }

  activate(params) {
    var initial = params.initial;
    this.service.get(initial)
      .then(json => this.data = json.data);
  }

  attached() {
    $.material.init();
  }

  //navigation
  back() {
    this.router.navigateToRoute('list');
  }
}
