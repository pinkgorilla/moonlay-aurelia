import {inject} from 'aurelia-framework';
import {Settings} from '../../app-config';
import {Session} from '../../session';
import {RestService} from '../rest-service';

@inject(Session, Settings)
export class Service extends RestService {
  constructor( session, settings) {
    super();
    this.session = session;
    this.settings = settings;

    this.header = {
      "Content-Type": "application/json; charset=UTF-8"
    };
    this.header[this.settings.tokenHeaderName] = this.session.token;
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
