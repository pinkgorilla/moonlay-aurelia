import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'
import {Settings} from 'app-config';

@inject(HttpClient, Settings)
export class Service {
  constructor(http, settings) {
    this.http = http;
    this.settings = settings
  }

  get(initial, month, period) {
    var endpoint = this.settings.baseUri + '/' + initial + '/workplans';
    if (month && period)
      endpoint = endpoint + '/' + month + '/' + period;

    return this.http.fetch(endpoint)
      .then(response => response.json());
  }

  put(workplan) {
    var endpoint = this.settings.baseUri + '/' + workplan.initial + '/workplans/' + workplan.month + '/' + workplan.period;

    var request = {
      method: 'PUT',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify(workplan)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }

  post(workplan) {
    var endpoint = this.settings.baseUri + '/' + workplan.initial + '/workplans';

    var request = {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify(workplan)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }

}
