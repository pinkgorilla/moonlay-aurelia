import {inject} from 'aurelia-framework'
import {Settings} from '../../app-config';
import {RestService} from '../rest-service';

@inject(Settings)
export class Service extends RestService {
  constructor(settings) {
    super();
    this.settings = settings;
  }


  authenticate(username, password) {
    var endpoint = this.settings.authEndpoint + "/authenticate";
    return super.post(endpoint, {
      username: username,
      password: password
    });
  }
}
