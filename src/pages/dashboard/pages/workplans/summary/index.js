import {inject} from 'aurelia-framework'
import {Service} from './service'
import {Service as PeriodService} from 'pages/periods/service';
import {BaseVM} from 'pages/base-vm'; 
import 'bootstrap-material-design';

@inject(Service, PeriodService)
export class Index extends BaseVM {
    constructor(service, periodService) {
        super();
        this.service = service;
        this.periodService = periodService;
    }

    activate() {
        var promisePeriod = this.periodService.get()
            .then(periods => {
                this.periods = periods;
            })
            .catch(e => this.showError(e));
    }

    loadSummary() {
        this.service.get(this.period)
            .then(result => {
                this.data = result;
                console.log('loaded')
            })
            .catch(e => this.showError(e));
    }

    downloadSummary() {
        this.service.getCsv(this.period)
            .then(data => { 
                var fileSaver = require('file-saver');
                console.log(data.filename);
                fileSaver.saveAs(data.blob, data.filename);
            })
            .catch(e => this.showError(e));
    }
}