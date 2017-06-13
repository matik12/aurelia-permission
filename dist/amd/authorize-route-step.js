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
    exports.default = AuthorizeRouteStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFlQSxJQUFxQixrQkFBa0I7UUFJckMsNEJBQW9CLG9CQUEwQztZQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1lBRnRELHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUVnQyxDQUFDO1FBRW5FLGdDQUFHLEdBQUgsVUFBSSxxQkFBcUIsRUFBRSxJQUFVO1lBQXJDLGlCQWFDO1lBWkMsSUFBTSxlQUFlLEdBQUcscUJBQXFCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3RSxJQUFNLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7WUFDbEgsSUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFM0csSUFBTSxxQkFBcUIsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1lBQ3JELElBQU0sWUFBWSxHQUFHLGtCQUFrQixLQUFLLElBQUksSUFBSSxDQUFBLEtBQUEsSUFBSSxDQUFDLG9CQUFvQixDQUFBLENBQUMsWUFBWSxXQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZILEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSx5QkFBUSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDOztRQUMvRixDQUFDO1FBRUQsa0RBQXFCLEdBQXJCLFVBQXNCLGlCQUFpQjtZQUNyQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDN0UsQ0FBQztRQUVELG9EQUF1QixHQUF2QixVQUF3QixLQUFhO1lBQ25DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtJQTVCb0Isa0JBQWtCO1FBRHRDLHlDQUFVLEVBQUU7eUNBSytCLCtCQUFvQjtPQUozQyxrQkFBa0IsQ0E0QnRDO3NCQTVCb0Isa0JBQWtCIiwiZmlsZSI6ImF1dGhvcml6ZS1yb3V0ZS1zdGVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgTmV4dCwgUm91dGVDb25maWcgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXphdGlvblNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemF0aW9uLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uUm91dGUgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XHJcbiAgc2V0dGluZ3M6IHtcclxuICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgb25seTogc3RyaW5nW107XHJcbiAgICAgIHJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemVSb3V0ZVN0ZXAge1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRSZWRpcmVjdFJvdXRlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgcnVuKG5hdmlnYXRpb25JbnN0cnVjdGlvbiwgbmV4dDogTmV4dCkge1xyXG4gICAgY29uc3QgYWxsSW5zdHJ1Y3Rpb25zID0gbmF2aWdhdGlvbkluc3RydWN0aW9uLmdldEFsbEluc3RydWN0aW9ucygpLnJldmVyc2UoKTtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25JbnN0cnVjdGlvbiA9IGFsbEluc3RydWN0aW9ucy5maW5kKGluc3RydWN0aW9uID0+IHRoaXMuaGFzUGVybWlzc2lvblNldHRpbmdzKGluc3RydWN0aW9uLmNvbmZpZykpO1xyXG4gICAgY29uc3QgcGVybWlzc2lvblNldHRpbmdzID0gcGVybWlzc2lvbkluc3RydWN0aW9uID8gcGVybWlzc2lvbkluc3RydWN0aW9uLmNvbmZpZy5zZXR0aW5ncy5wZXJtaXNzaW9uIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBub1JvdXRlUGVybWlzc2lvbnNTZXQgPSAhcGVybWlzc2lvbkluc3RydWN0aW9uO1xyXG4gICAgY29uc3QgaXNBdXRob3JpemVkID0gcGVybWlzc2lvblNldHRpbmdzID09PSBudWxsIHx8IHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25TZXR0aW5ncy5vbmx5KTtcclxuXHJcbiAgICBpZiAobm9Sb3V0ZVBlcm1pc3Npb25zU2V0IHx8IGlzQXV0aG9yaXplZCkge1xyXG4gICAgICByZXR1cm4gbmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0LmNhbmNlbChuZXcgUmVkaXJlY3QocGVybWlzc2lvblNldHRpbmdzLnJlZGlyZWN0VG8gfHwgdGhpcy5kZWZhdWx0UmVkaXJlY3RSb3V0ZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFzUGVybWlzc2lvblNldHRpbmdzKGluc3RydWN0aW9uQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25Db25maWcuc2V0dGluZ3MgJiYgaW5zdHJ1Y3Rpb25Db25maWcuc2V0dGluZ3MucGVybWlzc2lvbjtcclxuICB9XHJcblxyXG4gIHVzZURlZmF1bHRSZWRpcmVjdFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGVmYXVsdFJlZGlyZWN0Um91dGUgPSByb3V0ZTtcclxuICB9XHJcbn1cclxuIl19
