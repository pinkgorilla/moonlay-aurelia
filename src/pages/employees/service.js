import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {Settings} from 'app-config';


@inject(HttpClient, Settings)
export class Service {
  constructor(http, settings) {
    this.http = http;
    this.settings = settings;
  }

  get(initial) {
    var endpoint = this.settings.baseUri + '/employees';
    if (initial)
      endpoint = endpoint + '/' + initial;

    return this.http.fetch(endpoint)
      .then(response => response.json());
  }

  put(employee) {
    var endpoint = this.settings.baseUri + '/employees/' + employee.initial;

    var request = {
      method: 'PUT',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify(employee)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }

  post(employee) {
    var endpoint = this.settings.baseUri + '/employees';

    var request = {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify(employee)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }
}
