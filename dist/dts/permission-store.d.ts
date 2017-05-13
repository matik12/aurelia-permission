export interface PermissionDefinition {
    permission: string;
    definition: () => Promise<any>;
}
export default class PermissionStore {
    private permissionDefinitions;
    definePermission(permission: string, definition: () => Promise<any>): void;
    definePermissions(permissions: string[], definition: (permission: string) => Promise<any>): void;
    getDefinition(permission: string): () => Promise<any>;
}
