import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {Settings} from 'app-config';
import {Session} from 'session';

@inject(HttpClient, Session, Settings)
export class Service {
  constructor(http, session, settings) {
    this.http = http;
    this.session = session;
    this.settings = settings;

    this.header = {
      "Content-type": "application/json; charset=UTF-8"
    };
    this.header[this.settings.tokenHeaderName] = this.session.token;
  }

  get(username) {
    var endpoint = this.settings.authEndpoint + '/accounts';
    if (username)
      endpoint = endpoint + '/' + username;

    var request = {
      method: 'GET',
      headers: new Headers(this.header)
    };
    return this.http.fetch(endpoint, request)
      .then(response => response.json());
  }

  put(user) {
    var endpoint = this.settings.authEndpoint + '/accounts/' + user.username;

    var request = {
      method: 'PUT',
      headers: new Headers(this.header),
      body: JSON.stringify(user)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }

  post(user) {
    var endpoint = this.settings.authEndpoint + '/accounts';

    var request = {
      method: 'POST',
      headers: new Headers(this.header),
      body: JSON.stringify(user)
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }
}
