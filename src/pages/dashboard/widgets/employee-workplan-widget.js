import {inject, bindable} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {types} from '../../../lookup';
import {Service} from '../service'
import {Service as PeriodService} from 'pages/periods/service';

@inject(Router, Service, types, PeriodService)
export class EmployeeWorkplanWidget {
  @bindable initial;

  constructor(router, service, types, periodService) {
    this.router = router;
    this.service = service;
    this.types = types;
    this.periodService = periodService;

    this.workplan = {
      items: [{
        type: 'self',
        name: 'TASK01',
        description: 'description task 01',
        estimatedCompletionDate: '2016-04-18'
      }, {
        type: 'self',
        name: 'TASK02',
        description: 'description task 02',
        estimatedCompletionDate: '2016-04-29'
      }]
    }
  }

  attached() {
    this.periodService.get()
      .then(json => {this.periods = json.data; console.log(data)});
  }
}
