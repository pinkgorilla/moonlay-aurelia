import {transient} from 'aurelia-framework'
import {SecureService} from 'pages/secure-service';

@transient()
export class Service extends SecureService {
    constructor(settings, session) {
        super(); 
    }

    get(month, period) {
        var endpoint = this.settings.workplanEndpoint + '/workplans/summary';
        if (month && period)
            endpoint = endpoint + '/' + month + '/' + period;

        return super.get(endpoint, this.header);
    } 
}
