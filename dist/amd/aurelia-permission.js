define(["require", "exports", "aurelia-router", "./permission-store", "./authorize-route-step", "./authorization-service", "./permission", "./permission-filter"], function (require, exports, aurelia_router_1, permission_store_1, authorize_route_step_1, authorization_service_1, permission_1, permission_filter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionStore = permission_store_1.default;
    exports.AuthorizationService = authorization_service_1.default;
    exports.Permission = permission_1.Permission;
    exports.PermissionFilterValueConverter = permission_filter_1.PermissionFilterValueConverter;
    function configure(framework, configure) {
        var permissionStore = framework.container.get(permission_store_1.default);
        var authorizeRouteStep = framework.container.get(authorize_route_step_1.default);
        configure(permissionStore, {
            useDefaultRedirectRoute: function (route) {
                authorizeRouteStep.useDefaultRedirectRoute(route);
            }
        });
        var appRouter = framework.container.get(aurelia_router_1.AppRouter);
        var authorizePipelineStep = appRouter.pipelineProvider.steps.find(function (step) { return step.slotName === 'preActivate'; });
        authorizePipelineStep.steps.push(authorize_route_step_1.default);
        framework.globalResources([
            './permission',
            './permission-filter'
        ]);
    }
    exports.configure = configure;
});
