import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service';
import {genders} from '../../lookup';
import 'bootstrap-material-design';

@inject(Router, Service, genders)
export class Editor {
  change() {
    console.log(this.data)
  }
  constructor(router, service, genders) {
    this.router = router;
    this.service = service;
    this.genders = genders;
  }

  activate(params) {
    var username = params.username;
    if (username) {
      this.service.get(username)
        .then(json => {
          this.data = json.data;
        });
    } else {
      this.data = { };
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
    console.log(this.data);
    if (this.data._id)
      promise = this.service.put(this.data)
    else
      promise = this.service.post(this.data)

    promise.then(json => {
        console.log(json);
        this.router.navigateToRoute('list');
      })
      .catch(function(e) {
        alert('error:' + e);
      });
  }
}
