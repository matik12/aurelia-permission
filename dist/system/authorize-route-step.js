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
                AuthorizeRouteStep.prototype.run = function (routingContext, next) {
                    var toRoute = routingContext.config;
                    var routeHasConfig = toRoute.settings && toRoute.settings.permission;
                    var permissionConfig = routeHasConfig ? toRoute.settings.permission : null;
                    var noRoutePermissionsSet = !routeHasConfig;
                    var isAuthorized = permissionConfig === null || (_a = this.authorizationService).isAuthorized.apply(_a, permissionConfig.only);
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
                __metadata("design:paramtypes", [authorization_service_1.default])
            ], AuthorizeRouteStep);
            exports_1("default", AuthorizeRouteStep);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVxQixrQkFBa0I7Z0JBSXJDLDRCQUFvQixvQkFBMEM7b0JBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7b0JBRnRELHlCQUFvQixHQUFHLEVBQUUsQ0FBQztnQkFFZ0MsQ0FBQztnQkFFbkUsZ0NBQUcsR0FBSCxVQUFJLGNBQWMsRUFBRSxJQUFVO29CQUM1QixJQUFNLE9BQU8sR0FBb0IsY0FBYyxDQUFDLE1BQU0sQ0FBQztvQkFDdkQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDdkUsSUFBTSxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUU3RSxJQUFNLHFCQUFxQixHQUFHLENBQUMsY0FBYyxDQUFDO29CQUM5QyxJQUFNLFlBQVksR0FBRyxnQkFBZ0IsS0FBSyxJQUFJLElBQUksQ0FBQSxLQUFBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQSxDQUFDLFlBQVksV0FBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFbkgsRUFBRSxDQUFDLENBQUMscUJBQXFCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQixDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUkseUJBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQzs7Z0JBQzdGLENBQUM7Z0JBRUQsb0RBQXVCLEdBQXZCLFVBQXdCLEtBQWE7b0JBQ25DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0gseUJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJvQixrQkFBa0I7Z0JBRHRDLHlDQUFVLEVBQUU7aURBSytCLCtCQUFvQjtlQUozQyxrQkFBa0IsQ0F3QnRDO2lDQXhCb0Isa0JBQWtCO1FBeUJ2QyxDQUFDIiwiZmlsZSI6ImF1dGhvcml6ZS1yb3V0ZS1zdGVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgTmV4dCwgUm91dGVDb25maWcgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXphdGlvblNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemF0aW9uLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uUm91dGUgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XHJcbiAgc2V0dGluZ3M6IHtcclxuICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgb25seTogc3RyaW5nW107XHJcbiAgICAgIHJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemVSb3V0ZVN0ZXAge1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRSZWRpcmVjdFJvdXRlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgcnVuKHJvdXRpbmdDb250ZXh0LCBuZXh0OiBOZXh0KSB7XHJcbiAgICBjb25zdCB0b1JvdXRlOiBQZXJtaXNzaW9uUm91dGUgPSByb3V0aW5nQ29udGV4dC5jb25maWc7XHJcbiAgICBjb25zdCByb3V0ZUhhc0NvbmZpZyA9IHRvUm91dGUuc2V0dGluZ3MgJiYgdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uO1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkNvbmZpZyA9IHJvdXRlSGFzQ29uZmlnID8gdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBub1JvdXRlUGVybWlzc2lvbnNTZXQgPSAhcm91dGVIYXNDb25maWc7XHJcbiAgICBjb25zdCBpc0F1dGhvcml6ZWQgPSBwZXJtaXNzaW9uQ29uZmlnID09PSBudWxsIHx8IHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25Db25maWcub25seSk7XHJcblxyXG4gICAgaWYgKG5vUm91dGVQZXJtaXNzaW9uc1NldCB8fCBpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dC5jYW5jZWwobmV3IFJlZGlyZWN0KHBlcm1pc3Npb25Db25maWcucmVkaXJlY3RUbyB8fCB0aGlzLmRlZmF1bHRSZWRpcmVjdFJvdXRlKSk7XHJcbiAgfVxyXG5cclxuICB1c2VEZWZhdWx0UmVkaXJlY3RSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRSZWRpcmVjdFJvdXRlID0gcm91dGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==
