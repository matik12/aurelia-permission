import { autoinject } from 'aurelia-dependency-injection';

import PermissionStore from './permission-store';

@autoinject()
export default class AuthorizeService {
  constructor(private permissionStore: PermissionStore) { }

  isAuthorized(...permissions: string[]): boolean {
    const permissionDefinitions: boolean[] = this.getPermissionDefinitions(permissions);
    const noDefinitionsSet = permissionDefinitions.length === 0;
    const anyPermissionDefinitionIsTrue = (<any>permissionDefinitions).includes(true);

    if (noDefinitionsSet || anyPermissionDefinitionIsTrue) {
      return true;
    }

    return false;
  }

  private getPermissionDefinitions(onlyAuthorizePermissions: string[]): boolean[] {
    const permissionDefinitions: boolean[] = [];

    onlyAuthorizePermissions.forEach(permission => {
      const permissionDefinition = this.permissionStore.getDefinition(permission);

      if (permissionDefinition) {
        permissionDefinitions.push(permissionDefinition());
      }
    });

    return permissionDefinitions;
  }
}
