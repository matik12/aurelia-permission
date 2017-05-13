export interface RoleDefinition {
    role: string;
    definition: () => Promise<any>;
}
export default class RoleStore {
    private roleDefinitions;
    defineRole(role: string, definition: () => Promise<any>): void;
    defineRoles(roles: string[], definition: (role: string) => Promise<any>): void;
    getDefinition(role: string): () => Promise<any>;
}
