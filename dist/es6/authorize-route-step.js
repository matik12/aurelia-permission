System.register(["aurelia-dependency-injection", "aurelia-router", "./authorization-service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_dependency_injection_1, aurelia_router_1, authorization_service_1, AuthorizeRouteStep;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            AuthorizeRouteStep = (function () {
                function AuthorizeRouteStep(authorizationService) {
                    this.authorizationService = authorizationService;
                    this.defaultRedirectRoute = '';
                }
                AuthorizeRouteStep.prototype.run = function (navigationInstruction, next) {
                    var _this = this;
                    var allInstructions = navigationInstruction.getAllInstructions().reverse();
                    var permissionInstruction = allInstructions.find(function (instruction) { return _this.hasPermissionSettings(instruction.config); });
                    var permissionSettings = permissionInstruction ? permissionInstruction.config.settings.permission : null;
                    var noRoutePermissionsSet = !permissionInstruction;
                    var isAuthorized = permissionSettings === null || (_a = this.authorizationService).isAuthorized.apply(_a, permissionSettings.only);
                    if (noRoutePermissionsSet || isAuthorized) {
                        return next();
                    }
                    return next.cancel(new aurelia_router_1.Redirect(permissionSettings.redirectTo || this.defaultRedirectRoute));
                    var _a;
                };
                AuthorizeRouteStep.prototype.hasPermissionSettings = function (instructionConfig) {
                    return instructionConfig.settings && instructionConfig.settings.permission;
                };
                AuthorizeRouteStep.prototype.useDefaultRedirectRoute = function (route) {
                    this.defaultRedirectRoute = route;
                };
                AuthorizeRouteStep = __decorate([
                    aurelia_dependency_injection_1.autoinject(),
                    __metadata("design:paramtypes", [authorization_service_1.default])
                ], AuthorizeRouteStep);
                return AuthorizeRouteStep;
            }());
            exports_1("default", AuthorizeRouteStep);
        }
    };
});
