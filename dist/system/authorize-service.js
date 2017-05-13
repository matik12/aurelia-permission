System.register(["aurelia-dependency-injection", "bluebird", "./permission-store"], function (exports_1, context_1) {
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
    var aurelia_dependency_injection_1, PromiseExtended, permission_store_1, AuthorizeService;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (PromiseExtended_1) {
                PromiseExtended = PromiseExtended_1;
            },
            function (permission_store_1_1) {
                permission_store_1 = permission_store_1_1;
            }
        ],
        execute: function () {
            AuthorizeService = (function () {
                function AuthorizeService(permissionsStore) {
                    this.permissionsStore = permissionsStore;
                }
                AuthorizeService.prototype.canRedirect = function (toRoute) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        var routeHasConfig = toRoute.settings && toRoute.settings.permission;
                        var permissionConfig = routeHasConfig ? toRoute.settings.permission : null;
                        if (!routeHasConfig) {
                            resolve(_this.createRedirectResult());
                            return;
                        }
                        var permissionDefinitions = _this.getPermissionDefinitions(permissionConfig.only);
                        if (permissionDefinitions.length === 0) {
                            resolve(_this.createRedirectResult());
                            return;
                        }
                        PromiseExtended.any(permissionDefinitions).then(function () { return resolve(_this.createRedirectResult()); }, function () { return resolve(_this.createRedirectResult(false, permissionConfig.redirectTo)); });
                    });
                };
                AuthorizeService.prototype.isAuthorized = function () {
                    var _this = this;
                    var permissions = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        permissions[_i] = arguments[_i];
                    }
                    return new Promise(function (resolve, reject) {
                        var permissionDefinitions = _this.getPermissionDefinitions(permissions);
                        if (permissionDefinitions.length === 0) {
                            resolve();
                            return;
                        }
                        PromiseExtended.any(permissionDefinitions).then(function () { return resolve(); }, function () { return reject(new Error('User has none of required permissions assigned')); });
                    });
                };
                AuthorizeService.prototype.getPermissionDefinitions = function (onlyAuthorizePermissions) {
                    var _this = this;
                    var permissionDefinitions = [];
                    onlyAuthorizePermissions.forEach(function (permission) {
                        var permissionDefinition = _this.permissionsStore.getDefinition(permission);
                        if (permissionDefinition) {
                            permissionDefinitions.push(permissionDefinition());
                        }
                    });
                    return permissionDefinitions;
                };
                AuthorizeService.prototype.createRedirectResult = function (result, cancelRoute) {
                    if (result === void 0) { result = true; }
                    return {
                        result: result,
                        cancelRoute: cancelRoute
                    };
                };
                return AuthorizeService;
            }());
            AuthorizeService = __decorate([
                aurelia_dependency_injection_1.autoinject(),
                __metadata("design:paramtypes", [permission_store_1.default])
            ], AuthorizeService);
            exports_1("default", AuthorizeService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCcUIsZ0JBQWdCO2dCQUNuQywwQkFBb0IsZ0JBQWtDO29CQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO2dCQUFJLENBQUM7Z0JBRTNELHNDQUFXLEdBQVgsVUFBWSxPQUF3QjtvQkFBcEMsaUJBMEJDO29CQXpCQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9CLFVBQUEsT0FBTzt3QkFDM0MsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDdkUsSUFBTSxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUc3RSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDOzRCQUNyQyxNQUFNLENBQUM7d0JBQ1QsQ0FBQzt3QkFFRCxJQUFNLHFCQUFxQixHQUFtQixLQUFJLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBR25HLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxPQUFPLENBQUMsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQzs0QkFDckMsTUFBTSxDQUFDO3dCQUNULENBQUM7d0JBSUQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FDN0MsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFwQyxDQUFvQyxFQUMxQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBdEUsQ0FBc0UsQ0FDN0UsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHVDQUFZLEdBQVo7b0JBQUEsaUJBaUJDO29CQWpCWSxxQkFBd0I7eUJBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3Qjt3QkFBeEIsZ0NBQXdCOztvQkFDbkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2pDLElBQU0scUJBQXFCLEdBQW1CLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFHekYsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLE9BQU8sRUFBRSxDQUFDOzRCQUNWLE1BQU0sQ0FBQzt3QkFDVCxDQUFDO3dCQUlELGVBQWUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQzdDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLEVBQW5FLENBQW1FLENBQzFFLENBQUM7b0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTyxtREFBd0IsR0FBaEMsVUFBaUMsd0JBQWtDO29CQUFuRSxpQkFZQztvQkFYQyxJQUFNLHFCQUFxQixHQUFtQixFQUFFLENBQUM7b0JBRWpELHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7d0JBQ3pDLElBQU0sb0JBQW9CLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFFN0UsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO3dCQUNyRCxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztnQkFDL0IsQ0FBQztnQkFFTywrQ0FBb0IsR0FBNUIsVUFBNkIsTUFBc0IsRUFBRSxXQUFvQjtvQkFBNUMsdUJBQUEsRUFBQSxhQUFzQjtvQkFDakQsTUFBTSxDQUFDO3dCQUNMLE1BQU0sRUFBRSxNQUFNO3dCQUNkLFdBQVcsRUFBRSxXQUFXO3FCQUN6QixDQUFDO2dCQUNKLENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQXRFQSxBQXNFQyxJQUFBO1lBdEVvQixnQkFBZ0I7Z0JBRHBDLHlDQUFVLEVBQUU7aURBRTJCLDBCQUFnQjtlQURuQyxnQkFBZ0IsQ0FzRXBDO2lDQXRFb0IsZ0JBQWdCO1FBdUVyQyxDQUFDIiwiZmlsZSI6ImF1dGhvcml6ZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0ICogYXMgUHJvbWlzZUV4dGVuZGVkIGZyb20gJ2JsdWViaXJkJztcclxuXHJcbmltcG9ydCBQZXJtaXNzaW9uc1N0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25Sb3V0ZSBleHRlbmRzIFJvdXRlQ29uZmlnIHtcclxuICBzZXR0aW5nczoge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBvbmx5OiBzdHJpbmdbXTtcclxuICAgICAgcmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhvcml6ZVJlZGlyZWN0IHtcclxuICByZXN1bHQ6IGJvb2xlYW47XHJcbiAgY2FuY2VsUm91dGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uc1N0b3JlOiBQZXJtaXNzaW9uc1N0b3JlKSB7IH1cclxuXHJcbiAgY2FuUmVkaXJlY3QodG9Sb3V0ZTogUGVybWlzc2lvblJvdXRlKTogUHJvbWlzZTxBdXRob3JpemVSZWRpcmVjdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhvcml6ZVJlZGlyZWN0PihyZXNvbHZlID0+IHtcclxuICAgICAgY29uc3Qgcm91dGVIYXNDb25maWcgPSB0b1JvdXRlLnNldHRpbmdzICYmIHRvUm91dGUuc2V0dGluZ3MucGVybWlzc2lvbjtcclxuICAgICAgY29uc3QgcGVybWlzc2lvbkNvbmZpZyA9IHJvdXRlSGFzQ29uZmlnID8gdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uIDogbnVsbDtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIHBlcm1pc3Npb25zIGhhcyBiZWVuIHNldFxyXG4gICAgICBpZiAoIXJvdXRlSGFzQ29uZmlnKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNyZWF0ZVJlZGlyZWN0UmVzdWx0KCkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBQcm9taXNlPGFueT5bXSA9IHRoaXMuZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKHBlcm1pc3Npb25Db25maWcub25seSk7XHJcblxyXG4gICAgICAvLyBBdXRob3JpemUgd2hlbiBubyBkZWZpbml0aW9ucyBwcm92aWRlZCBmb3IgcGVybWlzc2lvbnNcclxuICAgICAgaWYgKHBlcm1pc3Npb25EZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuY3JlYXRlUmVkaXJlY3RSZXN1bHQoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdXRob3JpemUgd2hlbiBhbnkgb2YgcGVybWlzc2lvbiBkZWZpbml0aW9uIHByb21pc2VzIGhhcyBiZWVuIHJlc29sdmVkIG9yXHJcbiAgICAgIC8vIE5vdCBhdXRob3JpemUgaWYgYWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWRcclxuICAgICAgUHJvbWlzZUV4dGVuZGVkLmFueShwZXJtaXNzaW9uRGVmaW5pdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh0aGlzLmNyZWF0ZVJlZGlyZWN0UmVzdWx0KCkpLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUodGhpcy5jcmVhdGVSZWRpcmVjdFJlc3VsdChmYWxzZSwgcGVybWlzc2lvbkNvbmZpZy5yZWRpcmVjdFRvKSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gdGhpcy5nZXRQZXJtaXNzaW9uRGVmaW5pdGlvbnMocGVybWlzc2lvbnMpO1xyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gbm8gZGVmaW5pdGlvbnMgcHJvdmlkZWQgZm9yIHBlcm1pc3Npb25zXHJcbiAgICAgIGlmIChwZXJtaXNzaW9uRGVmaW5pdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gYW55IG9mIHBlcm1pc3Npb24gZGVmaW5pdGlvbiBwcm9taXNlcyBoYXMgYmVlbiByZXNvbHZlZCBvclxyXG4gICAgICAvLyBOb3QgYXV0aG9yaXplIGlmIGFsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkXHJcbiAgICAgIFByb21pc2VFeHRlbmRlZC5hbnkocGVybWlzc2lvbkRlZmluaXRpb25zKS50aGVuKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoKSA9PiByZWplY3QobmV3IEVycm9yKCdVc2VyIGhhcyBub25lIG9mIHJlcXVpcmVkIHBlcm1pc3Npb25zIGFzc2lnbmVkJykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKG9ubHlBdXRob3JpemVQZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPGFueT5bXSB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gW107XHJcblxyXG4gICAgb25seUF1dGhvcml6ZVBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uID0gdGhpcy5wZXJtaXNzaW9uc1N0b3JlLmdldERlZmluaXRpb24ocGVybWlzc2lvbik7XHJcblxyXG4gICAgICBpZiAocGVybWlzc2lvbkRlZmluaXRpb24pIHtcclxuICAgICAgICBwZXJtaXNzaW9uRGVmaW5pdGlvbnMucHVzaChwZXJtaXNzaW9uRGVmaW5pdGlvbigpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBlcm1pc3Npb25EZWZpbml0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUmVkaXJlY3RSZXN1bHQocmVzdWx0OiBib29sZWFuID0gdHJ1ZSwgY2FuY2VsUm91dGU/OiBzdHJpbmcpOiBBdXRob3JpemVSZWRpcmVjdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN1bHQ6IHJlc3VsdCxcclxuICAgICAgY2FuY2VsUm91dGU6IGNhbmNlbFJvdXRlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
