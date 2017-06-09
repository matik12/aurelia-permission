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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var authorization_service_1 = require("./authorization-service");
var permission_store_1 = require("./permission-store");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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bnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuL2F1dGhvcml6YXRpb24tc2VydmljZSc7XHJcbmltcG9ydCBQZXJtaXNzaW9uU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuXHJcbi8vIFNhbXBsZSB1c2FnZXM6XHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2Vyc1wiXHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2VycywgZGVsZXRlVXNlcnM7IGRpc2FibGUuYmluZDogdHJ1ZVwiXHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ3Blcm1pc3Npb24nKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbiB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgU2VwYXJhdG9yID0gJywnO1xyXG5cclxuICBAYmluZGFibGUgb25seTogc3RyaW5nO1xyXG4gIEBiaW5kYWJsZSBkaXNhYmxlID0gZmFsc2U7XHJcblxyXG4gIGdldCBvbmx5UGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMub25seSA/XHJcbiAgICAgIHRoaXMub25seS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KFBlcm1pc3Npb24uU2VwYXJhdG9yKSA6XHJcbiAgICAgIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgb25Ob3RBdXRob3JpemVkID0gdGhpcy5oaWRlRWxlbWVudDtcclxuICBwcml2YXRlIG9uQXV0aG9yaXplZCA9IHRoaXMuc2hvd0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudDogRWxlbWVudCxcclxuICAgIHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZVxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLm9uQmluZCgpO1xyXG4gICAgdGhpcy5vbk5vdEF1dGhvcml6ZWQoKTtcclxuXHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMub25seVBlcm1pc3Npb25zLm1hcChwZXJtaXNzaW9uID0+IHRoaXMucGVybWlzc2lvblN0b3JlLmdldFBlcm1pc3Npb25OYW1lKHBlcm1pc3Npb24pKTtcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zKTtcclxuXHJcbiAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJpbmQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XHJcbiAgICAgIHRoaXMub25Ob3RBdXRob3JpemVkID0gdGhpcy5kaXNhYmxlRWxlbWVudDtcclxuICAgICAgdGhpcy5vbkF1dGhvcml6ZWQgPSB0aGlzLmVuYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
