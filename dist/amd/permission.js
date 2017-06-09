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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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dG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuL2F1dGhvcml6YXRpb24tc2VydmljZSc7XHJcbmltcG9ydCBQZXJtaXNzaW9uU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuXHJcbi8vIFNhbXBsZSB1c2FnZXM6XHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2Vyc1wiXHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2VycywgZGVsZXRlVXNlcnM7IGRpc2FibGUuYmluZDogdHJ1ZVwiXHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ3Blcm1pc3Npb24nKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbiB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgU2VwYXJhdG9yID0gJywnO1xyXG5cclxuICBAYmluZGFibGUgb25seTogc3RyaW5nO1xyXG4gIEBiaW5kYWJsZSBkaXNhYmxlID0gZmFsc2U7XHJcblxyXG4gIGdldCBvbmx5UGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMub25seSA/XHJcbiAgICAgIHRoaXMub25seS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KFBlcm1pc3Npb24uU2VwYXJhdG9yKSA6XHJcbiAgICAgIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgb25Ob3RBdXRob3JpemVkID0gdGhpcy5oaWRlRWxlbWVudDtcclxuICBwcml2YXRlIG9uQXV0aG9yaXplZCA9IHRoaXMuc2hvd0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudDogRWxlbWVudCxcclxuICAgIHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZVxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLm9uQmluZCgpO1xyXG4gICAgdGhpcy5vbk5vdEF1dGhvcml6ZWQoKTtcclxuXHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMub25seVBlcm1pc3Npb25zLm1hcChwZXJtaXNzaW9uID0+IHRoaXMucGVybWlzc2lvblN0b3JlLmdldFBlcm1pc3Npb25OYW1lKHBlcm1pc3Npb24pKTtcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zKTtcclxuXHJcbiAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJpbmQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XHJcbiAgICAgIHRoaXMub25Ob3RBdXRob3JpemVkID0gdGhpcy5kaXNhYmxlRWxlbWVudDtcclxuICAgICAgdGhpcy5vbkF1dGhvcml6ZWQgPSB0aGlzLmVuYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
