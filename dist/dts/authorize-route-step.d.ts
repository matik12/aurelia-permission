import { Next, RouteConfig } from 'aurelia-router';
import AuthorizeService from './authorize-service';
export interface PermissionRoute extends RouteConfig {
    settings: {
        permission: {
            only: string[];
            redirectTo?: string;
        };
    };
}
export default class AuthorizeRouteStep {
    private authorizeService;
    constructor(authorizeService: AuthorizeService);
    run(routingContext: any, next: Next): Promise<any>;
}
