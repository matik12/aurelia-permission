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
var aurelia_router_1 = require("aurelia-router");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var authorize_service_1 = require("./authorize-service");
var AuthorizeRouteStep = (function () {
    function AuthorizeRouteStep(authorizeService) {
        this.authorizeService = authorizeService;
    }
    AuthorizeRouteStep.prototype.run = function (routingContext, next) {
        var _this = this;
        var toState = routingContext.config;
        var navigationPromise = new Promise(function (resolve) {
            _this.authorizeService.canRedirect(toState).then(function (authorizeRedirect) {
                if (authorizeRedirect.result) {
                    next().then(function (result) { return resolve(result); });
                }
                else {
                    next.cancel(new aurelia_router_1.Redirect(authorizeRedirect.cancelRoute || '')).then(function (result) { return resolve(result); });
                }
                return authorizeRedirect;
            });
        });
        return navigationPromise;
    };
    return AuthorizeRouteStep;
}());
AuthorizeRouteStep = __decorate([
    aurelia_dependency_injection_1.autoinject(),
    __metadata("design:paramtypes", [authorize_service_1.default])
], AuthorizeRouteStep);
exports.default = AuthorizeRouteStep;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUFnRDtBQUNoRCw2RUFBMEQ7QUFFMUQseURBQTJGO0FBRzNGLElBQXFCLGtCQUFrQjtJQUNyQyw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELGdDQUFHLEdBQUgsVUFBSSxjQUFjLEVBQUUsSUFBVTtRQUE5QixpQkFvQkM7UUFuQkMsSUFBTSxPQUFPLEdBQW9CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFFdkQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFFNUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzdDLFVBQUMsaUJBQW9DO2dCQUVuQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHlCQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUNqRyxDQUFDO2dCQUVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCx5QkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4Qm9CLGtCQUFrQjtJQUR0Qyx5Q0FBVSxFQUFFO3FDQUUyQiwyQkFBZ0I7R0FEbkMsa0JBQWtCLENBd0J0QztrQkF4Qm9CLGtCQUFrQiIsImZpbGUiOiJhdXRob3JpemUtcm91dGUtc3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZGlyZWN0LCBOZXh0IH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSwgeyBQZXJtaXNzaW9uUm91dGUsIEF1dGhvcml6ZVJlZGlyZWN0IH0gZnJvbSAnLi9hdXRob3JpemUtc2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVJvdXRlU3RlcCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgcnVuKHJvdXRpbmdDb250ZXh0LCBuZXh0OiBOZXh0KSB7XHJcbiAgICBjb25zdCB0b1N0YXRlOiBQZXJtaXNzaW9uUm91dGUgPSByb3V0aW5nQ29udGV4dC5jb25maWc7XHJcblxyXG4gICAgY29uc3QgbmF2aWdhdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cclxuICAgICAgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmNhblJlZGlyZWN0KHRvU3RhdGUpLnRoZW4oXHJcbiAgICAgICAgKGF1dGhvcml6ZVJlZGlyZWN0OiBBdXRob3JpemVSZWRpcmVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgIGlmIChhdXRob3JpemVSZWRpcmVjdC5yZXN1bHQpIHtcclxuICAgICAgICAgICAgbmV4dCgpLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0LmNhbmNlbChuZXcgUmVkaXJlY3QoYXV0aG9yaXplUmVkaXJlY3QuY2FuY2VsUm91dGUgfHwgJycpKS50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBhdXRob3JpemVSZWRpcmVjdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmF2aWdhdGlvblByb21pc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==
