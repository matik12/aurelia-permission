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
  constructor(private authorizeService: AuthorizeService) { }

  run(routingContext, next: Next) {
    const toRoute: PermissionRoute = routingContext.config;
    const routeHasConfig = toRoute.settings && toRoute.settings.permission;
    const permissionConfig = routeHasConfig ? toRoute.settings.permission : null;

    // Authorize when no permissions have been set
    if (!routeHasConfig) {
      return next();
    }

    return this.authorizeService.isAuthorized(...permissionConfig.only)
      .then(() => next())
      .catch(() => next.cancel(new Redirect(permissionConfig.redirectTo || '')));
  }
}
