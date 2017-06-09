var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-router", "./authorization-service"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthorizeRouteStep = (function () {
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
    exports.default = AuthorizeRouteStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFlQSxJQUFxQixrQkFBa0I7UUFJckMsNEJBQW9CLG9CQUEwQztZQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1lBRnRELHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUVnQyxDQUFDO1FBRW5FLGdDQUFHLEdBQUgsVUFBSSxjQUFjLEVBQUUsSUFBVTtZQUM1QixJQUFNLE9BQU8sR0FBb0IsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3ZFLElBQU0sZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUU3RSxJQUFNLHFCQUFxQixHQUFHLENBQUMsY0FBYyxDQUFDO1lBQzlDLElBQU0sWUFBWSxHQUFHLGdCQUFnQixLQUFLLElBQUksSUFBSSxDQUFBLEtBQUEsSUFBSSxDQUFDLG9CQUFvQixDQUFBLENBQUMsWUFBWSxXQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5ILEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSx5QkFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDOztRQUM3RixDQUFDO1FBRUQsb0RBQXVCLEdBQXZCLFVBQXdCLEtBQWE7WUFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQXhCQSxBQXdCQyxJQUFBO0lBeEJvQixrQkFBa0I7UUFEdEMseUNBQVUsRUFBRTt5Q0FLK0IsK0JBQW9CO09BSjNDLGtCQUFrQixDQXdCdEM7c0JBeEJvQixrQkFBa0IiLCJmaWxlIjoiYXV0aG9yaXplLXJvdXRlLXN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IFJlZGlyZWN0LCBOZXh0LCBSb3V0ZUNvbmZpZyB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbmltcG9ydCBBdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuL2F1dGhvcml6YXRpb24tc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25Sb3V0ZSBleHRlbmRzIFJvdXRlQ29uZmlnIHtcclxuICBzZXR0aW5nczoge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBvbmx5OiBzdHJpbmdbXTtcclxuICAgICAgcmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVJvdXRlU3RlcCB7XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFJlZGlyZWN0Um91dGUgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRob3JpemF0aW9uU2VydmljZTogQXV0aG9yaXphdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuICBydW4ocm91dGluZ0NvbnRleHQsIG5leHQ6IE5leHQpIHtcclxuICAgIGNvbnN0IHRvUm91dGU6IFBlcm1pc3Npb25Sb3V0ZSA9IHJvdXRpbmdDb250ZXh0LmNvbmZpZztcclxuICAgIGNvbnN0IHJvdXRlSGFzQ29uZmlnID0gdG9Sb3V0ZS5zZXR0aW5ncyAmJiB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb247XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uQ29uZmlnID0gcm91dGVIYXNDb25maWcgPyB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb24gOiBudWxsO1xyXG5cclxuICAgIGNvbnN0IG5vUm91dGVQZXJtaXNzaW9uc1NldCA9ICFyb3V0ZUhhc0NvbmZpZztcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHBlcm1pc3Npb25Db25maWcgPT09IG51bGwgfHwgdGhpcy5hdXRob3JpemF0aW9uU2VydmljZS5pc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvbkNvbmZpZy5vbmx5KTtcclxuXHJcbiAgICBpZiAobm9Sb3V0ZVBlcm1pc3Npb25zU2V0IHx8IGlzQXV0aG9yaXplZCkge1xyXG4gICAgICByZXR1cm4gbmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0LmNhbmNlbChuZXcgUmVkaXJlY3QocGVybWlzc2lvbkNvbmZpZy5yZWRpcmVjdFRvIHx8IHRoaXMuZGVmYXVsdFJlZGlyZWN0Um91dGUpKTtcclxuICB9XHJcblxyXG4gIHVzZURlZmF1bHRSZWRpcmVjdFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGVmYXVsdFJlZGlyZWN0Um91dGUgPSByb3V0ZTtcclxuICB9XHJcbn1cclxuIl19
