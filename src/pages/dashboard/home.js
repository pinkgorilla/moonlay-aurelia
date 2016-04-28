import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap-material-design';


@inject(Router)
export class Home
{
  constructor(router)
  {
    this.router = router;
  }

  activate(params)
  {
    this.initial = params.initial;
  }

  attached()
  {
    $.material.init();
  }


  goto(routeName)
  {
    this.router.navigateToRoute(routeName);
  }

}
