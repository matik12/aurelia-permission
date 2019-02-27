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
    var aurelia_framework_1, authorization_service_1, GlobalPermissionIf;
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
            GlobalPermissionIf = (function () {
                function GlobalPermissionIf(element, authorizationService) {
                    this.element = element;
                    this.authorizationService = authorizationService;
                    this.can = '';
                    this.check = true;
                }
                Object.defineProperty(GlobalPermissionIf.prototype, "canPermissions", {
                    get: function () {
                        return this.can ? this.can.replace(' ', '').split(',') : [];
                    },
                    enumerable: true,
                    configurable: true
                });
                GlobalPermissionIf.prototype.bind = function () {
                    if (this.check && !this.authorizationService.isAuthorizedByPermissionName(this.canPermissions)) {
                        this.removeElement();
                    }
                };
                GlobalPermissionIf.prototype.removeElement = function () {
                    this.element.parentElement.removeChild(this.element);
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], GlobalPermissionIf.prototype, "can", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], GlobalPermissionIf.prototype, "check", void 0);
                GlobalPermissionIf = __decorate([
                    aurelia_framework_1.autoinject(),
                    aurelia_framework_1.customAttribute('global-permission-if'),
                    __metadata("design:paramtypes", [Element, authorization_service_1.default])
                ], GlobalPermissionIf);
                return GlobalPermissionIf;
            }());
            exports_1("GlobalPermissionIf", GlobalPermissionIf);
        }
    };
});
