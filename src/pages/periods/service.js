import {transient} from 'aurelia-framework';
import {SecureService} from 'pages/secure-service';

@transient()
export class Service extends SecureService {
  constructor() {
    super();
  }

  get(month, period) {
    var endpoint = this.settings.workplanEndpoint + '/periods';
    if (month && period)
      endpoint = endpoint + '/' + month + '/' + period;

    return super.get(endpoint, this.header);
  }

  put(period) {
    var endpoint = this.settings.workplanEndpoint + '/periods/' + period.month + '/' + period.period;
    return super.put(endpoint, period, this.header);
  }

  post(period) {
    var endpoint = this.settings.workplanEndpoint + '/periods';
    return super.post(endpoint, period, this.header);
  }
}
