import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';
import {BaseVM} from 'pages/base-vm';


@inject(Router, Service)
export class List extends BaseVM {
  constructor(router, service) {
    super();
    this.router = router;
    this.service = service;
  }

  view(period) {
    this.router.navigateToRoute('view', {
      month: period.month,
      period: period.period
    })

  }

  edit(period) {
    this.router.navigateToRoute('edit', {
      month: period.month,
      period: period.period
    })
  }

  create() {
    this.router.navigateToRoute('create');
  }

  activate() {
    this.service.get()
      .then(json => {
        this.data = json;
      })
      .catch(e => this.showError(e));
  }
}
