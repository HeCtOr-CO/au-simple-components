import * as toastr from 'toastr';

export class Notifier {
  constructor() {
    toastr.options.closeButton = true;
  }

  success(message: string) {
    toastr.success(message);
  }

  info(message: string) {
    toastr.info(message);
  }

  warning(message: string) {
    toastr.warning(message);
  }

  error(message: string) {
    toastr.error(message);
  }
}