import { autoinject, customAttribute, bindable } from 'aurelia-framework';

import AuthorizationService from './authorization-service';

// Sample usage:
// global-permission-enable="can: AddUsers, DeleteUsers; check.bind: true"

@autoinject()
@customAttribute('global-permission-enable')
export class GlobalPermissionEnable {

  @bindable can = '';
  @bindable check = true;

  get canPermissions(): string[] {
    return this.can ? this.can.replace(' ', '').split(',') : [];
  }

  private element: any;

  constructor(element: Element, private authorizationService: AuthorizationService) {
    this.element = element;
  }

  bind() {
    if (this.check && !this.authorizationService.isAuthorizedByPermissionName(this.canPermissions)) {
      this.disableElement();
    }
  }

  private disableElement() {
    this.element.setAttribute('disabled', '');
  }
}
