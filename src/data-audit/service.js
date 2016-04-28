import {inject} from 'aurelia-framework'
import {HttpClient, json} from 'aurelia-fetch-client'

// let baseUrl = 'http://localhost:26299/v1/projects';
let baseUrl = 'http://11.11.1.42:9997/OCBCAPI/';

@inject(HttpClient)
export class Service {

  constructor(http)
  {
      http.configure(config=>{
        config
        .useStandardConfiguration()
        .withBaseUrl(baseUrl);
      });
      this.http = http;
  }

  get(type)
  {
    var query = new URLSearchParams('table=' + type);
    var request = {
      method : 'GET',
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body : query
    };
    return this.http
      .fetch('fileauditmovements?table=' + type)
      .then(response => response.json());
  }
}
