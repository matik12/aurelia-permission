import { FrameworkConfiguration } from 'aurelia-framework';
import { AppRouter } from 'aurelia-router';

import PermissionStore from './permission-store';
import AuthorizeRouteStep from './authorize-route-step';
import AuthorizeService from './authorize-service';

export interface Configuration {
  useDefaultRedirectRoute: (route: string) => void;
}

export function configure(
  framework: FrameworkConfiguration,
  configure: (permissionStore: PermissionStore, configuration: Configuration) => void
) {
  const permissionStore = <PermissionStore>framework.container.get(PermissionStore);
  const authorizeRouteStep = <AuthorizeRouteStep>framework.container.get(AuthorizeRouteStep);

  configure(permissionStore, {
    useDefaultRedirectRoute: (route: string) => {
      authorizeRouteStep.useDefaultRedirectRoute(route);
    }
  });

  // Configure pipeline step for authorization before activate is invoked
  const appRouter = framework.container.get(AppRouter);
  const authorizePipelineStep = appRouter.pipelineProvider.steps.find(step => { return step.slotName === 'preActivate'; });
  authorizePipelineStep.steps.push(AuthorizeRouteStep);

  framework.globalResources('./permission');
}

export {
  PermissionStore,
  AuthorizeService
}
