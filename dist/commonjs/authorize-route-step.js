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
var authorization_service_1 = require("./authorization-service");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtcm91dGUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZFQUEwRDtBQUMxRCxpREFBNkQ7QUFFN0QsaUVBQTJEO0FBWTNELElBQXFCLGtCQUFrQjtJQUlyQyw0QkFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFGdEQseUJBQW9CLEdBQUcsRUFBRSxDQUFDO0lBRWdDLENBQUM7SUFFbkUsZ0NBQUcsR0FBSCxVQUFJLHFCQUFxQixFQUFFLElBQVU7UUFBckMsaUJBYUM7UUFaQyxJQUFNLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdFLElBQU0scUJBQXFCLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUNsSCxJQUFNLGtCQUFrQixHQUFHLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUUzRyxJQUFNLHFCQUFxQixHQUFHLENBQUMscUJBQXFCLENBQUM7UUFDckQsSUFBTSxZQUFZLEdBQUcsa0JBQWtCLEtBQUssSUFBSSxJQUFJLENBQUEsS0FBQSxJQUFJLENBQUMsb0JBQW9CLENBQUEsQ0FBQyxZQUFZLFdBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkgsRUFBRSxDQUFDLENBQUMscUJBQXFCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUkseUJBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQzs7SUFDL0YsQ0FBQztJQUVELGtEQUFxQixHQUFyQixVQUFzQixpQkFBaUI7UUFDckMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQzdFLENBQUM7SUFFRCxvREFBdUIsR0FBdkIsVUFBd0IsS0FBYTtRQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFDSCx5QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1Qm9CLGtCQUFrQjtJQUR0Qyx5Q0FBVSxFQUFFO3FDQUsrQiwrQkFBb0I7R0FKM0Msa0JBQWtCLENBNEJ0QztrQkE1Qm9CLGtCQUFrQiIsImZpbGUiOiJhdXRob3JpemUtcm91dGUtc3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0IHsgUmVkaXJlY3QsIE5leHQsIFJvdXRlQ29uZmlnIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEF1dGhvcml6YXRpb25TZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXphdGlvbi1zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvblJvdXRlIGV4dGVuZHMgUm91dGVDb25maWcge1xyXG4gIHNldHRpbmdzOiB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIG9ubHk6IHN0cmluZ1tdO1xyXG4gICAgICByZWRpcmVjdFRvPzogc3RyaW5nO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplUm91dGVTdGVwIHtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0UmVkaXJlY3RSb3V0ZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhvcml6YXRpb25TZXJ2aWNlOiBBdXRob3JpemF0aW9uU2VydmljZSkgeyB9XHJcblxyXG4gIHJ1bihuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24sIG5leHQ6IE5leHQpIHtcclxuICAgIGNvbnN0IGFsbEluc3RydWN0aW9ucyA9IG5hdmlnYXRpb25JbnN0cnVjdGlvbi5nZXRBbGxJbnN0cnVjdGlvbnMoKS5yZXZlcnNlKCk7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uSW5zdHJ1Y3Rpb24gPSBhbGxJbnN0cnVjdGlvbnMuZmluZChpbnN0cnVjdGlvbiA9PiB0aGlzLmhhc1Blcm1pc3Npb25TZXR0aW5ncyhpbnN0cnVjdGlvbi5jb25maWcpKTtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25TZXR0aW5ncyA9IHBlcm1pc3Npb25JbnN0cnVjdGlvbiA/IHBlcm1pc3Npb25JbnN0cnVjdGlvbi5jb25maWcuc2V0dGluZ3MucGVybWlzc2lvbiA6IG51bGw7XHJcblxyXG4gICAgY29uc3Qgbm9Sb3V0ZVBlcm1pc3Npb25zU2V0ID0gIXBlcm1pc3Npb25JbnN0cnVjdGlvbjtcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHBlcm1pc3Npb25TZXR0aW5ncyA9PT0gbnVsbCB8fCB0aGlzLmF1dGhvcml6YXRpb25TZXJ2aWNlLmlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9uU2V0dGluZ3Mub25seSk7XHJcblxyXG4gICAgaWYgKG5vUm91dGVQZXJtaXNzaW9uc1NldCB8fCBpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dC5jYW5jZWwobmV3IFJlZGlyZWN0KHBlcm1pc3Npb25TZXR0aW5ncy5yZWRpcmVjdFRvIHx8IHRoaXMuZGVmYXVsdFJlZGlyZWN0Um91dGUpKTtcclxuICB9XHJcblxyXG4gIGhhc1Blcm1pc3Npb25TZXR0aW5ncyhpbnN0cnVjdGlvbkNvbmZpZykge1xyXG4gICAgcmV0dXJuIGluc3RydWN0aW9uQ29uZmlnLnNldHRpbmdzICYmIGluc3RydWN0aW9uQ29uZmlnLnNldHRpbmdzLnBlcm1pc3Npb247XHJcbiAgfVxyXG5cclxuICB1c2VEZWZhdWx0UmVkaXJlY3RSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRSZWRpcmVjdFJvdXRlID0gcm91dGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==
