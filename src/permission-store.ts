export interface PermissionDefinition {
  permission: string;
  definition: () => Promise<any>;
}

export default class PermissionStore {
  private permissionDefinitions: PermissionDefinition[] = [];

  definePermission(permission: string, definition: () => Promise<any>) {
    const definitions = this.permissionDefinitions.filter(rd => rd.permission === permission);

    if (definitions.length > 0) {
      throw Error(`Cannot provide multiple definitions for the same permission: ${permission}!`);
    }

    this.permissionDefinitions.push({
      permission: permission,
      definition: definition
    });
  }

  definePermissions(permissions: string[], definition: (permission: string) => Promise<any>) {
    permissions.forEach(permission => this.definePermission(permission, () => definition(permission)));
  }

  getDefinition(permission: string): () => Promise<any> {
    const definitions = this.permissionDefinitions.filter(rd => rd.permission === permission);

    return definitions.length > 0 ? definitions[0].definition : null;
  }
}
