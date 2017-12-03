import PermissionStore from './permission-store';
export default class AuthorizationService {
    private permissionStore;
    constructor(permissionStore: PermissionStore);
    isAuthorized(...permissions: string[]): boolean;
    isAuthorizedByPermissionName(permissionNames: string[]): boolean;
    private getPermissionDefinitions(onlyAuthorizePermissions);
}
