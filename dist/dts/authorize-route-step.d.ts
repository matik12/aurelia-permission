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
    run(routingContext: any, next: Next): Promise<any>;
    useDefaultRedirectRoute(route: string): void;
}
