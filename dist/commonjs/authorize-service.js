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
var PromiseExtended = require("bluebird");
var role_store_1 = require("./role-store");
var AuthorizeService = (function () {
    function AuthorizeService(roleStore) {
        this.roleStore = roleStore;
    }
    AuthorizeService.prototype.canRedirect = function (toRoute) {
        var _this = this;
        return new Promise(function (resolve) {
            var routeHasConfig = toRoute.settings && toRoute.settings.permission;
            var permissionConfig = routeHasConfig ? toRoute.settings.permission : null;
            if (!routeHasConfig) {
                resolve(_this.createRedirectResult());
                return;
            }
            var roleDefinitions = _this.getRoleDefinitions(permissionConfig.only);
            if (roleDefinitions.length === 0) {
                resolve(_this.createRedirectResult());
                return;
            }
            PromiseExtended.any(roleDefinitions).then(function () { return resolve(_this.createRedirectResult()); }, function () { return resolve(_this.createRedirectResult(false, permissionConfig.redirectTo)); });
        });
    };
    AuthorizeService.prototype.isAuthorized = function (roleList) {
        var _this = this;
        var onlyRoles = roleList.replace(' ', '').split(',');
        return new Promise(function (resolve, reject) {
            var roleDefinitions = _this.getRoleDefinitions(onlyRoles);
            if (roleDefinitions.length === 0) {
                resolve();
                return;
            }
            PromiseExtended.any(roleDefinitions).then(function () { return resolve(); }, function () { return reject(new Error('User has none of required roles assigned')); });
        });
    };
    AuthorizeService.prototype.getRoleDefinitions = function (onlyAuthorizeRoles) {
        var _this = this;
        var roleDefinitions = [];
        onlyAuthorizeRoles.forEach(function (role) {
            var roleDefinition = _this.roleStore.getDefinition(role);
            if (roleDefinition) {
                roleDefinitions.push(roleDefinition());
            }
        });
        return roleDefinitions;
    };
    AuthorizeService.prototype.createRedirectResult = function (result, cancelRoute) {
        if (result === void 0) { result = true; }
        return {
            result: result,
            cancelRoute: cancelRoute
        };
    };
    return AuthorizeService;
}());
AuthorizeService = __decorate([
    aurelia_dependency_injection_1.autoinject(),
    __metadata("design:paramtypes", [role_store_1.default])
], AuthorizeService);
exports.default = AuthorizeService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZFQUEwRDtBQUUxRCwwQ0FBNEM7QUFFNUMsMkNBQXFDO0FBaUJyQyxJQUFxQixnQkFBZ0I7SUFDbkMsMEJBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDO0lBRTdDLHNDQUFXLEdBQVgsVUFBWSxPQUF3QjtRQUFwQyxpQkEwQkM7UUF6QkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFvQixVQUFBLE9BQU87WUFDM0MsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2RSxJQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFHN0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUVELElBQU0sZUFBZSxHQUFtQixLQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFHdkYsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUlELGVBQWUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUN2QyxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEVBQXBDLENBQW9DLEVBQzFDLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxDQUM3RSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLFFBQWdCO1FBQTdCLGlCQW1CQztRQWxCQyxJQUFNLFNBQVMsR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBTSxlQUFlLEdBQW1CLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUczRSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sQ0FBQztZQUNULENBQUM7WUFJRCxlQUFlLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDdkMsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixjQUFNLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsRUFBN0QsQ0FBNkQsQ0FDcEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDZDQUFrQixHQUExQixVQUEyQixrQkFBNEI7UUFBdkQsaUJBWUM7UUFYQyxJQUFNLGVBQWUsR0FBbUIsRUFBRSxDQUFDO1FBRTNDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDN0IsSUFBTSxjQUFjLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVPLCtDQUFvQixHQUE1QixVQUE2QixNQUFzQixFQUFFLFdBQW9CO1FBQTVDLHVCQUFBLEVBQUEsYUFBc0I7UUFDakQsTUFBTSxDQUFDO1lBQ0wsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0F4RUEsQUF3RUMsSUFBQTtBQXhFb0IsZ0JBQWdCO0lBRHBDLHlDQUFVLEVBQUU7cUNBRW9CLG9CQUFTO0dBRHJCLGdCQUFnQixDQXdFcEM7a0JBeEVvQixnQkFBZ0IiLCJmaWxlIjoiYXV0aG9yaXplLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBQcm9taXNlRXh0ZW5kZWQgZnJvbSAnYmx1ZWJpcmQnO1xyXG5cclxuaW1wb3J0IFJvbGVTdG9yZSBmcm9tICcuL3JvbGUtc3RvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uUm91dGUgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XHJcbiAgc2V0dGluZ3M6IHtcclxuICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgb25seTogc3RyaW5nW107XHJcbiAgICAgIHJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRob3JpemVSZWRpcmVjdCB7XHJcbiAgcmVzdWx0OiBib29sZWFuO1xyXG4gIGNhbmNlbFJvdXRlPzogc3RyaW5nO1xyXG59XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9sZVN0b3JlOiBSb2xlU3RvcmUpIHsgfVxyXG5cclxuICBjYW5SZWRpcmVjdCh0b1JvdXRlOiBQZXJtaXNzaW9uUm91dGUpOiBQcm9taXNlPEF1dGhvcml6ZVJlZGlyZWN0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aG9yaXplUmVkaXJlY3Q+KHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByb3V0ZUhhc0NvbmZpZyA9IHRvUm91dGUuc2V0dGluZ3MgJiYgdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uO1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uQ29uZmlnID0gcm91dGVIYXNDb25maWcgPyB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb24gOiBudWxsO1xyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gbm8gcm9sZSBwZXJtaXNzaW9ucyBoYXMgYmVlbiBzZXRcclxuICAgICAgaWYgKCFyb3V0ZUhhc0NvbmZpZykge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5jcmVhdGVSZWRpcmVjdFJlc3VsdCgpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJvbGVEZWZpbml0aW9uczogUHJvbWlzZTxhbnk+W10gPSB0aGlzLmdldFJvbGVEZWZpbml0aW9ucyhwZXJtaXNzaW9uQ29uZmlnLm9ubHkpO1xyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gbm8gZGVmaW5pdGlvbnMgcHJvdmlkZWQgZm9yIHJvbGUgcGVybWlzc2lvbnNcclxuICAgICAgaWYgKHJvbGVEZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuY3JlYXRlUmVkaXJlY3RSZXN1bHQoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdXRob3JpemUgd2hlbiBhbnkgcm9sZSBkZWZpbml0aW9uIHByb21pc2VzIGhhcyBiZWVuIHJlc29sdmVkIG9yXHJcbiAgICAgIC8vIE5vdCBhdXRob3JpemUgaWYgYWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWRcclxuICAgICAgUHJvbWlzZUV4dGVuZGVkLmFueShyb2xlRGVmaW5pdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh0aGlzLmNyZWF0ZVJlZGlyZWN0UmVzdWx0KCkpLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUodGhpcy5jcmVhdGVSZWRpcmVjdFJlc3VsdChmYWxzZSwgcGVybWlzc2lvbkNvbmZpZy5yZWRpcmVjdFRvKSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRob3JpemVkKHJvbGVMaXN0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgb25seVJvbGVzOiBzdHJpbmdbXSA9IHJvbGVMaXN0LnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoJywnKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByb2xlRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gdGhpcy5nZXRSb2xlRGVmaW5pdGlvbnMob25seVJvbGVzKTtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIGRlZmluaXRpb25zIHByb3ZpZGVkIGZvciByb2xlIHBlcm1pc3Npb25zXHJcbiAgICAgIGlmIChyb2xlRGVmaW5pdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gYW55IHJvbGUgZGVmaW5pdGlvbiBwcm9taXNlcyBoYXMgYmVlbiByZXNvbHZlZCBvclxyXG4gICAgICAvLyBOb3QgYXV0aG9yaXplIGlmIGFsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkXHJcbiAgICAgIFByb21pc2VFeHRlbmRlZC5hbnkocm9sZURlZmluaXRpb25zKS50aGVuKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoKSA9PiByZWplY3QobmV3IEVycm9yKCdVc2VyIGhhcyBub25lIG9mIHJlcXVpcmVkIHJvbGVzIGFzc2lnbmVkJykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Um9sZURlZmluaXRpb25zKG9ubHlBdXRob3JpemVSb2xlczogc3RyaW5nW10pOiBQcm9taXNlPGFueT5bXSB7XHJcbiAgICBjb25zdCByb2xlRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gW107XHJcblxyXG4gICAgb25seUF1dGhvcml6ZVJvbGVzLmZvckVhY2gocm9sZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvbGVEZWZpbml0aW9uID0gdGhpcy5yb2xlU3RvcmUuZ2V0RGVmaW5pdGlvbihyb2xlKTtcclxuXHJcbiAgICAgIGlmIChyb2xlRGVmaW5pdGlvbikge1xyXG4gICAgICAgIHJvbGVEZWZpbml0aW9ucy5wdXNoKHJvbGVEZWZpbml0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcm9sZURlZmluaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVSZWRpcmVjdFJlc3VsdChyZXN1bHQ6IGJvb2xlYW4gPSB0cnVlLCBjYW5jZWxSb3V0ZT86IHN0cmluZyk6IEF1dGhvcml6ZVJlZGlyZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxyXG4gICAgICBjYW5jZWxSb3V0ZTogY2FuY2VsUm91dGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
