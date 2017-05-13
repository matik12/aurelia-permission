import { RouteConfig } from 'aurelia-router';
import PermissionsStore from './permission-store';
export interface PermissionRoute extends RouteConfig {
    settings: {
        permission: {
            only: string[];
            redirectTo?: string;
        };
    };
}
export interface AuthorizeRedirect {
    result: boolean;
    cancelRoute?: string;
}
export default class AuthorizeService {
    private permissionsStore;
    constructor(permissionsStore: PermissionsStore);
    canRedirect(toRoute: PermissionRoute): Promise<AuthorizeRedirect>;
    isAuthorized(...permissions: string[]): Promise<any>;
    private getPermissionDefinitions(onlyAuthorizePermissions);
    private createRedirectResult(result?, cancelRoute?);
}
