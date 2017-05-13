import { autoinject } from 'aurelia-framework';

import AuthorizeService from './authorize-service';

@autoinject()
export class PermissionOnlyCustomAttribute {

  public static StyleAttributeName = 'style';

  private roles = '';

  constructor(private element: Element, private authorizeService: AuthorizeService) { }

  attached() {
    this.hideElement();

    this.authorizeService.isAuthorized(this.roles).then(
      () => this.showElement(),
      () => { /* Do just nothing, because element is already hidden */ }
    );
  }

  valueChanged(newValue: string) {
    this.roles = newValue;
  }

  private hideElement() {
    this.element.setAttribute(PermissionOnlyCustomAttribute.StyleAttributeName, 'display: none;');
  }

  private showElement() {
    this.element.removeAttribute(PermissionOnlyCustomAttribute.StyleAttributeName);
  }
}
