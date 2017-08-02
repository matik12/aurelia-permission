System.register(["aurelia-framework", "./authorization-service"], function (exports_1, context_1) {
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
    var aurelia_framework_1, authorization_service_1, PermissionFilterValueConverter;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            PermissionFilterValueConverter = (function () {
                function PermissionFilterValueConverter(authorizationService) {
                    this.authorizationService = authorizationService;
                }
                PermissionFilterValueConverter.prototype.toView = function (array) {
                    var _this = this;
                    return array.filter(function (item) { return _this.filterExpression(item); });
                };
                PermissionFilterValueConverter.prototype.filterExpression = function (item) {
                    var permissionConfig = item.config && item.config.settings && item.config.settings.permission;
                    var permissions = (permissionConfig && permissionConfig.only) || [];
                    return (_a = this.authorizationService).isAuthorized.apply(_a, permissions);
                    var _a;
                };
                return PermissionFilterValueConverter;
            }());
            PermissionFilterValueConverter = __decorate([
                aurelia_framework_1.autoinject(),
                __metadata("design:paramtypes", [authorization_service_1.default])
            ], PermissionFilterValueConverter);
            exports_1("PermissionFilterValueConverter", PermissionFilterValueConverter);
        }
    };
});
