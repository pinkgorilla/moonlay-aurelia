import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {Settings} from 'app-config';


@inject(HttpClient, Settings)
export class Service {
  constructor(http, settings) {
    this.http = http;
    this.settings = settings;
  }

  get(month, period) {
    var endpoint = this.settings.baseUri + '/periods';
    if (month && period)
      endpoint = endpoint + '/' + month + '/' + period;

      console.log(endpoint);

    return this.http.fetch(endpoint)
      .then(response => response.json());
  }

  put(period) {
    var endpoint = this.settings.baseUri + '/periods/' + period.month + '/' + period.period;

    var request = {
      method: 'PUT',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify(period)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }

  post(period) {
    var endpoint = this.settings.baseUri + '/periods';

    var request = {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify(period)
    };
    console.log(period);
    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }
}
