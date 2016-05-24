import {inject, bindable} from 'aurelia-framework'
import 'bootstrap-material-design';

@inject(Element)
export class SummaryItem {
    @bindable item = {};

    constructor(element) {
        this.element = element;
    }

    attached() {

        var pb = require('progressbar.js');
        var container = this.element.querySelector("div[class='circle-bar']");
        this.progressBar = new pb.Line(container, {
            color: '#3F51B5',
            strokeWidth: 2,
            trailColor: '#ddd',
            trailWidth: 2,
            text: {
                value: '0',
                style: {
                    color: '#104A85',
                    position: 'absolute',
                    right: '0',
                    top: '23px',
                    padding: 0,
                    'font-size': '1.3em',
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


        // var momentParams = this.item.period.month.split("-").map(item => parseInt(item));

        // //http://momentjs.com/docs/#/parsing/array/
        // //month is 0 indexed (0 is january);
        // momentParams[1] = momentParams[1] - 1;

        // this.title = moment(momentParams).format("MMMM YYYY") + ', Period 0' + this.data.period.period;
        // this.title = this.title.toUpperCase();

        this.progressBar.animate(this.item.completion / 100, {
            step: function (state, circle, attachment) {
                circle.setText((circle.value() * 100).toFixed(0) + "%");
            }
        });
    }
}