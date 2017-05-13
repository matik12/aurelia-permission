import { Next } from 'aurelia-router';
import AuthorizeService from './authorize-service';
export default class AuthorizeRouteStep {
    private authorizeService;
    constructor(authorizeService: AuthorizeService);
    run(routingContext: any, next: Next): Promise<{}>;
}
