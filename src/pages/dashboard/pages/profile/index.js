import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Service} from './service'
import {BaseVM} from 'pages/base-vm';
import {genders} from 'lookup';
import 'bootstrap-material-design';

@inject(Router, Service, genders)
export class Index extends BaseVM {
    constructor(router, service, genders) {
        super();
        this.router = router;
        this.service = service;
        this.genders = genders;
    }

    activate() {
        this.service.get()
            .then(profile => {
                console.log(profile)
                this.data = profile;
            })
            .catch(e => this.showError(e));
    }

    attached() {
        $.material.init();
    }

    back() {
        this.router.navigateToRoute('dashboard');
    }

    save() {
        this.service.put(this.data)
            .then(profile => {
                console.log(profile)
                this.data = profile;
                this.router.navigateToRoute('dashboard');
            })
            .catch(e => this.showError(e));

    }
}