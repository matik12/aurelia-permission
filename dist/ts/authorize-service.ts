import { autoinject } from 'aurelia-dependency-injection';
import { RouteConfig } from 'aurelia-router';
import * as PromiseExtended from 'bluebird';

import RoleStore from './role-store';

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
  constructor(private roleStore: RoleStore) { }

  canRedirect(toRoute: PermissionRoute): Promise<AuthorizeRedirect> {
    return new Promise<AuthorizeRedirect>(resolve => {
      const routeHasConfig = toRoute.settings && toRoute.settings.permission;
      const permissionConfig = routeHasConfig ? toRoute.settings.permission : null;

      // Authorize when no role permissions has been set
      if (!routeHasConfig) {
        resolve(this.createRedirectResult());
        return;
      }

      const roleDefinitions: Promise<any>[] = this.getRoleDefinitions(permissionConfig.only);

      // Authorize when no definitions provided for role permissions
      if (roleDefinitions.length === 0) {
        resolve(this.createRedirectResult());
        return;
      }

      // Authorize when any role definition promises has been resolved or
      // Not authorize if all promises were rejected
      PromiseExtended.any(roleDefinitions).then(
        () => resolve(this.createRedirectResult()),
        () => resolve(this.createRedirectResult(false, permissionConfig.redirectTo))
      );
    });
  }

  isAuthorized(roleList: string): Promise<any> {
    const onlyRoles: string[] = roleList.replace(' ', '').split(',');

    return new Promise((resolve, reject) => {
      const roleDefinitions: Promise<any>[] = this.getRoleDefinitions(onlyRoles);

      // Authorize when no definitions provided for role permissions
      if (roleDefinitions.length === 0) {
        resolve();
        return;
      }

      // Authorize when any role definition promises has been resolved or
      // Not authorize if all promises were rejected
      PromiseExtended.any(roleDefinitions).then(
        () => resolve(),
        () => reject(new Error('User has none of required roles assigned'))
      );
    });
  }

  private getRoleDefinitions(onlyAuthorizeRoles: string[]): Promise<any>[] {
    const roleDefinitions: Promise<any>[] = [];

    onlyAuthorizeRoles.forEach(role => {
      const roleDefinition = this.roleStore.getDefinition(role);

      if (roleDefinition) {
        roleDefinitions.push(roleDefinition());
      }
    });

    return roleDefinitions;
  }

  private createRedirectResult(result: boolean = true, cancelRoute?: string): AuthorizeRedirect {
    return {
      result: result,
      cancelRoute: cancelRoute
    };
  }
}
