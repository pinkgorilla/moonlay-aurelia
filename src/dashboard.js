//import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import 'materialize-css';


@inject(Router)
export class Dashboard {
  constructor(router) {
    this.router = router;
  }
  navigate(route) {
    this.router.navigateToRoute(route);
  }

  attached() {
    Materialize.updateTextFields(); 
  }
}
