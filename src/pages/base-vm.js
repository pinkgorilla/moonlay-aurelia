import 'toastr';
import '../../node_modules/toastr/build/toastr.min.css';

export class BaseVM {

    constructor() {
        this.toastr = require('toastr');
        this.toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "1000",
            "hideDuration": "1000",
            "timeOut": "6000",
            "extendedTimeOut": "500",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }
    showError(error) {
        console.log(error);
        this.toastr.error(error.message || error.error || error, 'title');
    }
    showSuccess(message) {
        console.log(message);
    }
    showWarning(message) {
        console.log(message);
    }
    showInfo(message) {
        console.log(message);
    }
}