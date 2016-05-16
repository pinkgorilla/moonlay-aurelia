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
        this.toastr.error(error.message || error.error || error);
    }
    showSuccess(success) {
        this.toastr.success(success.message || success);
    }
    showWarning(warning) {
        this.toastr.warning(warning.message || warning);
    }
    showInfo(info) {
        this.toastr.info(info.message || info);
    }
}