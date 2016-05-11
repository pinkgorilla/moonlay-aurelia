import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Session} from '../../session';
import 'bootstrap-material-design';


@inject(Router, Session)
export class Home
{
  constructor(router, session)
  {
    this.router = router;
    this.session = session;
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
