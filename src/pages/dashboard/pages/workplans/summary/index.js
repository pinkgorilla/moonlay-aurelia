import {inject} from 'aurelia-framework'
import {Service} from './service'
import {BaseVM} from 'pages/base-vm';
import 'bootstrap-material-design';

@inject(Service)
export class Index extends BaseVM {
    constructor(service) {
        super();
        this.service = service;
    }
    
    activate() {
        this.service.get()
            .then(result => this.data = result)
            .catch(e => this.showError(e));
    }
}