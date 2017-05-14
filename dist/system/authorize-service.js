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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1xQixnQkFBZ0I7Z0JBQ25DLDBCQUFvQixnQkFBa0M7b0JBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7Z0JBQUksQ0FBQztnQkFFM0QsdUNBQVksR0FBWjtvQkFBQSxpQkFpQkM7b0JBakJZLHFCQUF3Qjt5QkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO3dCQUF4QixnQ0FBd0I7O29CQUNuQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDakMsSUFBTSxxQkFBcUIsR0FBbUIsS0FBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUd6RixFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsT0FBTyxFQUFFLENBQUM7NEJBQ1YsTUFBTSxDQUFDO3dCQUNULENBQUM7d0JBSUQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FDN0MsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixjQUFNLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsRUFBbkUsQ0FBbUUsQ0FDMUUsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVPLG1EQUF3QixHQUFoQyxVQUFpQyx3QkFBa0M7b0JBQW5FLGlCQVlDO29CQVhDLElBQU0scUJBQXFCLEdBQW1CLEVBQUUsQ0FBQztvQkFFakQsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTt3QkFDekMsSUFBTSxvQkFBb0IsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUU3RSxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7d0JBQ3JELENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLHFCQUFxQixDQUFDO2dCQUMvQixDQUFDO2dCQUNILHVCQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtZQW5Db0IsZ0JBQWdCO2dCQURwQyx5Q0FBVSxFQUFFO2lEQUUyQiwwQkFBZ0I7ZUFEbkMsZ0JBQWdCLENBbUNwQztpQ0FuQ29CLGdCQUFnQjtRQW9DckMsQ0FBQyIsImZpbGUiOiJhdXRob3JpemUtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0ICogYXMgUHJvbWlzZUV4dGVuZGVkIGZyb20gJ2JsdWViaXJkJztcclxuXHJcbmltcG9ydCBQZXJtaXNzaW9uc1N0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvbnNTdG9yZTogUGVybWlzc2lvbnNTdG9yZSkgeyB9XHJcblxyXG4gIGlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBQcm9taXNlPGFueT5bXSA9IHRoaXMuZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKHBlcm1pc3Npb25zKTtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIGRlZmluaXRpb25zIHByb3ZpZGVkIGZvciBwZXJtaXNzaW9uc1xyXG4gICAgICBpZiAocGVybWlzc2lvbkRlZmluaXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIGFueSBvZiBwZXJtaXNzaW9uIGRlZmluaXRpb24gcHJvbWlzZXMgaGFzIGJlZW4gcmVzb2x2ZWQgb3JcclxuICAgICAgLy8gTm90IGF1dGhvcml6ZSBpZiBhbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZFxyXG4gICAgICBQcm9taXNlRXh0ZW5kZWQuYW55KHBlcm1pc3Npb25EZWZpbml0aW9ucykudGhlbihcclxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXHJcbiAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignVXNlciBoYXMgbm9uZSBvZiByZXF1aXJlZCBwZXJtaXNzaW9ucyBhc3NpZ25lZCcpKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBlcm1pc3Npb25EZWZpbml0aW9ucyhvbmx5QXV0aG9yaXplUGVybWlzc2lvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+W10ge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBQcm9taXNlPGFueT5bXSA9IFtdO1xyXG5cclxuICAgIG9ubHlBdXRob3JpemVQZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbiA9IHRoaXMucGVybWlzc2lvbnNTdG9yZS5nZXREZWZpbml0aW9uKHBlcm1pc3Npb24pO1xyXG5cclxuICAgICAgaWYgKHBlcm1pc3Npb25EZWZpbml0aW9uKSB7XHJcbiAgICAgICAgcGVybWlzc2lvbkRlZmluaXRpb25zLnB1c2gocGVybWlzc2lvbkRlZmluaXRpb24oKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwZXJtaXNzaW9uRGVmaW5pdGlvbnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==
