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
        }
        AuthorizeRouteStep.prototype.run = function (routingContext, next) {
            var toRoute = routingContext.config;
            var routeHasConfig = toRoute.settings && toRoute.settings.permission;
            var permissionConfig = routeHasConfig ? toRoute.settings.permission : null;
            if (!routeHasConfig) {
                return next();
            }
            return (_a = this.authorizeService).isAuthorized.apply(_a, permissionConfig.only).then(function () { return next(); })
                .catch(function () { return next.cancel(new aurelia_router_1.Redirect(permissionConfig.redirectTo || '')); });
            var _a;
        };
        return AuthorizeRouteStep;
    }());
    AuthorizeRouteStep = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [authorize_service_1.default])
    ], AuthorizeRouteStep);
    exports.default = AuthorizeRouteStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFlQSxJQUFxQixrQkFBa0I7UUFDckMsNEJBQW9CLGdCQUFrQztZQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQUksQ0FBQztRQUUzRCxnQ0FBRyxHQUFILFVBQUksY0FBYyxFQUFFLElBQVU7WUFDNUIsSUFBTSxPQUFPLEdBQW9CLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDdkQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2RSxJQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFHN0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsQ0FBQztZQUVELE1BQU0sQ0FBQyxDQUFBLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFBLENBQUMsWUFBWSxXQUFJLGdCQUFnQixDQUFDLElBQUksRUFDL0QsSUFBSSxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUUsRUFBTixDQUFNLENBQUM7aUJBQ2xCLEtBQUssQ0FBQyxjQUFNLE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHlCQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQTVELENBQTRELENBQUMsQ0FBQzs7UUFDL0UsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtJQWpCb0Isa0JBQWtCO1FBRHRDLHlDQUFVLEVBQUU7eUNBRTJCLDJCQUFnQjtPQURuQyxrQkFBa0IsQ0FpQnRDO3NCQWpCb0Isa0JBQWtCIiwiZmlsZSI6ImF1dGhvcml6ZS1yb3V0ZS1zdGVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgTmV4dCwgUm91dGVDb25maWcgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSBmcm9tICcuL2F1dGhvcml6ZS1zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvblJvdXRlIGV4dGVuZHMgUm91dGVDb25maWcge1xyXG4gIHNldHRpbmdzOiB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIG9ubHk6IHN0cmluZ1tdO1xyXG4gICAgICByZWRpcmVjdFRvPzogc3RyaW5nO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplUm91dGVTdGVwIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UpIHsgfVxyXG5cclxuICBydW4ocm91dGluZ0NvbnRleHQsIG5leHQ6IE5leHQpIHtcclxuICAgIGNvbnN0IHRvUm91dGU6IFBlcm1pc3Npb25Sb3V0ZSA9IHJvdXRpbmdDb250ZXh0LmNvbmZpZztcclxuICAgIGNvbnN0IHJvdXRlSGFzQ29uZmlnID0gdG9Sb3V0ZS5zZXR0aW5ncyAmJiB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb247XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uQ29uZmlnID0gcm91dGVIYXNDb25maWcgPyB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb24gOiBudWxsO1xyXG5cclxuICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBzZXRcclxuICAgIGlmICghcm91dGVIYXNDb25maWcpIHtcclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9uQ29uZmlnLm9ubHkpXHJcbiAgICAgIC50aGVuKCgpID0+IG5leHQoKSlcclxuICAgICAgLmNhdGNoKCgpID0+IG5leHQuY2FuY2VsKG5ldyBSZWRpcmVjdChwZXJtaXNzaW9uQ29uZmlnLnJlZGlyZWN0VG8gfHwgJycpKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
