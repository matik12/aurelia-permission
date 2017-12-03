System.register(["aurelia-router", "./permission-store", "./authorize-route-step", "./authorization-service", "./global-permission-show", "./global-permission-enable", "./permission-filter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            './global-permission-show',
            './global-permission-enable',
            './permission-filter'
        ]);
    }
    exports_1("configure", configure);
    var aurelia_router_1, permission_store_1, authorize_route_step_1, authorization_service_1, global_permission_show_1, global_permission_enable_1, permission_filter_1;
    return {
        setters: [
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (permission_store_1_1) {
                permission_store_1 = permission_store_1_1;
            },
            function (authorize_route_step_1_1) {
                authorize_route_step_1 = authorize_route_step_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            },
            function (global_permission_show_1_1) {
                global_permission_show_1 = global_permission_show_1_1;
            },
            function (global_permission_enable_1_1) {
                global_permission_enable_1 = global_permission_enable_1_1;
            },
            function (permission_filter_1_1) {
                permission_filter_1 = permission_filter_1_1;
            }
        ],
        execute: function () {
            exports_1("PermissionStore", permission_store_1.default);
            exports_1("AuthorizationService", authorization_service_1.default);
            exports_1("GlobalPermissionShow", global_permission_show_1.GlobalPermissionShow);
            exports_1("GlobalPermissionEnable", global_permission_enable_1.GlobalPermissionEnable);
            exports_1("PermissionFilterValueConverter", permission_filter_1.PermissionFilterValueConverter);
        }
    };
});
