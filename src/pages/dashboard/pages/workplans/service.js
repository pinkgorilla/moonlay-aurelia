import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'
import {Settings} from '../../../../app-config';
import {Session} from '../../../../session';

@inject(HttpClient, Settings, Session)
export class Service {
  constructor(http, settings, session) {
    this.http = http;
    this.settings = settings;
    this.session = session;
    this.header = {
      "Content-type": "application/json; charset=UTF-8"
    };
    this.header[this.settings.tokenHeaderName] = this.session.token;
    console.log(this.header);
  }

  get(initial, month, period) {
    var endpoint = this.settings.workplanEndpoint + '/workplans';
    if (month && period)
      endpoint = endpoint + '/' + month + '/' + period;
    var request = {
      method: 'GET',
      headers: new Headers(this.header)
    };
    return this.http.fetch(endpoint, request)
      .then(response => response.json());
  }

  put(workplan) {
    var endpoint = this.settings.workplanEndpoint + '/workplans/' + workplan.period.month + '/' + workplan.period.period;

    var request = {
      method: 'PUT',
      headers: new Headers(this.header),
      body: JSON.stringify(workplan)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }

  post(workplan) {
    var endpoint = this.settings.workplanEndpoint + '/workplans';

    var request = {
      method: 'POST',
      headers: new Headers(this.header),
      body: JSON.stringify(workplan)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }

}
