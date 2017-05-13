import { RouteConfig } from 'aurelia-router';
import RoleStore from './role-store';
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
    private roleStore;
    constructor(roleStore: RoleStore);
    canRedirect(toRoute: PermissionRoute): Promise<AuthorizeRedirect>;
    isAuthorized(roleList: string): Promise<any>;
    private getRoleDefinitions(onlyAuthorizeRoles);
    private createRedirectResult(result?, cancelRoute?);
}
