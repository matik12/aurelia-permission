import { autoinject } from 'aurelia-framework';

import AuthorizeService from './authorize-service';

@autoinject()
export class PermissionOnly {

  public static StyleAttributeName = 'style';
  public static PermissionSeparator = ',';

  private permissions: string[];

  constructor(private element: Element, private authorizeService: AuthorizeService) { }

  attached() {
    this.hideElement();

    this.authorizeService.isAuthorized(...this.permissions)
      .then(() => this.showElement())
      .catch(() => { /* Do just nothing, because element is already hidden */ }
    );
  }

  valueChanged(newValue: string) {
    this.permissions = newValue ?
      newValue.replace(' ', '').split(PermissionOnly.PermissionSeparator) :
      [];
  }

  private hideElement() {
    this.element.setAttribute(PermissionOnly.StyleAttributeName, 'display: none;');
  }

  private showElement() {
    this.element.removeAttribute(PermissionOnly.StyleAttributeName);
  }
}
