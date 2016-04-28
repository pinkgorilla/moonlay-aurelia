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
  created() {
    console.log('created');
  }
  activate(params) {
    console.log('activate');
    var initial = params.initial;
    if (initial) {
      this.service.get(initial)
        .then(json => {
          this.data = json.data;
          console.log(this.data);
        });
    } else {
      this.data = {
        dob: '2016-04-21'
      };
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
