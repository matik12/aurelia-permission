import { autoinject, customAttribute, bindable } from 'aurelia-framework';

import AuthorizationService from './authorization-service';

// Sample usage:
// global-permission-show="can: AddUsers"

@autoinject()
@customAttribute('global-permission-show')
export class GlobalPermissionShow {

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
      this.hideElement();
    }
  }

  private hideElement() {
    this.element.classList.add('aurelia-hide');
  }
}
