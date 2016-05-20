import {bindable} from 'aurelia-framework'
import 'bootstrap-material-design';

export class InsightItem {
    @bindable insight = {};
    @bindable item = {};

    get itemNo() {
        var itemIndex = this.insight.data.items.indexOf(this.item);
        return itemIndex + 1;
    }

    attached() {
        $.material.init();
        this.preCancel = this.item.cancel;
    }

    remove() {
        var itemIndex = this.insight.data.items.indexOf(this.item);
        this.insight.data.items.splice(itemIndex, 1);
    }

    done() {
        // this.item.done = true;
        this.item.cancel = false;
        this.item.cancelReason = '';
        this.insight.updateItem(this.item);
    }

    cancel() {
        this.item.done = false;
        this.item.cancel = true;
        this.insight.updateItem(this.item);
    }

    toggleCancel() {
        this.preCancel = !this.preCancel;
        if (!this.preCancel && this.item.cancel) {
            this.item.cancel = false;
            this.insight.updateItem(this.item);
        }
    }
}