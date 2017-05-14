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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_router_1 = require("aurelia-router");
var authorize_service_1 = require("./authorize-service");
var AuthorizeRouteStep = (function () {
    function AuthorizeRouteStep(authorizeService) {
        this.authorizeService = authorizeService;
        this.defaultRedirectRoute = '';
    }
    AuthorizeRouteStep.prototype.run = function (routingContext, next) {
        var _this = this;
        var toRoute = routingContext.config;
        var routeHasConfig = toRoute.settings && toRoute.settings.permission;
        var permissionConfig = routeHasConfig ? toRoute.settings.permission : null;
        if (!routeHasConfig) {
            return next();
        }
        return (_a = this.authorizeService).isAuthorized.apply(_a, permissionConfig.only).then(function () { return next(); })
            .catch(function () { return next.cancel(new aurelia_router_1.Redirect(permissionConfig.redirectTo || _this.defaultRedirectRoute)); });
        var _a;
    };
    AuthorizeRouteStep.prototype.setDefaultRedirectRoute = function (route) {
        this.defaultRedirectRoute = route;
    };
    return AuthorizeRouteStep;
}());
AuthorizeRouteStep = __decorate([
    aurelia_dependency_injection_1.autoinject(),
    __metadata("design:paramtypes", [authorize_service_1.default])
], AuthorizeRouteStep);
exports.default = AuthorizeRouteStep;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZFQUEwRDtBQUMxRCxpREFBNkQ7QUFFN0QseURBQW1EO0FBWW5ELElBQXFCLGtCQUFrQjtJQUlyQyw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGOUMseUJBQW9CLEdBQUcsRUFBRSxDQUFDO0lBRXdCLENBQUM7SUFFM0QsZ0NBQUcsR0FBSCxVQUFJLGNBQWMsRUFBRSxJQUFVO1FBQTlCLGlCQWFDO1FBWkMsSUFBTSxPQUFPLEdBQW9CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDdkQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN2RSxJQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFHN0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUEsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsQ0FBQyxZQUFZLFdBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUMvRCxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksRUFBRSxFQUFOLENBQU0sQ0FBQzthQUNsQixLQUFLLENBQUMsY0FBTSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSx5QkFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFuRixDQUFtRixDQUFDLENBQUM7O0lBQ3RHLENBQUM7SUFFRCxvREFBdUIsR0FBdkIsVUFBd0IsS0FBYTtRQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFDSCx5QkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4Qm9CLGtCQUFrQjtJQUR0Qyx5Q0FBVSxFQUFFO3FDQUsyQiwyQkFBZ0I7R0FKbkMsa0JBQWtCLENBd0J0QztrQkF4Qm9CLGtCQUFrQiIsImZpbGUiOiJhdXRob3JpemUtcm91dGUtc3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0IHsgUmVkaXJlY3QsIE5leHQsIFJvdXRlQ29uZmlnIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEF1dGhvcml6ZVNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemUtc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25Sb3V0ZSBleHRlbmRzIFJvdXRlQ29uZmlnIHtcclxuICBzZXR0aW5nczoge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBvbmx5OiBzdHJpbmdbXTtcclxuICAgICAgcmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVJvdXRlU3RlcCB7XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFJlZGlyZWN0Um91dGUgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgcnVuKHJvdXRpbmdDb250ZXh0LCBuZXh0OiBOZXh0KSB7XHJcbiAgICBjb25zdCB0b1JvdXRlOiBQZXJtaXNzaW9uUm91dGUgPSByb3V0aW5nQ29udGV4dC5jb25maWc7XHJcbiAgICBjb25zdCByb3V0ZUhhc0NvbmZpZyA9IHRvUm91dGUuc2V0dGluZ3MgJiYgdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uO1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkNvbmZpZyA9IHJvdXRlSGFzQ29uZmlnID8gdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uIDogbnVsbDtcclxuXHJcbiAgICAvLyBBdXRob3JpemUgd2hlbiBubyBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gc2V0XHJcbiAgICBpZiAoIXJvdXRlSGFzQ29uZmlnKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXplU2VydmljZS5pc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvbkNvbmZpZy5vbmx5KVxyXG4gICAgICAudGhlbigoKSA9PiBuZXh0KCkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBuZXh0LmNhbmNlbChuZXcgUmVkaXJlY3QocGVybWlzc2lvbkNvbmZpZy5yZWRpcmVjdFRvIHx8IHRoaXMuZGVmYXVsdFJlZGlyZWN0Um91dGUpKSk7XHJcbiAgfVxyXG5cclxuICBzZXREZWZhdWx0UmVkaXJlY3RSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRSZWRpcmVjdFJvdXRlID0gcm91dGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==
