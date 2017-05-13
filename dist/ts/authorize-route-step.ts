import { Redirect, Next } from 'aurelia-router';
import { autoinject } from 'aurelia-dependency-injection';

import AuthorizeService, { PermissionRoute, AuthorizeRedirect } from './authorize-service';

@autoinject()
export default class AuthorizeRouteStep {
  constructor(private authorizeService: AuthorizeService) { }

  run(routingContext, next: Next) {
    const toState: PermissionRoute = routingContext.config;

    const navigationPromise = new Promise((resolve) => {

      this.authorizeService.canRedirect(toState).then(
        (authorizeRedirect: AuthorizeRedirect) => {

          if (authorizeRedirect.result) {
            next().then(result => resolve(result));
          } else {
            next.cancel(new Redirect(authorizeRedirect.cancelRoute || '')).then(result => resolve(result));
          }

          return authorizeRedirect;
        });

    });

    return navigationPromise;
  }
}
