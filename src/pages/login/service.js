import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'
import {Settings} from 'app-config'

@inject(HttpClient, Settings)
export class Service {
  constructor(http, settings) {
    this.http = http;
    this.settings = settings;
  }


  authenticate(username, password) {
    var endpoint = this.settings.authEndpoint + "/authenticate";

    var request = {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify({
        username: username,
        password: password
      })
    };

    return this.http
      .fetch(endpoint, request)
      .then(response => response.json());
  }
}
