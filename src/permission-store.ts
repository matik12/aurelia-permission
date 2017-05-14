export interface PermissionDefinition {
  permission: string;
  definition: () => boolean;
}

export default class PermissionStore {
  private permissionDefinitions: PermissionDefinition[] = [];

  definePermission(permission: string, definition: () => boolean) {
    const definitions = this.permissionDefinitions.filter(pd => pd.permission === permission);

    if (definitions.length > 0) {
      throw Error(`Cannot provide multiple definitions for the same permission: ${permission}!`);
    }

    this.permissionDefinitions.push({
      permission: permission,
      definition: definition
    });
  }

  definePermissions(permissions: string[], definition: (permission: string) => boolean) {
    permissions.forEach(permission => this.definePermission(permission, () => definition(permission)));
  }

  getDefinition(permission: string): () => boolean {
    const permissionDefinition = this.permissionDefinitions.find(rd => rd.permission === permission);

    return permissionDefinition ? permissionDefinition.definition : null;
  }
}
