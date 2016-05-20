import {inject, transient} from 'aurelia-framework'
import {Settings} from '../../../../../app-config';
import {Session} from '../../../../../session';
import {RestService} from '../../../../rest-service';

@inject(Settings, Session)
@transient()
export class Service extends RestService {
    constructor(settings, session) {
        super();
        this.settings = settings;
        this.session = session;
        this.header = {
            "Content-type": "application/json; charset=UTF-8"
        };
        this.header[this.settings.tokenHeaderName] = "JWT " + this.session.token;
    }

    get() {
        var endpoint = this.settings.workplanEndpoint + '/workplans/current';
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
