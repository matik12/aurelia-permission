import { autoinject } from 'aurelia-dependency-injection';
import { Redirect, Next, RouteConfig } from 'aurelia-router';

import AuthorizationService from './authorization-service';

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

  constructor(private authorizationService: AuthorizationService) { }

  run(navigationInstruction, next: Next) {
    const allInstructions = navigationInstruction.getAllInstructions().reverse();
    const permissionInstruction = allInstructions.find(instruction => this.hasPermissionSettings(instruction.config));
    const permissionSettings = permissionInstruction ? permissionInstruction.config.settings.permission : null;

    const noRoutePermissionsSet = !permissionInstruction;
    const isAuthorized = permissionSettings === null || this.authorizationService.isAuthorized(...permissionSettings.only);

    if (noRoutePermissionsSet || isAuthorized) {
      return next();
    }

    return next.cancel(new Redirect(permissionSettings.redirectTo || this.defaultRedirectRoute));
  }

  hasPermissionSettings(instructionConfig) {
    return instructionConfig.settings && instructionConfig.settings.permission;
  }

  useDefaultRedirectRoute(route: string) {
    this.defaultRedirectRoute = route;
  }
}
