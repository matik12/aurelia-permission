export interface PermissionDefinition {
  permission: string;
  definition: () => boolean;
}

export default class PermissionStore {

  static DefaultDefinition = (permissions: string[]) => {
    return (permission: string) => (<any>permissions).includes(permission);
  }

  private permissionDefinitions: PermissionDefinition[] = [];
  private defaultDefinition: (permission: string) => boolean;

  private permissionObject: any;

  useDefaultDefinition(permissions: string[]) {
    this.defaultDefinition = PermissionStore.DefaultDefinition(permissions);
  }

  definePermission(permission: string, definition?: () => boolean) {
    const definitions = this.permissionDefinitions.filter(pd => pd.permission === permission);

    if (definitions.length > 0) {
      throw Error(`Cannot provide multiple definitions for the same permission: ${permission}!`);
    }

    const defaultPermissionDefinition = this.defaultDefinition ? () => this.defaultDefinition(permission) : null;
    definition = definition || defaultPermissionDefinition;

    if (!definition) {
      throw Error(`Configure store to use default definition function or provide it as parameter!`);
    }

    this.permissionDefinitions.push({
      permission: permission,
      definition: definition
    });
  }

  definePermissions(permissions: string[], definition?: (permission: string) => boolean) {
    permissions.forEach(permission => {
      const permissionDefinition = definition ? () => definition(permission) : null;

      this.definePermission(permission, permissionDefinition);
    });
  }

  definePermissionObject(permissionObject: any, definition?: (permission: string) => boolean) {
    this.permissionObject = permissionObject;
    const permissions = Object.getOwnPropertyNames(permissionObject).map(permission => permissionObject[permission]);

    this.definePermissions(permissions, definition);
  }

  getDefinition(permission: string): () => boolean {
    const permissionDefinition = this.permissionDefinitions.find(rd => rd.permission === permission);

    return permissionDefinition ? permissionDefinition.definition : null;
  }

  getPermissionName(permission: string) {
    return this.permissionObject ?
      this.permissionObject[permission] :
      permission;
  }
}
