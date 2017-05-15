export interface PermissionDefinition {
    permission: string;
    definition: () => boolean;
}
export default class PermissionStore {
    static DefaultDefinition: (permissions: string[]) => (permission: string) => any;
    private permissionDefinitions;
    private defaultDefinition;
    private permissionObject;
    useDefaultDefinition(permissions: string[]): void;
    definePermission(permission: string, definition?: () => boolean): void;
    definePermissions(permissions: string[], definition?: (permission: string) => boolean): void;
    definePermissionObject(permissionObject: any, definition?: (permission: string) => boolean): void;
    getDefinition(permission: string): () => boolean;
    getPermissionName(permission: string): any;
}
