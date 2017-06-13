import { autoinject } from 'aurelia-framework';

import AuthorizationService from './authorization-service';

// Sample value converter usage:
// "item of items | permissionFilter"

@autoinject()
export class PermissionFilterValueConverter {

  constructor(private authorizationService: AuthorizationService) {}

  toView(array) {
    return array.filter(item => this.filterExpression(item));
  }

  filterExpression(item) {
    const permissionConfig = item.config && item.config.settings && item.config.settings.permission;
    const permissions = (permissionConfig && permissionConfig.only) || [];

    return this.authorizationService.isAuthorized(...permissions);
  }
}
