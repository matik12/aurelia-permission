System.register(["aurelia-dependency-injection", "bluebird", "./role-store"], function (exports_1, context_1) {
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
    var aurelia_dependency_injection_1, PromiseExtended, role_store_1, AuthorizeService;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (PromiseExtended_1) {
                PromiseExtended = PromiseExtended_1;
            },
            function (role_store_1_1) {
                role_store_1 = role_store_1_1;
            }
        ],
        execute: function () {
            AuthorizeService = (function () {
                function AuthorizeService(roleStore) {
                    this.roleStore = roleStore;
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
                        var roleDefinitions = _this.getRoleDefinitions(permissionConfig.only);
                        if (roleDefinitions.length === 0) {
                            resolve(_this.createRedirectResult());
                            return;
                        }
                        PromiseExtended.any(roleDefinitions).then(function () { return resolve(_this.createRedirectResult()); }, function () { return resolve(_this.createRedirectResult(false, permissionConfig.redirectTo)); });
                    });
                };
                AuthorizeService.prototype.isAuthorized = function (roleList) {
                    var _this = this;
                    var onlyRoles = roleList.replace(' ', '').split(',');
                    return new Promise(function (resolve, reject) {
                        var roleDefinitions = _this.getRoleDefinitions(onlyRoles);
                        if (roleDefinitions.length === 0) {
                            resolve();
                            return;
                        }
                        PromiseExtended.any(roleDefinitions).then(function () { return resolve(); }, function () { return reject(new Error('User has none of required roles assigned')); });
                    });
                };
                AuthorizeService.prototype.getRoleDefinitions = function (onlyAuthorizeRoles) {
                    var _this = this;
                    var roleDefinitions = [];
                    onlyAuthorizeRoles.forEach(function (role) {
                        var roleDefinition = _this.roleStore.getDefinition(role);
                        if (roleDefinition) {
                            roleDefinitions.push(roleDefinition());
                        }
                    });
                    return roleDefinitions;
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
                __metadata("design:paramtypes", [role_store_1.default])
            ], AuthorizeService);
            exports_1("default", AuthorizeService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCcUIsZ0JBQWdCO2dCQUNuQywwQkFBb0IsU0FBb0I7b0JBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7Z0JBQUksQ0FBQztnQkFFN0Msc0NBQVcsR0FBWCxVQUFZLE9BQXdCO29CQUFwQyxpQkEwQkM7b0JBekJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQSxPQUFPO3dCQUMzQyxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO3dCQUN2RSxJQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBRzdFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDVCxDQUFDO3dCQUVELElBQU0sZUFBZSxHQUFtQixLQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBR3ZGLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakMsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDVCxDQUFDO3dCQUlELGVBQWUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUN2QyxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEVBQXBDLENBQW9DLEVBQzFDLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxDQUM3RSxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFhLFFBQWdCO29CQUE3QixpQkFtQkM7b0JBbEJDLElBQU0sU0FBUyxHQUFhLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFakUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2pDLElBQU0sZUFBZSxHQUFtQixLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBRzNFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakMsT0FBTyxFQUFFLENBQUM7NEJBQ1YsTUFBTSxDQUFDO3dCQUNULENBQUM7d0JBSUQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLEVBQTdELENBQTZELENBQ3BFLENBQUM7b0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTyw2Q0FBa0IsR0FBMUIsVUFBMkIsa0JBQTRCO29CQUF2RCxpQkFZQztvQkFYQyxJQUFNLGVBQWUsR0FBbUIsRUFBRSxDQUFDO29CQUUzQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO3dCQUM3QixJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFMUQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs0QkFDbkIsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRU8sK0NBQW9CLEdBQTVCLFVBQTZCLE1BQXNCLEVBQUUsV0FBb0I7b0JBQTVDLHVCQUFBLEVBQUEsYUFBc0I7b0JBQ2pELE1BQU0sQ0FBQzt3QkFDTCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxXQUFXLEVBQUUsV0FBVztxQkFDekIsQ0FBQztnQkFDSixDQUFDO2dCQUNILHVCQUFDO1lBQUQsQ0F4RUEsQUF3RUMsSUFBQTtZQXhFb0IsZ0JBQWdCO2dCQURwQyx5Q0FBVSxFQUFFO2lEQUVvQixvQkFBUztlQURyQixnQkFBZ0IsQ0F3RXBDO2lDQXhFb0IsZ0JBQWdCO1FBeUVyQyxDQUFDIiwiZmlsZSI6ImF1dGhvcml6ZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0ICogYXMgUHJvbWlzZUV4dGVuZGVkIGZyb20gJ2JsdWViaXJkJztcclxuXHJcbmltcG9ydCBSb2xlU3RvcmUgZnJvbSAnLi9yb2xlLXN0b3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvblJvdXRlIGV4dGVuZHMgUm91dGVDb25maWcge1xyXG4gIHNldHRpbmdzOiB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIG9ubHk6IHN0cmluZ1tdO1xyXG4gICAgICByZWRpcmVjdFRvPzogc3RyaW5nO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXplUmVkaXJlY3Qge1xyXG4gIHJlc3VsdDogYm9vbGVhbjtcclxuICBjYW5jZWxSb3V0ZT86IHN0cmluZztcclxufVxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvbGVTdG9yZTogUm9sZVN0b3JlKSB7IH1cclxuXHJcbiAgY2FuUmVkaXJlY3QodG9Sb3V0ZTogUGVybWlzc2lvblJvdXRlKTogUHJvbWlzZTxBdXRob3JpemVSZWRpcmVjdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhvcml6ZVJlZGlyZWN0PihyZXNvbHZlID0+IHtcclxuICAgICAgY29uc3Qgcm91dGVIYXNDb25maWcgPSB0b1JvdXRlLnNldHRpbmdzICYmIHRvUm91dGUuc2V0dGluZ3MucGVybWlzc2lvbjtcclxuICAgICAgY29uc3QgcGVybWlzc2lvbkNvbmZpZyA9IHJvdXRlSGFzQ29uZmlnID8gdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uIDogbnVsbDtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIHJvbGUgcGVybWlzc2lvbnMgaGFzIGJlZW4gc2V0XHJcbiAgICAgIGlmICghcm91dGVIYXNDb25maWcpIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuY3JlYXRlUmVkaXJlY3RSZXN1bHQoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByb2xlRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gdGhpcy5nZXRSb2xlRGVmaW5pdGlvbnMocGVybWlzc2lvbkNvbmZpZy5vbmx5KTtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIGRlZmluaXRpb25zIHByb3ZpZGVkIGZvciByb2xlIHBlcm1pc3Npb25zXHJcbiAgICAgIGlmIChyb2xlRGVmaW5pdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNyZWF0ZVJlZGlyZWN0UmVzdWx0KCkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gYW55IHJvbGUgZGVmaW5pdGlvbiBwcm9taXNlcyBoYXMgYmVlbiByZXNvbHZlZCBvclxyXG4gICAgICAvLyBOb3QgYXV0aG9yaXplIGlmIGFsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkXHJcbiAgICAgIFByb21pc2VFeHRlbmRlZC5hbnkocm9sZURlZmluaXRpb25zKS50aGVuKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUodGhpcy5jcmVhdGVSZWRpcmVjdFJlc3VsdCgpKSxcclxuICAgICAgICAoKSA9PiByZXNvbHZlKHRoaXMuY3JlYXRlUmVkaXJlY3RSZXN1bHQoZmFsc2UsIHBlcm1pc3Npb25Db25maWcucmVkaXJlY3RUbykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQXV0aG9yaXplZChyb2xlTGlzdDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IG9ubHlSb2xlczogc3RyaW5nW10gPSByb2xlTGlzdC5yZXBsYWNlKCcgJywgJycpLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgcm9sZURlZmluaXRpb25zOiBQcm9taXNlPGFueT5bXSA9IHRoaXMuZ2V0Um9sZURlZmluaXRpb25zKG9ubHlSb2xlcyk7XHJcblxyXG4gICAgICAvLyBBdXRob3JpemUgd2hlbiBubyBkZWZpbml0aW9ucyBwcm92aWRlZCBmb3Igcm9sZSBwZXJtaXNzaW9uc1xyXG4gICAgICBpZiAocm9sZURlZmluaXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIGFueSByb2xlIGRlZmluaXRpb24gcHJvbWlzZXMgaGFzIGJlZW4gcmVzb2x2ZWQgb3JcclxuICAgICAgLy8gTm90IGF1dGhvcml6ZSBpZiBhbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZFxyXG4gICAgICBQcm9taXNlRXh0ZW5kZWQuYW55KHJvbGVEZWZpbml0aW9ucykudGhlbihcclxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXHJcbiAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignVXNlciBoYXMgbm9uZSBvZiByZXF1aXJlZCByb2xlcyBhc3NpZ25lZCcpKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJvbGVEZWZpbml0aW9ucyhvbmx5QXV0aG9yaXplUm9sZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+W10ge1xyXG4gICAgY29uc3Qgcm9sZURlZmluaXRpb25zOiBQcm9taXNlPGFueT5bXSA9IFtdO1xyXG5cclxuICAgIG9ubHlBdXRob3JpemVSb2xlcy5mb3JFYWNoKHJvbGUgPT4ge1xyXG4gICAgICBjb25zdCByb2xlRGVmaW5pdGlvbiA9IHRoaXMucm9sZVN0b3JlLmdldERlZmluaXRpb24ocm9sZSk7XHJcblxyXG4gICAgICBpZiAocm9sZURlZmluaXRpb24pIHtcclxuICAgICAgICByb2xlRGVmaW5pdGlvbnMucHVzaChyb2xlRGVmaW5pdGlvbigpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJvbGVEZWZpbml0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUmVkaXJlY3RSZXN1bHQocmVzdWx0OiBib29sZWFuID0gdHJ1ZSwgY2FuY2VsUm91dGU/OiBzdHJpbmcpOiBBdXRob3JpemVSZWRpcmVjdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN1bHQ6IHJlc3VsdCxcclxuICAgICAgY2FuY2VsUm91dGU6IGNhbmNlbFJvdXRlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
