import PermissionsStore from './permission-store';
export default class AuthorizeService {
    private permissionsStore;
    constructor(permissionsStore: PermissionsStore);
    isAuthorized(...permissions: string[]): Promise<any>;
    private getPermissionDefinitions(onlyAuthorizePermissions);
}
