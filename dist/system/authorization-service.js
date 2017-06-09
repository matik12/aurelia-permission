System.register(["aurelia-dependency-injection", "./permission-store"], function (exports_1, context_1) {
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
    var aurelia_dependency_injection_1, permission_store_1, AuthorizationService;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (permission_store_1_1) {
                permission_store_1 = permission_store_1_1;
            }
        ],
        execute: function () {
            AuthorizationService = (function () {
                function AuthorizationService(permissionStore) {
                    this.permissionStore = permissionStore;
                }
                AuthorizationService.prototype.isAuthorized = function () {
                    var permissions = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        permissions[_i] = arguments[_i];
                    }
                    var permissionDefinitions = this.getPermissionDefinitions(permissions);
                    var noDefinitionsSet = permissionDefinitions.length === 0;
                    var anyPermissionDefinitionIsTrue = permissionDefinitions.includes(true);
                    if (noDefinitionsSet || anyPermissionDefinitionIsTrue) {
                        return true;
                    }
                    return false;
                };
                AuthorizationService.prototype.getPermissionDefinitions = function (onlyAuthorizePermissions) {
                    var _this = this;
                    var permissionDefinitions = [];
                    onlyAuthorizePermissions.forEach(function (permission) {
                        var permissionDefinition = _this.permissionStore.getDefinition(permission);
                        if (permissionDefinition) {
                            permissionDefinitions.push(permissionDefinition());
                        }
                    });
                    return permissionDefinitions;
                };
                return AuthorizationService;
            }());
            AuthorizationService = __decorate([
                aurelia_dependency_injection_1.autoinject(),
                __metadata("design:paramtypes", [permission_store_1.default])
            ], AuthorizationService);
            exports_1("default", AuthorizationService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemF0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLcUIsb0JBQW9CO2dCQUN2Qyw4QkFBb0IsZUFBZ0M7b0JBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtnQkFBSSxDQUFDO2dCQUV6RCwyQ0FBWSxHQUFaO29CQUFhLHFCQUF3Qjt5QkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO3dCQUF4QixnQ0FBd0I7O29CQUNuQyxJQUFNLHFCQUFxQixHQUFjLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDcEYsSUFBTSxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO29CQUM1RCxJQUFNLDZCQUE2QixHQUFTLHFCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFbEYsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLElBQUksNkJBQTZCLENBQUMsQ0FBQyxDQUFDO3dCQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZixDQUFDO2dCQUVPLHVEQUF3QixHQUFoQyxVQUFpQyx3QkFBa0M7b0JBQW5FLGlCQVlDO29CQVhDLElBQU0scUJBQXFCLEdBQWMsRUFBRSxDQUFDO29CQUU1Qyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO3dCQUN6QyxJQUFNLG9CQUFvQixHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUU1RSxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7d0JBQ3JELENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLHFCQUFxQixDQUFDO2dCQUMvQixDQUFDO2dCQUNILDJCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCb0Isb0JBQW9CO2dCQUR4Qyx5Q0FBVSxFQUFFO2lEQUUwQiwwQkFBZTtlQURqQyxvQkFBb0IsQ0E0QnhDO2lDQTVCb0Isb0JBQW9CO1FBNkJ6QyxDQUFDIiwiZmlsZSI6ImF1dGhvcml6YXRpb24tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuXHJcbmltcG9ydCBQZXJtaXNzaW9uU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXphdGlvblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUpIHsgfVxyXG5cclxuICBpc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvbnM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IGJvb2xlYW5bXSA9IHRoaXMuZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKHBlcm1pc3Npb25zKTtcclxuICAgIGNvbnN0IG5vRGVmaW5pdGlvbnNTZXQgPSBwZXJtaXNzaW9uRGVmaW5pdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgY29uc3QgYW55UGVybWlzc2lvbkRlZmluaXRpb25Jc1RydWUgPSAoPGFueT5wZXJtaXNzaW9uRGVmaW5pdGlvbnMpLmluY2x1ZGVzKHRydWUpO1xyXG5cclxuICAgIGlmIChub0RlZmluaXRpb25zU2V0IHx8IGFueVBlcm1pc3Npb25EZWZpbml0aW9uSXNUcnVlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKG9ubHlBdXRob3JpemVQZXJtaXNzaW9uczogc3RyaW5nW10pOiBib29sZWFuW10ge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBib29sZWFuW10gPSBbXTtcclxuXHJcbiAgICBvbmx5QXV0aG9yaXplUGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHtcclxuICAgICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb24gPSB0aGlzLnBlcm1pc3Npb25TdG9yZS5nZXREZWZpbml0aW9uKHBlcm1pc3Npb24pO1xyXG5cclxuICAgICAgaWYgKHBlcm1pc3Npb25EZWZpbml0aW9uKSB7XHJcbiAgICAgICAgcGVybWlzc2lvbkRlZmluaXRpb25zLnB1c2gocGVybWlzc2lvbkRlZmluaXRpb24oKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwZXJtaXNzaW9uRGVmaW5pdGlvbnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==
