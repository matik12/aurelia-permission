import { autoinject } from 'aurelia-dependency-injection';
import { RouteConfig } from 'aurelia-router';
import * as PromiseExtended from 'bluebird';

import PermissionsStore from './permission-store';

export interface PermissionRoute extends RouteConfig {
  settings: {
    permission: {
      only: string[];
      redirectTo?: string;
    }
  };
}

export interface AuthorizeRedirect {
  result: boolean;
  cancelRoute?: string;
}

@autoinject()
export default class AuthorizeService {
  constructor(private permissionsStore: PermissionsStore) { }

  canRedirect(toRoute: PermissionRoute): Promise<AuthorizeRedirect> {
    return new Promise<AuthorizeRedirect>(resolve => {
      const routeHasConfig = toRoute.settings && toRoute.settings.permission;
      const permissionConfig = routeHasConfig ? toRoute.settings.permission : null;

      // Authorize when no permissions has been set
      if (!routeHasConfig) {
        resolve(this.createRedirectResult());
        return;
      }

      const permissionDefinitions: Promise<any>[] = this.getPermissionDefinitions(permissionConfig.only);

      // Authorize when no definitions provided for permissions
      if (permissionDefinitions.length === 0) {
        resolve(this.createRedirectResult());
        return;
      }

      // Authorize when any of permission definition promises has been resolved or
      // Not authorize if all promises were rejected
      PromiseExtended.any(permissionDefinitions).then(
        () => resolve(this.createRedirectResult()),
        () => resolve(this.createRedirectResult(false, permissionConfig.redirectTo))
      );
    });
  }

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

  private createRedirectResult(result: boolean = true, cancelRoute?: string): AuthorizeRedirect {
    return {
      result: result,
      cancelRoute: cancelRoute
    };
  }
}
