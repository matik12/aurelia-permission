var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "bluebird", "./role-store"], function (require, exports, aurelia_dependency_injection_1, PromiseExtended, role_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFxQkEsSUFBcUIsZ0JBQWdCO1FBQ25DLDBCQUFvQixTQUFvQjtZQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQUksQ0FBQztRQUU3QyxzQ0FBVyxHQUFYLFVBQVksT0FBd0I7WUFBcEMsaUJBMEJDO1lBekJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQSxPQUFPO2dCQUMzQyxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUN2RSxJQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBRzdFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQztnQkFDVCxDQUFDO2dCQUVELElBQU0sZUFBZSxHQUFtQixLQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBR3ZGLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQztnQkFDVCxDQUFDO2dCQUlELGVBQWUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUN2QyxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEVBQXBDLENBQW9DLEVBQzFDLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxDQUM3RSxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsdUNBQVksR0FBWixVQUFhLFFBQWdCO1lBQTdCLGlCQW1CQztZQWxCQyxJQUFNLFNBQVMsR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLElBQU0sZUFBZSxHQUFtQixLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRzNFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUM7b0JBQ1YsTUFBTSxDQUFDO2dCQUNULENBQUM7Z0JBSUQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLEVBQTdELENBQTZELENBQ3BFLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFTyw2Q0FBa0IsR0FBMUIsVUFBMkIsa0JBQTRCO1lBQXZELGlCQVlDO1lBWEMsSUFBTSxlQUFlLEdBQW1CLEVBQUUsQ0FBQztZQUUzQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUM3QixJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFMUQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3pCLENBQUM7UUFFTywrQ0FBb0IsR0FBNUIsVUFBNkIsTUFBc0IsRUFBRSxXQUFvQjtZQUE1Qyx1QkFBQSxFQUFBLGFBQXNCO1lBQ2pELE1BQU0sQ0FBQztnQkFDTCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsV0FBVzthQUN6QixDQUFDO1FBQ0osQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0F4RUEsQUF3RUMsSUFBQTtJQXhFb0IsZ0JBQWdCO1FBRHBDLHlDQUFVLEVBQUU7eUNBRW9CLG9CQUFTO09BRHJCLGdCQUFnQixDQXdFcEM7c0JBeEVvQixnQkFBZ0IiLCJmaWxlIjoiYXV0aG9yaXplLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBQcm9taXNlRXh0ZW5kZWQgZnJvbSAnYmx1ZWJpcmQnO1xyXG5cclxuaW1wb3J0IFJvbGVTdG9yZSBmcm9tICcuL3JvbGUtc3RvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uUm91dGUgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XHJcbiAgc2V0dGluZ3M6IHtcclxuICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgb25seTogc3RyaW5nW107XHJcbiAgICAgIHJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRob3JpemVSZWRpcmVjdCB7XHJcbiAgcmVzdWx0OiBib29sZWFuO1xyXG4gIGNhbmNlbFJvdXRlPzogc3RyaW5nO1xyXG59XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9sZVN0b3JlOiBSb2xlU3RvcmUpIHsgfVxyXG5cclxuICBjYW5SZWRpcmVjdCh0b1JvdXRlOiBQZXJtaXNzaW9uUm91dGUpOiBQcm9taXNlPEF1dGhvcml6ZVJlZGlyZWN0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aG9yaXplUmVkaXJlY3Q+KHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByb3V0ZUhhc0NvbmZpZyA9IHRvUm91dGUuc2V0dGluZ3MgJiYgdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uO1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uQ29uZmlnID0gcm91dGVIYXNDb25maWcgPyB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb24gOiBudWxsO1xyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gbm8gcm9sZSBwZXJtaXNzaW9ucyBoYXMgYmVlbiBzZXRcclxuICAgICAgaWYgKCFyb3V0ZUhhc0NvbmZpZykge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5jcmVhdGVSZWRpcmVjdFJlc3VsdCgpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJvbGVEZWZpbml0aW9uczogUHJvbWlzZTxhbnk+W10gPSB0aGlzLmdldFJvbGVEZWZpbml0aW9ucyhwZXJtaXNzaW9uQ29uZmlnLm9ubHkpO1xyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gbm8gZGVmaW5pdGlvbnMgcHJvdmlkZWQgZm9yIHJvbGUgcGVybWlzc2lvbnNcclxuICAgICAgaWYgKHJvbGVEZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuY3JlYXRlUmVkaXJlY3RSZXN1bHQoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdXRob3JpemUgd2hlbiBhbnkgcm9sZSBkZWZpbml0aW9uIHByb21pc2VzIGhhcyBiZWVuIHJlc29sdmVkIG9yXHJcbiAgICAgIC8vIE5vdCBhdXRob3JpemUgaWYgYWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWRcclxuICAgICAgUHJvbWlzZUV4dGVuZGVkLmFueShyb2xlRGVmaW5pdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh0aGlzLmNyZWF0ZVJlZGlyZWN0UmVzdWx0KCkpLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUodGhpcy5jcmVhdGVSZWRpcmVjdFJlc3VsdChmYWxzZSwgcGVybWlzc2lvbkNvbmZpZy5yZWRpcmVjdFRvKSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRob3JpemVkKHJvbGVMaXN0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgb25seVJvbGVzOiBzdHJpbmdbXSA9IHJvbGVMaXN0LnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoJywnKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByb2xlRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gdGhpcy5nZXRSb2xlRGVmaW5pdGlvbnMob25seVJvbGVzKTtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIGRlZmluaXRpb25zIHByb3ZpZGVkIGZvciByb2xlIHBlcm1pc3Npb25zXHJcbiAgICAgIGlmIChyb2xlRGVmaW5pdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gYW55IHJvbGUgZGVmaW5pdGlvbiBwcm9taXNlcyBoYXMgYmVlbiByZXNvbHZlZCBvclxyXG4gICAgICAvLyBOb3QgYXV0aG9yaXplIGlmIGFsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkXHJcbiAgICAgIFByb21pc2VFeHRlbmRlZC5hbnkocm9sZURlZmluaXRpb25zKS50aGVuKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoKSA9PiByZWplY3QobmV3IEVycm9yKCdVc2VyIGhhcyBub25lIG9mIHJlcXVpcmVkIHJvbGVzIGFzc2lnbmVkJykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Um9sZURlZmluaXRpb25zKG9ubHlBdXRob3JpemVSb2xlczogc3RyaW5nW10pOiBQcm9taXNlPGFueT5bXSB7XHJcbiAgICBjb25zdCByb2xlRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gW107XHJcblxyXG4gICAgb25seUF1dGhvcml6ZVJvbGVzLmZvckVhY2gocm9sZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvbGVEZWZpbml0aW9uID0gdGhpcy5yb2xlU3RvcmUuZ2V0RGVmaW5pdGlvbihyb2xlKTtcclxuXHJcbiAgICAgIGlmIChyb2xlRGVmaW5pdGlvbikge1xyXG4gICAgICAgIHJvbGVEZWZpbml0aW9ucy5wdXNoKHJvbGVEZWZpbml0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcm9sZURlZmluaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVSZWRpcmVjdFJlc3VsdChyZXN1bHQ6IGJvb2xlYW4gPSB0cnVlLCBjYW5jZWxSb3V0ZT86IHN0cmluZyk6IEF1dGhvcml6ZVJlZGlyZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxyXG4gICAgICBjYW5jZWxSb3V0ZTogY2FuY2VsUm91dGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
