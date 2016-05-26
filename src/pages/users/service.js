import {transient} from 'aurelia-framework';
import {SecureService} from 'pages/secure-service'

@transient()
export class Service extends SecureService {
  constructor() {
    super();
  }

  get(username) {
    var endpoint = this.settings.authEndpoint + '/accounts';
    if (username)
      endpoint = endpoint + '/' + username;

    return super.get(endpoint, this.header);
  }

  put(user) { 
    var endpoint = this.settings.authEndpoint + '/accounts';

    return super.put(endpoint, user, this.header);
  }

  post(user) {
    var endpoint = this.settings.authEndpoint + '/accounts';
    
    return super.post(endpoint, user, this.header);
  }
}
