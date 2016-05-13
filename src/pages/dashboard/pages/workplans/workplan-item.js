import {bindable, inject} from 'aurelia-framework'
import {types} from '../../../../lookup';
import 'bootstrap-material-design';

@inject(types)
export class WorkplanItem {
    @bindable item = {};
    @bindable workplan = {};

    constructor(types) {
        this.types = types;
    }
    get itemNo() {
        var itemIndex = this.workplan.items.indexOf(this.item);
        return itemIndex + 1;
    }
    attached() {
        $.material.init();
    }
    remove() {
        var itemIndex = this.workplan.items.indexOf(this.item);
        this.workplan.items.splice(itemIndex, 1);
    }
    cancel() {
        this.item.done = false;
        if (!this.item.cancel)
            this.item.cancelReason = '';
        $.material.init();
    }
}