import {inject, transient} from 'aurelia-framework'
import {SecureService} from 'pages/secure-service';

@transient()
export class Service extends SecureService {
    constructor() {
        super();
    }
 
    get() {
        var endpoint = this.settings.authEndpoint + '/me';
        return super.get(endpoint, this.header);
    }
    put(data){ 
        var endpoint = this.settings.authEndpoint + '/me';
        return super.put(endpoint, data, this.header);
    }
}