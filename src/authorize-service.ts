import { autoinject } from 'aurelia-dependency-injection';
import * as PromiseExtended from 'bluebird';

import PermissionsStore from './permission-store';

@autoinject()
export default class AuthorizeService {
  constructor(private permissionsStore: PermissionsStore) { }

  isAuthorized(...permissions: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const permissionDefinitions: Promise<any>[] = this.getPermissionDefinitions(permissions);

      // Authorize when no definitions provided for permissions
      if (permissionDefinitions.length === 0) {
        resolve();
        return;
      }

      // Authorize when any of permission definition promises has been resolved or
      // Not authorize if all promises were rejected
      PromiseExtended.any(permissionDefinitions).then(
        () => resolve(),
        () => reject(new Error('User has none of required permissions assigned'))
      );
    });
  }

  private getPermissionDefinitions(onlyAuthorizePermissions: string[]): Promise<any>[] {
    const permissionDefinitions: Promise<any>[] = [];

    onlyAuthorizePermissions.forEach(permission => {
      const permissionDefinition = this.permissionsStore.getDefinition(permission);

      if (permissionDefinition) {
        permissionDefinitions.push(permissionDefinition());
      }
    });

    return permissionDefinitions;
  }
}
