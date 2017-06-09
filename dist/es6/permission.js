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
            exports_1("Permission", Permission);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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aXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuL2F1dGhvcml6YXRpb24tc2VydmljZSc7XHJcbmltcG9ydCBQZXJtaXNzaW9uU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuXHJcbi8vIFNhbXBsZSB1c2FnZXM6XHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2Vyc1wiXHJcbi8vIHBlcm1pc3Npb249XCJvbmx5OiBhZGRVc2VycywgZGVsZXRlVXNlcnM7IGRpc2FibGUuYmluZDogdHJ1ZVwiXHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ3Blcm1pc3Npb24nKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbiB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgU2VwYXJhdG9yID0gJywnO1xyXG5cclxuICBAYmluZGFibGUgb25seTogc3RyaW5nO1xyXG4gIEBiaW5kYWJsZSBkaXNhYmxlID0gZmFsc2U7XHJcblxyXG4gIGdldCBvbmx5UGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMub25seSA/XHJcbiAgICAgIHRoaXMub25seS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KFBlcm1pc3Npb24uU2VwYXJhdG9yKSA6XHJcbiAgICAgIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgb25Ob3RBdXRob3JpemVkID0gdGhpcy5oaWRlRWxlbWVudDtcclxuICBwcml2YXRlIG9uQXV0aG9yaXplZCA9IHRoaXMuc2hvd0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudDogRWxlbWVudCxcclxuICAgIHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZVxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLm9uQmluZCgpO1xyXG4gICAgdGhpcy5vbk5vdEF1dGhvcml6ZWQoKTtcclxuXHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMub25seVBlcm1pc3Npb25zLm1hcChwZXJtaXNzaW9uID0+IHRoaXMucGVybWlzc2lvblN0b3JlLmdldFBlcm1pc3Npb25OYW1lKHBlcm1pc3Npb24pKTtcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zKTtcclxuXHJcbiAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJpbmQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc2FibGVCZWhhdmlvdXIoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XHJcbiAgICAgIHRoaXMub25Ob3RBdXRob3JpemVkID0gdGhpcy5kaXNhYmxlRWxlbWVudDtcclxuICAgICAgdGhpcy5vbkF1dGhvcml6ZWQgPSB0aGlzLmVuYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
