System.register(["aurelia-framework", "./authorize-service", "./permission-store"], function (exports_1, context_1) {
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
    var aurelia_framework_1, authorize_service_1, permission_store_1, Permission, Permission_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
            },
            function (permission_store_1_1) {
                permission_store_1 = permission_store_1_1;
            }
        ],
        execute: function () {
            Permission = Permission_1 = (function () {
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
            exports_1("Permission", Permission);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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aXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5pbXBvcnQgUGVybWlzc2lvblN0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG4vLyBTYW1wbGUgdXNhZ2VzOlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnNcIlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnMsIGRlbGV0ZVVzZXJzOyBkaXNhYmxlLmJpbmQ6IHRydWVcIlxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY3VzdG9tQXR0cmlidXRlKCdwZXJtaXNzaW9uJylcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb24ge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFNlcGFyYXRvciA9ICcsJztcclxuXHJcbiAgQGJpbmRhYmxlIG9ubHk6IHN0cmluZztcclxuICBAYmluZGFibGUgZGlzYWJsZSA9IGZhbHNlO1xyXG5cclxuICBnZXQgb25seVBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLm9ubHkgP1xyXG4gICAgICB0aGlzLm9ubHkucmVwbGFjZSgnICcsICcnKS5zcGxpdChQZXJtaXNzaW9uLlNlcGFyYXRvcikgOlxyXG4gICAgICBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xyXG5cclxuICBwcml2YXRlIG9uTm90QXV0aG9yaXplZCA9IHRoaXMuaGlkZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBvbkF1dGhvcml6ZWQgPSB0aGlzLnNob3dFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXHJcbiAgICBwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMub25CaW5kKCk7XHJcbiAgICB0aGlzLm9uTm90QXV0aG9yaXplZCgpO1xyXG5cclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5vbmx5UGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gdGhpcy5wZXJtaXNzaW9uU3RvcmUuZ2V0UGVybWlzc2lvbk5hbWUocGVybWlzc2lvbikpO1xyXG4gICAgY29uc3QgaXNBdXRob3JpemVkID0gdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9ucyk7XHJcblxyXG4gICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICB0aGlzLm9uQXV0aG9yaXplZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CaW5kKCkge1xyXG4gICAgdGhpcy51cGRhdGVEaXNhYmxlQmVoYXZpb3VyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNhYmxlQmVoYXZpb3VyKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZSkge1xyXG4gICAgICB0aGlzLm9uTm90QXV0aG9yaXplZCA9IHRoaXMuZGlzYWJsZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkID0gdGhpcy5lbmFibGVFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=
