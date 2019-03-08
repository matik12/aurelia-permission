import { autoinject, customAttribute, bindable } from 'aurelia-framework';

import AuthorizationService from './authorization-service';

// Sample usage:
// global-permission-else="can: AddUsers"

@autoinject()
@customAttribute('global-permission-else')
export class GlobalPermissionElse {

  @bindable can = '';
  @bindable check = true;

  get canPermissions(): string[] {
    return this.can ? this.can.replace(' ', '').split(',') : [];
  }

  constructor(private element: Element, private authorizationService: AuthorizationService) { }

  bind() {
    if (this.check && this.authorizationService.isAuthorizedByPermissionName(this.canPermissions)) {
      this.removeElement();
    }
  }

  private removeElement() {
    this.element.parentElement.removeChild(this.element);
  }
}
