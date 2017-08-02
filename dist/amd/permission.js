var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./authorization-service", "./permission-store"], function (require, exports, aurelia_framework_1, authorization_service_1, permission_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Permission = Permission_1 = (function () {
        function Permission(element, authorizationService, permissionStore) {
            this.authorizationService = authorizationService;
            this.permissionStore = permissionStore;
            this.disable = false;
            this.isActive = true;
            this.onNotAuthorized = this.hideElement;
            this.onAuthorized = this.showElement;
            this.element = element;
        }
        Object.defineProperty(Permission.prototype, "onlyPermissions", {
            get: function () {
                return this.only ?
                    this.only.replace(' ', '').split(Permission_1.Separator) :
                    [];
            },
            enumerable: true,
            configurable: true
        });
        Permission.prototype.bind = function () {
            var _this = this;
            if (!this.isActive) {
                return;
            }
            this.onBind();
            this.onNotAuthorized();
            var permissions = this.onlyPermissions.map(function (permission) { return _this.permissionStore.getPermissionName(permission); });
            var isAuthorized = (_a = this.authorizationService).isAuthorized.apply(_a, permissions);
            if (isAuthorized) {
                this.onAuthorized();
            }
            var _a;
        };
        Permission.prototype.onBind = function () {
            this.updateDisableBehaviour();
        };
        Permission.prototype.updateDisableBehaviour = function () {
            if (this.disable) {
                this.onNotAuthorized = this.disableElement;
                this.onAuthorized = this.enableElement;
            }
        };
        Permission.prototype.hideElement = function () {
            this.element.style.display = 'none';
        };
        Permission.prototype.showElement = function () {
            this.element.style.display = '';
        };
        Permission.prototype.disableElement = function () {
            this.element.setAttribute('disabled', '');
        };
        Permission.prototype.enableElement = function () {
            this.element.removeAttribute('disabled');
        };
        return Permission;
    }());
    Permission.Separator = ',';
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], Permission.prototype, "only", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Permission.prototype, "disable", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Permission.prototype, "isActive", void 0);
    Permission = Permission_1 = __decorate([
        aurelia_framework_1.autoinject(),
        aurelia_framework_1.customAttribute('permission'),
        __metadata("design:paramtypes", [Element,
            authorization_service_1.default,
            permission_store_1.default])
    ], Permission);
    exports.Permission = Permission;
    var Permission_1;
});
