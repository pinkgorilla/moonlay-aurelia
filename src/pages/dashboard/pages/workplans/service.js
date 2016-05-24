import {inject, transient} from 'aurelia-framework' 
import {SecureService} from 'pages/secure-service';

@transient()
export class Service extends SecureService {
  constructor() {
    super();
  }

  get(month, period) {
    var endpoint = this.settings.workplanEndpoint + '/workplans';
    if (month && period)
      endpoint = endpoint + '/' + month + '/' + period;

    return super.get(endpoint, this.header);
  }

  getCurrent() {
    var endpoint = this.settings.workplanEndpoint + '/workplans/current';
    return super.get(endpoint, this.header);
  }


  put(workplan) {
    var endpoint = this.settings.workplanEndpoint + '/workplans/' + workplan.period.month + '/' + workplan.period.period;

    return super.put(endpoint, workplan, this.header);
  }

  post(workplan) {
    var endpoint = this.settings.workplanEndpoint + '/workplans';

    return super.post(endpoint, workplan, this.header);
  }

}
