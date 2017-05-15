import { autoinject } from 'aurelia-dependency-injection';
import { Redirect, Next, RouteConfig } from 'aurelia-router';

import AuthorizeService from './authorize-service';

export interface PermissionRoute extends RouteConfig {
  settings: {
    permission: {
      only: string[];
      redirectTo?: string;
    }
  };
}

@autoinject()
export default class AuthorizeRouteStep {

  private defaultRedirectRoute = '';

  constructor(private authorizeService: AuthorizeService) { }

  run(routingContext, next: Next) {
    const toRoute: PermissionRoute = routingContext.config;
    const routeHasConfig = toRoute.settings && toRoute.settings.permission;
    const permissionConfig = routeHasConfig ? toRoute.settings.permission : null;

    const noRoutePermissionsSet = !routeHasConfig;
    const isAuthorized = permissionConfig === null || this.authorizeService.isAuthorized(...permissionConfig.only);

    if (noRoutePermissionsSet || isAuthorized) {
      return next();
    }

    return next.cancel(new Redirect(permissionConfig.redirectTo || this.defaultRedirectRoute));
  }

  useDefaultRedirectRoute(route: string) {
    this.defaultRedirectRoute = route;
  }
}
