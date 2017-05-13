import { FrameworkConfiguration } from 'aurelia-framework';
import { AppRouter } from 'aurelia-router';

import PermissionsStore from './permission-store';
import AuthorizeRouteStep from './authorize-route-step';
import AuthorizeService from './authorize-service';

export function configure(framework: FrameworkConfiguration, config: (permissionsStore) => void) {

  const permissionsStore = <PermissionsStore>framework.container.get(PermissionsStore);

  config(permissionsStore);

  framework.globalResources('./permission-only');

  framework.aurelia.start().then(() => {
    // Add authorize step before view-model activate predefined pipeline step
    const appRouter = <AppRouter>framework.container.get(AppRouter);
    (<any>appRouter).pipelineProvider.steps.splice(3, 0, AuthorizeRouteStep);
  });
}

export {
  PermissionsStore,
  AuthorizeService
}
