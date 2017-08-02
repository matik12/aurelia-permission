"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var permission_store_1 = require("./permission-store");
exports.PermissionStore = permission_store_1.default;
var authorize_route_step_1 = require("./authorize-route-step");
var authorization_service_1 = require("./authorization-service");
exports.AuthorizationService = authorization_service_1.default;
var permission_1 = require("./permission");
exports.Permission = permission_1.Permission;
var permission_filter_1 = require("./permission-filter");
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
