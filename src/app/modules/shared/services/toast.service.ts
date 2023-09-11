import { Injectable, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SnackbarTemplateComponent } from '../components/snackbar-template/snackbar-template.component';
import { SnackBarService } from './snackbar.service';

declare let $: any;

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  constructor(
    private snackbarService: SnackBarService,
    private sanitize: DomSanitizer
  ) {}

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  jqueryToastAdminLte(title: string, subTitle: string, delay: any = 2500, className = '', icon = '') {
    $(document).Toasts('create', {
      title: title,
      body: `${subTitle}`,
      autohide: true,
      delay: delay || 1500,
      class: className || '',
      icon: icon || ''
    });
  }

  sweet2ToastNoti(title: string, icon = '', position = 'center', timer: any = 1500) {
    Swal.fire({
      position: position,
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: timer,
      customClass: {
        header: 'border-0'
      }
    });
  }

  toastSnackBar(msg = 'Here is your notifications') {
    this.snackbarService.config.component = SnackbarTemplateComponent;
    this.snackbarService.config.msg = msg;
    this.snackbarService.config.timeout = 1500;
    this.snackbarService.show(msg);
  }
}
