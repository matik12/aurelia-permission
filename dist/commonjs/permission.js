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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFFO0lBQ1osbUNBQWUsQ0FBQyxZQUFZLENBQUM7cUNBcUJqQixPQUFPO1FBQ2MsK0JBQW9CO1FBQ3pCLDBCQUFlO0dBdEIvQixVQUFVLENBcUV0QjtBQXJFWSxnQ0FBVSIsImZpbGUiOiJwZXJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuL2F1dGhvcml6YXRpb24tc2VydmljZSc7XHJcbmltcG9ydCBQZXJtaXNzaW9uU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuXHJcbi8vIFNhbXBsZSB1c2FnZXM6XHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2Vyc1wiXHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2VycywgZGVsZXRlVXNlcnM7IGRpc2FibGUuYmluZDogdHJ1ZTsgaXMtYWN0aXZlLmJpbmQ6IHRydWVcIlxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY3VzdG9tQXR0cmlidXRlKCdwZXJtaXNzaW9uJylcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb24ge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFNlcGFyYXRvciA9ICcsJztcclxuXHJcbiAgQGJpbmRhYmxlIG9ubHk6IHN0cmluZztcclxuICBAYmluZGFibGUgZGlzYWJsZSA9IGZhbHNlO1xyXG4gIEBiaW5kYWJsZSBpc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gIGdldCBvbmx5UGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMub25seSA/XHJcbiAgICAgIHRoaXMub25seS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KFBlcm1pc3Npb24uU2VwYXJhdG9yKSA6XHJcbiAgICAgIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgb25Ob3RBdXRob3JpemVkID0gdGhpcy5oaWRlRWxlbWVudDtcclxuICBwcml2YXRlIG9uQXV0aG9yaXplZCA9IHRoaXMuc2hvd0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudDogRWxlbWVudCxcclxuICAgIHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZVxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25CaW5kKCk7XHJcbiAgICB0aGlzLm9uTm90QXV0aG9yaXplZCgpO1xyXG5cclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5vbmx5UGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gdGhpcy5wZXJtaXNzaW9uU3RvcmUuZ2V0UGVybWlzc2lvbk5hbWUocGVybWlzc2lvbikpO1xyXG4gICAgY29uc3QgaXNBdXRob3JpemVkID0gdGhpcy5hdXRob3JpemF0aW9uU2VydmljZS5pc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvbnMpO1xyXG5cclxuICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgdGhpcy5vbkF1dGhvcml6ZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmluZCgpIHtcclxuICAgIHRoaXMudXBkYXRlRGlzYWJsZUJlaGF2aW91cigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzYWJsZUJlaGF2aW91cigpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGUpIHtcclxuICAgICAgdGhpcy5vbk5vdEF1dGhvcml6ZWQgPSB0aGlzLmRpc2FibGVFbGVtZW50O1xyXG4gICAgICB0aGlzLm9uQXV0aG9yaXplZCA9IHRoaXMuZW5hYmxlRWxlbWVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0VsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNhYmxlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmFibGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICB9XHJcbn1cclxuIl19
