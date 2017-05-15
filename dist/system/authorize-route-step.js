System.register(["aurelia-dependency-injection", "aurelia-router", "./authorize-service"], function (exports_1, context_1) {
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
    var aurelia_dependency_injection_1, aurelia_router_1, authorize_service_1, AuthorizeRouteStep;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
            }
        ],
        execute: function () {
            AuthorizeRouteStep = (function () {
                function AuthorizeRouteStep(authorizeService) {
                    this.authorizeService = authorizeService;
                    this.defaultRedirectRoute = '';
                }
                AuthorizeRouteStep.prototype.run = function (routingContext, next) {
                    var toRoute = routingContext.config;
                    var routeHasConfig = toRoute.settings && toRoute.settings.permission;
                    var permissionConfig = routeHasConfig ? toRoute.settings.permission : null;
                    var noRoutePermissionsSet = !routeHasConfig;
                    var isAuthorized = permissionConfig === null || (_a = this.authorizeService).isAuthorized.apply(_a, permissionConfig.only);
                    if (noRoutePermissionsSet || isAuthorized) {
                        return next();
                    }
                    return next.cancel(new aurelia_router_1.Redirect(permissionConfig.redirectTo || this.defaultRedirectRoute));
                    var _a;
                };
                AuthorizeRouteStep.prototype.useDefaultRedirectRoute = function (route) {
                    this.defaultRedirectRoute = route;
                };
                return AuthorizeRouteStep;
            }());
            AuthorizeRouteStep = __decorate([
                aurelia_dependency_injection_1.autoinject(),
                __metadata("design:paramtypes", [authorize_service_1.default])
            ], AuthorizeRouteStep);
            exports_1("default", AuthorizeRouteStep);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVxQixrQkFBa0I7Z0JBSXJDLDRCQUFvQixnQkFBa0M7b0JBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBRjlDLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztnQkFFd0IsQ0FBQztnQkFFM0QsZ0NBQUcsR0FBSCxVQUFJLGNBQWMsRUFBRSxJQUFVO29CQUM1QixJQUFNLE9BQU8sR0FBb0IsY0FBYyxDQUFDLE1BQU0sQ0FBQztvQkFDdkQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDdkUsSUFBTSxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUU3RSxJQUFNLHFCQUFxQixHQUFHLENBQUMsY0FBYyxDQUFDO29CQUM5QyxJQUFNLFlBQVksR0FBRyxnQkFBZ0IsS0FBSyxJQUFJLElBQUksQ0FBQSxLQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLFlBQVksV0FBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFL0csRUFBRSxDQUFDLENBQUMscUJBQXFCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQixDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUkseUJBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQzs7Z0JBQzdGLENBQUM7Z0JBRUQsb0RBQXVCLEdBQXZCLFVBQXdCLEtBQWE7b0JBQ25DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0gseUJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJvQixrQkFBa0I7Z0JBRHRDLHlDQUFVLEVBQUU7aURBSzJCLDJCQUFnQjtlQUpuQyxrQkFBa0IsQ0F3QnRDO2lDQXhCb0Isa0JBQWtCO1FBeUJ2QyxDQUFDIiwiZmlsZSI6ImF1dGhvcml6ZS1yb3V0ZS1zdGVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgTmV4dCwgUm91dGVDb25maWcgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSBmcm9tICcuL2F1dGhvcml6ZS1zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvblJvdXRlIGV4dGVuZHMgUm91dGVDb25maWcge1xyXG4gIHNldHRpbmdzOiB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIG9ubHk6IHN0cmluZ1tdO1xyXG4gICAgICByZWRpcmVjdFRvPzogc3RyaW5nO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplUm91dGVTdGVwIHtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0UmVkaXJlY3RSb3V0ZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UpIHsgfVxyXG5cclxuICBydW4ocm91dGluZ0NvbnRleHQsIG5leHQ6IE5leHQpIHtcclxuICAgIGNvbnN0IHRvUm91dGU6IFBlcm1pc3Npb25Sb3V0ZSA9IHJvdXRpbmdDb250ZXh0LmNvbmZpZztcclxuICAgIGNvbnN0IHJvdXRlSGFzQ29uZmlnID0gdG9Sb3V0ZS5zZXR0aW5ncyAmJiB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb247XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uQ29uZmlnID0gcm91dGVIYXNDb25maWcgPyB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb24gOiBudWxsO1xyXG5cclxuICAgIGNvbnN0IG5vUm91dGVQZXJtaXNzaW9uc1NldCA9ICFyb3V0ZUhhc0NvbmZpZztcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHBlcm1pc3Npb25Db25maWcgPT09IG51bGwgfHwgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9uQ29uZmlnLm9ubHkpO1xyXG5cclxuICAgIGlmIChub1JvdXRlUGVybWlzc2lvbnNTZXQgfHwgaXNBdXRob3JpemVkKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQuY2FuY2VsKG5ldyBSZWRpcmVjdChwZXJtaXNzaW9uQ29uZmlnLnJlZGlyZWN0VG8gfHwgdGhpcy5kZWZhdWx0UmVkaXJlY3RSb3V0ZSkpO1xyXG4gIH1cclxuXHJcbiAgdXNlRGVmYXVsdFJlZGlyZWN0Um91dGUocm91dGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5kZWZhdWx0UmVkaXJlY3RSb3V0ZSA9IHJvdXRlO1xyXG4gIH1cclxufVxyXG4iXX0=
