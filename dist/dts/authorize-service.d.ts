import PermissionStore from './permission-store';
export default class AuthorizeService {
    private permissionStore;
    constructor(permissionStore: PermissionStore);
    isAuthorized(...permissions: string[]): boolean;
    private getPermissionDefinitions(onlyAuthorizePermissions);
}
