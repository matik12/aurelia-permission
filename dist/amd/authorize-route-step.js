var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-router", "./authorize-service"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, authorize_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthorizeRouteStep = (function () {
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
    exports.default = AuthorizeRouteStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFlQSxJQUFxQixrQkFBa0I7UUFJckMsNEJBQW9CLGdCQUFrQztZQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1lBRjlDLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUV3QixDQUFDO1FBRTNELGdDQUFHLEdBQUgsVUFBSSxjQUFjLEVBQUUsSUFBVTtZQUM1QixJQUFNLE9BQU8sR0FBb0IsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3ZFLElBQU0sZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUU3RSxJQUFNLHFCQUFxQixHQUFHLENBQUMsY0FBYyxDQUFDO1lBQzlDLElBQU0sWUFBWSxHQUFHLGdCQUFnQixLQUFLLElBQUksSUFBSSxDQUFBLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFBLENBQUMsWUFBWSxXQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRS9HLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSx5QkFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDOztRQUM3RixDQUFDO1FBRUQsb0RBQXVCLEdBQXZCLFVBQXdCLEtBQWE7WUFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQXhCQSxBQXdCQyxJQUFBO0lBeEJvQixrQkFBa0I7UUFEdEMseUNBQVUsRUFBRTt5Q0FLMkIsMkJBQWdCO09BSm5DLGtCQUFrQixDQXdCdEM7c0JBeEJvQixrQkFBa0IiLCJmaWxlIjoiYXV0aG9yaXplLXJvdXRlLXN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IFJlZGlyZWN0LCBOZXh0LCBSb3V0ZUNvbmZpZyB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uUm91dGUgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XHJcbiAgc2V0dGluZ3M6IHtcclxuICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgb25seTogc3RyaW5nW107XHJcbiAgICAgIHJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemVSb3V0ZVN0ZXAge1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRSZWRpcmVjdFJvdXRlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aG9yaXplU2VydmljZTogQXV0aG9yaXplU2VydmljZSkgeyB9XHJcblxyXG4gIHJ1bihyb3V0aW5nQ29udGV4dCwgbmV4dDogTmV4dCkge1xyXG4gICAgY29uc3QgdG9Sb3V0ZTogUGVybWlzc2lvblJvdXRlID0gcm91dGluZ0NvbnRleHQuY29uZmlnO1xyXG4gICAgY29uc3Qgcm91dGVIYXNDb25maWcgPSB0b1JvdXRlLnNldHRpbmdzICYmIHRvUm91dGUuc2V0dGluZ3MucGVybWlzc2lvbjtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25Db25maWcgPSByb3V0ZUhhc0NvbmZpZyA/IHRvUm91dGUuc2V0dGluZ3MucGVybWlzc2lvbiA6IG51bGw7XHJcblxyXG4gICAgY29uc3Qgbm9Sb3V0ZVBlcm1pc3Npb25zU2V0ID0gIXJvdXRlSGFzQ29uZmlnO1xyXG4gICAgY29uc3QgaXNBdXRob3JpemVkID0gcGVybWlzc2lvbkNvbmZpZyA9PT0gbnVsbCB8fCB0aGlzLmF1dGhvcml6ZVNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25Db25maWcub25seSk7XHJcblxyXG4gICAgaWYgKG5vUm91dGVQZXJtaXNzaW9uc1NldCB8fCBpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dC5jYW5jZWwobmV3IFJlZGlyZWN0KHBlcm1pc3Npb25Db25maWcucmVkaXJlY3RUbyB8fCB0aGlzLmRlZmF1bHRSZWRpcmVjdFJvdXRlKSk7XHJcbiAgfVxyXG5cclxuICB1c2VEZWZhdWx0UmVkaXJlY3RSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRSZWRpcmVjdFJvdXRlID0gcm91dGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==
