System.register(["aurelia-dependency-injection", "aurelia-router", "./authorization-service"], function (exports_1, context_1) {
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
    var aurelia_dependency_injection_1, aurelia_router_1, authorization_service_1, AuthorizeRouteStep;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            AuthorizeRouteStep = (function () {
                function AuthorizeRouteStep(authorizationService) {
                    this.authorizationService = authorizationService;
                    this.defaultRedirectRoute = '';
                }
                AuthorizeRouteStep.prototype.run = function (navigationInstruction, next) {
                    var _this = this;
                    var allInstructions = navigationInstruction.getAllInstructions().reverse();
                    var permissionInstruction = allInstructions.find(function (instruction) { return _this.hasPermissionSettings(instruction.config); });
                    var permissionSettings = permissionInstruction ? permissionInstruction.config.settings.permission : null;
                    var noRoutePermissionsSet = !permissionInstruction;
                    var isAuthorized = permissionSettings === null || (_a = this.authorizationService).isAuthorized.apply(_a, permissionSettings.only);
                    if (noRoutePermissionsSet || isAuthorized) {
                        return next();
                    }
                    return next.cancel(new aurelia_router_1.Redirect(permissionSettings.redirectTo || this.defaultRedirectRoute));
                    var _a;
                };
                AuthorizeRouteStep.prototype.hasPermissionSettings = function (instructionConfig) {
                    return instructionConfig.settings && instructionConfig.settings.permission;
                };
                AuthorizeRouteStep.prototype.useDefaultRedirectRoute = function (route) {
                    this.defaultRedirectRoute = route;
                };
                return AuthorizeRouteStep;
            }());
            AuthorizeRouteStep = __decorate([
                aurelia_dependency_injection_1.autoinject(),
                __metadata("design:paramtypes", [authorization_service_1.default])
            ], AuthorizeRouteStep);
            exports_1("default", AuthorizeRouteStep);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVxQixrQkFBa0I7Z0JBSXJDLDRCQUFvQixvQkFBMEM7b0JBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7b0JBRnRELHlCQUFvQixHQUFHLEVBQUUsQ0FBQztnQkFFZ0MsQ0FBQztnQkFFbkUsZ0NBQUcsR0FBSCxVQUFJLHFCQUFxQixFQUFFLElBQVU7b0JBQXJDLGlCQWFDO29CQVpDLElBQU0sZUFBZSxHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzdFLElBQU0scUJBQXFCLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztvQkFDbEgsSUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBRTNHLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckQsSUFBTSxZQUFZLEdBQUcsa0JBQWtCLEtBQUssSUFBSSxJQUFJLENBQUEsS0FBQSxJQUFJLENBQUMsb0JBQW9CLENBQUEsQ0FBQyxZQUFZLFdBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXZILEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHlCQUFRLENBQUMsa0JBQWtCLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7O2dCQUMvRixDQUFDO2dCQUVELGtEQUFxQixHQUFyQixVQUFzQixpQkFBaUI7b0JBQ3JDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDN0UsQ0FBQztnQkFFRCxvREFBdUIsR0FBdkIsVUFBd0IsS0FBYTtvQkFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztnQkFDcEMsQ0FBQztnQkFDSCx5QkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1Qm9CLGtCQUFrQjtnQkFEdEMseUNBQVUsRUFBRTtpREFLK0IsK0JBQW9CO2VBSjNDLGtCQUFrQixDQTRCdEM7aUNBNUJvQixrQkFBa0I7UUE2QnZDLENBQUMiLCJmaWxlIjoiYXV0aG9yaXplLXJvdXRlLXN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IFJlZGlyZWN0LCBOZXh0LCBSb3V0ZUNvbmZpZyB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbmltcG9ydCBBdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuL2F1dGhvcml6YXRpb24tc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25Sb3V0ZSBleHRlbmRzIFJvdXRlQ29uZmlnIHtcclxuICBzZXR0aW5nczoge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBvbmx5OiBzdHJpbmdbXTtcclxuICAgICAgcmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVJvdXRlU3RlcCB7XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFJlZGlyZWN0Um91dGUgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRob3JpemF0aW9uU2VydmljZTogQXV0aG9yaXphdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuICBydW4obmF2aWdhdGlvbkluc3RydWN0aW9uLCBuZXh0OiBOZXh0KSB7XHJcbiAgICBjb25zdCBhbGxJbnN0cnVjdGlvbnMgPSBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24uZ2V0QWxsSW5zdHJ1Y3Rpb25zKCkucmV2ZXJzZSgpO1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkluc3RydWN0aW9uID0gYWxsSW5zdHJ1Y3Rpb25zLmZpbmQoaW5zdHJ1Y3Rpb24gPT4gdGhpcy5oYXNQZXJtaXNzaW9uU2V0dGluZ3MoaW5zdHJ1Y3Rpb24uY29uZmlnKSk7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uU2V0dGluZ3MgPSBwZXJtaXNzaW9uSW5zdHJ1Y3Rpb24gPyBwZXJtaXNzaW9uSW5zdHJ1Y3Rpb24uY29uZmlnLnNldHRpbmdzLnBlcm1pc3Npb24gOiBudWxsO1xyXG5cclxuICAgIGNvbnN0IG5vUm91dGVQZXJtaXNzaW9uc1NldCA9ICFwZXJtaXNzaW9uSW5zdHJ1Y3Rpb247XHJcbiAgICBjb25zdCBpc0F1dGhvcml6ZWQgPSBwZXJtaXNzaW9uU2V0dGluZ3MgPT09IG51bGwgfHwgdGhpcy5hdXRob3JpemF0aW9uU2VydmljZS5pc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvblNldHRpbmdzLm9ubHkpO1xyXG5cclxuICAgIGlmIChub1JvdXRlUGVybWlzc2lvbnNTZXQgfHwgaXNBdXRob3JpemVkKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQuY2FuY2VsKG5ldyBSZWRpcmVjdChwZXJtaXNzaW9uU2V0dGluZ3MucmVkaXJlY3RUbyB8fCB0aGlzLmRlZmF1bHRSZWRpcmVjdFJvdXRlKSk7XHJcbiAgfVxyXG5cclxuICBoYXNQZXJtaXNzaW9uU2V0dGluZ3MoaW5zdHJ1Y3Rpb25Db25maWcpIHtcclxuICAgIHJldHVybiBpbnN0cnVjdGlvbkNvbmZpZy5zZXR0aW5ncyAmJiBpbnN0cnVjdGlvbkNvbmZpZy5zZXR0aW5ncy5wZXJtaXNzaW9uO1xyXG4gIH1cclxuXHJcbiAgdXNlRGVmYXVsdFJlZGlyZWN0Um91dGUocm91dGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5kZWZhdWx0UmVkaXJlY3RSb3V0ZSA9IHJvdXRlO1xyXG4gIH1cclxufVxyXG4iXX0=
