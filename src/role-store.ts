export interface RoleDefinition {
  role: string;
  definition: () => Promise<any>;
}

export default class RoleStore {
  private roleDefinitions: RoleDefinition[] = [];

  defineRole(role: string, definition: () => Promise<any>) {
    const definitions = this.roleDefinitions.filter(rd => rd.role === role);

    if (definitions.length > 0) {
      throw Error(`Cannot provide multiple definitions for the same role: ${role}!`);
    }

    this.roleDefinitions.push({
      role: role,
      definition: definition
    });
  }

  defineRoles(roles: string[], definition: (role: string) => Promise<any>) {
    roles.forEach(role => this.defineRole(role, () => definition(role)));
  }

  getDefinition(role: string): () => Promise<any> {
    const definitions = this.roleDefinitions.filter(rd => rd.role === role);

    return definitions.length > 0 ? definitions[0].definition : null;
  }
}
