// import 'progressbar.js'
import {inject} from 'aurelia-framework';
import {Service} from './service';
import moment from 'moment';

@inject(Element, Service)
export class Insight {
    constructor(element, service) {
        this.element = element;
        this.service = service;
        this.title = "Loading...";
    }

    attached() {
        var pb = require('progressbar.js');
        var container = this.element.querySelector("div[class='circle-bar']");
        this.progressBar = new pb.Circle(container, {
            color: '#3F51B5',
            strokeWidth: 14,
            trailColor: '#ddd',
            trailWidth: 16,
            text: {
                value: '0',
                style: {
                    color: '#104A85',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    padding: 0,
                    'font-size': '1.5em',
                    'font-weight': 'bold',
                    margin: 0,
                    // You can specify styles which will be browser prefixed
                    transform: {
                        prefix: true,
                        value: 'translate(-50%, -50%)'
                    }

                }
            }
        });

        this.service.get()
            .then(data => {
                this.data = data;

                var momentParams = this.data.period.month.split("-").map(item => parseInt(item));
                
                //http://momentjs.com/docs/#/parsing/array/
                //month is 0 indexed (0 is january);
                momentParams[1] = momentParams[1] - 1;
                
                this.title = moment(momentParams).format("MMMM YYYY") + ', Period 0' + this.data.period.period;
                this.title = this.title.toUpperCase();

                this.progressBar.animate(data.completion / 100, {
                    step: function (state, circle, attachment) {
                        circle.setText((circle.value() * 100).toFixed(0) + "%");
                    }
                });
            })
            .catch(e => { throw e });
    }

    updateItem(item) {
        this.service.putItem(this.data.period.month, this.data.period.period, item)
            .then(result => {
                this.data._stamp = result._stamp;
                this.data.completion = result.completion;
                this.progressBar.animate(this.data.completion / 100, {
                    step: function (state, circle, attachment) {
                        circle.setText((circle.value() * 100).toFixed(0) + "%");
                    }
                });
            });
    }
}