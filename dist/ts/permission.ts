import { autoinject, customAttribute, bindable } from 'aurelia-framework';

import AuthorizeService from './authorize-service';

// Sample usages:
// permission="only: addUsers"
// permission="only: addUsers, deleteUsers; disable.bind: true"

@autoinject()
@customAttribute('permission')
export class Permission {

  public static Separator = ',';

  @bindable only: string;
  @bindable disable = false;

  get onlyPermissions(): string[] {
    return this.only ?
      this.only.replace(' ', '').split(Permission.Separator) :
      [];
  }

  private element: any;

  private onNotAuthorized = this.hideElement;
  private onAuthorized = this.showElement;

  constructor(element: Element, private authorizeService: AuthorizeService) {
    this.element = element;
  }

  bind() {
    this.disableChanged();

    this.onNotAuthorized();
    this.authorizeService.isAuthorized(...this.onlyPermissions)
      .then(() => this.onAuthorized())
      .catch(() => { /* Do just nothing, because element is already in not authorized state */ });
  }

  disableChanged() {
    if (this.disable) {
      this.onNotAuthorized = this.disableElement;
      this.onAuthorized = this.enableElement;
    }
  }

  private hideElement() {
    this.element.style.display = 'none';
  }

  private showElement() {
    this.element.style.display = '';
  }

  private disableElement() {
    this.element.setAttribute('disabled', '');
  }

  private enableElement() {
    this.element.removeAttribute('disabled');
  }
}
