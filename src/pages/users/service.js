import {inject, transient} from 'aurelia-framework';
import {Settings} from '../../app-config';
import {Session} from '../../session';
import {RestService} from '../rest-service'

@inject(Session, Settings)
@transient()
export class Service extends RestService {
  constructor(session, settings) {
    super();
    this.session = session;
    this.settings = settings;

    this.header = {
      "Content-type": "application/json; charset=UTF-8"
    };
    this.header[this.settings.tokenHeaderName] = "JWT " + this.session.token;

  }

  get(username) {
    var endpoint = this.settings.authEndpoint + '/accounts';
    if (username)
      endpoint = endpoint + '/' + username;

    return super.get(endpoint, this.header);
  }

  put(user) {
    var endpoint = this.settings.authEndpoint + '/accounts/' + user.username;

    return super.put(endpoint, user, this.header);
  }

  post(user) {
    var endpoint = this.settings.authEndpoint + '/accounts';

    return super.post(endpoint, user, this.header);
  }
}
