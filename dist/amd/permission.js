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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QXFCakIsT0FBTztZQUNjLCtCQUFvQjtZQUN6QiwwQkFBZTtPQXRCL0IsVUFBVSxDQXFFdEI7SUFyRVksZ0NBQVUiLCJmaWxlIjoicGVybWlzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXphdGlvblNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemF0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgUGVybWlzc2lvblN0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG4vLyBTYW1wbGUgdXNhZ2VzOlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnNcIlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnMsIGRlbGV0ZVVzZXJzOyBkaXNhYmxlLmJpbmQ6IHRydWU7IGlzLWFjdGl2ZS5iaW5kOiB0cnVlXCJcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGN1c3RvbUF0dHJpYnV0ZSgncGVybWlzc2lvbicpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBTZXBhcmF0b3IgPSAnLCc7XHJcblxyXG4gIEBiaW5kYWJsZSBvbmx5OiBzdHJpbmc7XHJcbiAgQGJpbmRhYmxlIGRpc2FibGUgPSBmYWxzZTtcclxuICBAYmluZGFibGUgaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICBnZXQgb25seVBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLm9ubHkgP1xyXG4gICAgICB0aGlzLm9ubHkucmVwbGFjZSgnICcsICcnKS5zcGxpdChQZXJtaXNzaW9uLlNlcGFyYXRvcikgOlxyXG4gICAgICBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xyXG5cclxuICBwcml2YXRlIG9uTm90QXV0aG9yaXplZCA9IHRoaXMuaGlkZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBvbkF1dGhvcml6ZWQgPSB0aGlzLnNob3dFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXHJcbiAgICBwcml2YXRlIGF1dGhvcml6YXRpb25TZXJ2aWNlOiBBdXRob3JpemF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmVcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uQmluZCgpO1xyXG4gICAgdGhpcy5vbk5vdEF1dGhvcml6ZWQoKTtcclxuXHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMub25seVBlcm1pc3Npb25zLm1hcChwZXJtaXNzaW9uID0+IHRoaXMucGVybWlzc2lvblN0b3JlLmdldFBlcm1pc3Npb25OYW1lKHBlcm1pc3Npb24pKTtcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zKTtcclxuXHJcbiAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJpbmQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XHJcbiAgICAgIHRoaXMub25Ob3RBdXRob3JpemVkID0gdGhpcy5kaXNhYmxlRWxlbWVudDtcclxuICAgICAgdGhpcy5vbkF1dGhvcml6ZWQgPSB0aGlzLmVuYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
