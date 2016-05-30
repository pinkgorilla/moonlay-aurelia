import {inject, transient} from 'aurelia-framework'
import {SecureService} from 'pages/secure-service';

@transient()
export class Service extends SecureService {
    constructor() {
        super();
        this._self = this;
    }

    get(period) {
        var endpoint = this.settings.workplanEndpoint + '/workplans/summary';
        if (period)
            endpoint = endpoint + '/' + period;
        else
            throw "no period selected";

        return super.get(endpoint, this.header);
    }

    getCsv(period) {
        var endpoint = this.settings.workplanEndpoint + '/workplans/summary';
        if (period)
            endpoint = endpoint + '/' + period + '/' + 'csv';
        else
            throw "no period selected";

        var request = {
            method: 'GET',
            headers: new Headers(Object.assign({}, this.header))
        };

        return this.http.fetch(endpoint, request)
            .then(response => {
                if (response.status == 200)
                    return Promise.resolve(response);
                else
                    return Promise.reject(new Error('Error downloading csv'));
            })
            .then(response => {
                return new Promise((resolve, reject) => {
                    response.blob()
                        .then(blob => {
                            var filename = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(response.headers.get("Content-Disposition"))[1];
                            filename = filename.replace(/"/g, '');
                            resolve({
                                filename: filename,
                                blob: blob
                            });
                        })
                        .catch(e => reject(e));
                })
            });
    }
}
