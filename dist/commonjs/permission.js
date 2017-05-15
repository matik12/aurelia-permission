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
var authorize_service_1 = require("./authorize-service");
var permission_store_1 = require("./permission-store");
var Permission = Permission_1 = (function () {
    function Permission(element, authorizeService, permissionStore) {
        this.authorizeService = authorizeService;
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
        var isAuthorized = (_a = this.authorizeService).isAuthorized.apply(_a, permissions);
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
        authorize_service_1.default,
        permission_store_1.default])
], Permission);
exports.Permission = Permission;
var Permission_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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bnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5pbXBvcnQgUGVybWlzc2lvblN0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG4vLyBTYW1wbGUgdXNhZ2VzOlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnNcIlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnMsIGRlbGV0ZVVzZXJzOyBkaXNhYmxlLmJpbmQ6IHRydWVcIlxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY3VzdG9tQXR0cmlidXRlKCdwZXJtaXNzaW9uJylcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb24ge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFNlcGFyYXRvciA9ICcsJztcclxuXHJcbiAgQGJpbmRhYmxlIG9ubHk6IHN0cmluZztcclxuICBAYmluZGFibGUgZGlzYWJsZSA9IGZhbHNlO1xyXG5cclxuICBnZXQgb25seVBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLm9ubHkgP1xyXG4gICAgICB0aGlzLm9ubHkucmVwbGFjZSgnICcsICcnKS5zcGxpdChQZXJtaXNzaW9uLlNlcGFyYXRvcikgOlxyXG4gICAgICBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xyXG5cclxuICBwcml2YXRlIG9uTm90QXV0aG9yaXplZCA9IHRoaXMuaGlkZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBvbkF1dGhvcml6ZWQgPSB0aGlzLnNob3dFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXHJcbiAgICBwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMub25CaW5kKCk7XHJcbiAgICB0aGlzLm9uTm90QXV0aG9yaXplZCgpO1xyXG5cclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5vbmx5UGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gdGhpcy5wZXJtaXNzaW9uU3RvcmUuZ2V0UGVybWlzc2lvbk5hbWUocGVybWlzc2lvbikpO1xyXG4gICAgY29uc3QgaXNBdXRob3JpemVkID0gdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9ucyk7XHJcblxyXG4gICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICB0aGlzLm9uQXV0aG9yaXplZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CaW5kKCkge1xyXG4gICAgdGhpcy51cGRhdGVEaXNhYmxlQmVoYXZpb3VyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNhYmxlQmVoYXZpb3VyKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZSkge1xyXG4gICAgICB0aGlzLm9uTm90QXV0aG9yaXplZCA9IHRoaXMuZGlzYWJsZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkID0gdGhpcy5lbmFibGVFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=
