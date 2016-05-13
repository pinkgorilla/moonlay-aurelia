import {inject} from 'aurelia-framework'
import {Settings} from '../../../../app-config';
import {Session} from '../../../../session';
import {RestService} from '../../../rest-service';

@inject(Settings, Session)
export class Service extends RestService {
  constructor(settings, session) {
    super();
    this.settings = settings;
    this.session = session;
    this.header = {
      "Content-type": "application/json; charset=UTF-8"
    };
    this.header[this.settings.tokenHeaderName] = this.session.token;
  }

  get(initial, month, period) {
    var endpoint = this.settings.workplanEndpoint + '/workplans';
    if (month && period)
      endpoint = endpoint + '/' + month + '/' + period;

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
