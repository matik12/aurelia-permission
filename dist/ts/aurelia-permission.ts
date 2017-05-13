import { FrameworkConfiguration } from 'aurelia-framework';
import { AppRouter } from 'aurelia-router';

import RoleStore from './role-store';
import AuthorizeRouteStep from './authorize-route-step';
import AuthorizeService from './authorize-service';

export function configure(framework: FrameworkConfiguration, config: (roleStore) => void) {

  const roleStore = <RoleStore>framework.container.get(RoleStore);

  config(roleStore);

  framework.globalResources('./permission-only');

  framework.aurelia.start().then(() => {
    // Add authorize step before view-model activate predefined pipeline step
    const appRouter = <AppRouter>framework.container.get(AppRouter);
    (<any>appRouter).pipelineProvider.steps.splice(3, 0, AuthorizeRouteStep);
  });
}

export {
  RoleStore,
  AuthorizeService
}
