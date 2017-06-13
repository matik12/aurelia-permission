System.register(["aurelia-framework", "./authorization-service", "./permission-store"], function (exports_1, context_1) {
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
    var aurelia_framework_1, authorization_service_1, permission_store_1, Permission, Permission_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            },
            function (permission_store_1_1) {
                permission_store_1 = permission_store_1_1;
            }
        ],
        execute: function () {
            Permission = Permission_1 = (function () {
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
            exports_1("Permission", Permission);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WUFOZixVQUFVO2dCQUZ0Qiw4QkFBVSxFQUFFO2dCQUNaLG1DQUFlLENBQUMsWUFBWSxDQUFDO2lEQXFCakIsT0FBTztvQkFDYywrQkFBb0I7b0JBQ3pCLDBCQUFlO2VBdEIvQixVQUFVLENBcUV0Qjs7UUFDRCxDQUFDIiwiZmlsZSI6InBlcm1pc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0IEF1dGhvcml6YXRpb25TZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXphdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IFBlcm1pc3Npb25TdG9yZSBmcm9tICcuL3Blcm1pc3Npb24tc3RvcmUnO1xyXG5cclxuLy8gU2FtcGxlIHVzYWdlczpcclxuLy8gcGVybWlzc2lvbj1cIm9ubHk6IGFkZFVzZXJzXCJcclxuLy8gcGVybWlzc2lvbj1cIm9ubHk6IGFkZFVzZXJzLCBkZWxldGVVc2VyczsgZGlzYWJsZS5iaW5kOiB0cnVlOyBpcy1hY3RpdmUuYmluZDogdHJ1ZVwiXHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ3Blcm1pc3Npb24nKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbiB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgU2VwYXJhdG9yID0gJywnO1xyXG5cclxuICBAYmluZGFibGUgb25seTogc3RyaW5nO1xyXG4gIEBiaW5kYWJsZSBkaXNhYmxlID0gZmFsc2U7XHJcbiAgQGJpbmRhYmxlIGlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgZ2V0IG9ubHlQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5vbmx5ID9cclxuICAgICAgdGhpcy5vbmx5LnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoUGVybWlzc2lvbi5TZXBhcmF0b3IpIDpcclxuICAgICAgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBvbk5vdEF1dGhvcml6ZWQgPSB0aGlzLmhpZGVFbGVtZW50O1xyXG4gIHByaXZhdGUgb25BdXRob3JpemVkID0gdGhpcy5zaG93RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50OiBFbGVtZW50LFxyXG4gICAgcHJpdmF0ZSBhdXRob3JpemF0aW9uU2VydmljZTogQXV0aG9yaXphdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkJpbmQoKTtcclxuICAgIHRoaXMub25Ob3RBdXRob3JpemVkKCk7XHJcblxyXG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSB0aGlzLm9ubHlQZXJtaXNzaW9ucy5tYXAocGVybWlzc2lvbiA9PiB0aGlzLnBlcm1pc3Npb25TdG9yZS5nZXRQZXJtaXNzaW9uTmFtZShwZXJtaXNzaW9uKSk7XHJcbiAgICBjb25zdCBpc0F1dGhvcml6ZWQgPSB0aGlzLmF1dGhvcml6YXRpb25TZXJ2aWNlLmlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9ucyk7XHJcblxyXG4gICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICB0aGlzLm9uQXV0aG9yaXplZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CaW5kKCkge1xyXG4gICAgdGhpcy51cGRhdGVEaXNhYmxlQmVoYXZpb3VyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNhYmxlQmVoYXZpb3VyKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZSkge1xyXG4gICAgICB0aGlzLm9uTm90QXV0aG9yaXplZCA9IHRoaXMuZGlzYWJsZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkID0gdGhpcy5lbmFibGVFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=
