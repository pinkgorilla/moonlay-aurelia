import {Settings} from 'app-config';
import {Session} from 'session';
import {RestService} from 'pages/rest-service';

export class SecureService extends RestService {
  constructor() {
    super();
    this.settings = new Settings();
    this.session = new Session();
    this.header = {
      "Content-type": "application/json; charset=UTF-8"
    };
    this.header[this.settings.tokenHeaderName] = "JWT " + this.session.token;
  }
}
