import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service';
import {genders} from '../../lookup';
import {BaseVM} from '../base-vm';
import 'bootstrap-material-design';

@inject(Router, Service, genders)
export class Editor extends BaseVM {
  constructor(router, service, genders) {
    super();
    this.router = router;
    this.service = service;
    this.genders = genders;
  }

  activate(params) {
    var username = params.username;
    if (username) {
      this.service.get(username)
        .then(json => {
          this.data = json;
        })
        .catch(e => this.showError(e));
    } else {
      this.data = {};
    }
  }

  attached() {
    $.material.init();
  }

  //navigation
  back() {
    this.router.navigateToRoute('list');
  }

  save() {
    var promise;
    if (this.data._id)
      promise = this.service.put(this.data)
    else
      promise = this.service.post(this.data)

    promise
      .then(json => {
        this.router.navigateToRoute('list');
      })
      .catch(e => this.showError(e));
  }
}
