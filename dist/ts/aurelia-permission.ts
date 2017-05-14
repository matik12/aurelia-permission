import { FrameworkConfiguration } from 'aurelia-framework';
import { AppRouter } from 'aurelia-router';

import PermissionsStore from './permission-store';
import AuthorizeRouteStep from './authorize-route-step';
import AuthorizeService from './authorize-service';

export function configure(framework: FrameworkConfiguration, config: (permissionsStore) => void) {
  const permissionsStore = <PermissionsStore>framework.container.get(PermissionsStore);
  config(permissionsStore);

  // Configure pipeline step for authorization before activate is invoked
  const appRouter = framework.container.get(AppRouter);
  const authorizePipelineStep = appRouter.pipelineProvider.steps.find(step => { return step.slotName === 'preActivate'; });
  authorizePipelineStep.steps.push(AuthorizeRouteStep);

  framework.globalResources('./permission-only');
}

export {
  PermissionsStore,
  AuthorizeService
}
