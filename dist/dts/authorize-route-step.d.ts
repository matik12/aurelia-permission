import { Next, RouteConfig } from 'aurelia-router';
import AuthorizationService from './authorization-service';
export interface PermissionRoute extends RouteConfig {
    settings: {
        permission: {
            only: string[];
            redirectTo?: string;
        };
    };
}
export default class AuthorizeRouteStep {
    private authorizationService;
    private defaultRedirectRoute;
    constructor(authorizationService: AuthorizationService);
    run(navigationInstruction: any, next: Next): Promise<any>;
    hasPermissionSettings(instructionConfig: any): any;
    useDefaultRedirectRoute(route: string): void;
}
