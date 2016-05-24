import {transient} from 'aurelia-framework' 
import {SecureService} from 'pages/secure-service';
 
@transient()
export class Service extends SecureService {
    constructor( ) {
        super(); 
    }

    get() {
        var endpoint = this.settings.workplanEndpoint + '/workplans/insight';
        return super.get(endpoint, this.header);
    }

    putItem(month, period, item) {
        var endpoint = this.settings.workplanEndpoint + '/workplans' + '/' + month + '/' + period + '/items/' + item.code;
        return super.put(endpoint, item, this.header);
    }

    postItem(month, period, item) {
        var endpoint = this.settings.workplanEndpoint + '/workplans' + '/' + month + '/' + period + '/items/';
        return super.post(endpoint, item, this.header);
    }
}
