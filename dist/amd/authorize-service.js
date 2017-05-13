var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "bluebird", "./permission-store"], function (require, exports, aurelia_dependency_injection_1, PromiseExtended, permission_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthorizeService = (function () {
        function AuthorizeService(permissionsStore) {
            this.permissionsStore = permissionsStore;
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
                var permissionDefinitions = _this.getPermissionDefinitions(permissionConfig.only);
                if (permissionDefinitions.length === 0) {
                    resolve(_this.createRedirectResult());
                    return;
                }
                PromiseExtended.any(permissionDefinitions).then(function () { return resolve(_this.createRedirectResult()); }, function () { return resolve(_this.createRedirectResult(false, permissionConfig.redirectTo)); });
            });
        };
        AuthorizeService.prototype.isAuthorized = function () {
            var _this = this;
            var permissions = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                permissions[_i] = arguments[_i];
            }
            return new Promise(function (resolve, reject) {
                var permissionDefinitions = _this.getPermissionDefinitions(permissions);
                if (permissionDefinitions.length === 0) {
                    resolve();
                    return;
                }
                PromiseExtended.any(permissionDefinitions).then(function () { return resolve(); }, function () { return reject(new Error('User has none of required permissions assigned')); });
            });
        };
        AuthorizeService.prototype.getPermissionDefinitions = function (onlyAuthorizePermissions) {
            var _this = this;
            var permissionDefinitions = [];
            onlyAuthorizePermissions.forEach(function (permission) {
                var permissionDefinition = _this.permissionsStore.getDefinition(permission);
                if (permissionDefinition) {
                    permissionDefinitions.push(permissionDefinition());
                }
            });
            return permissionDefinitions;
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
        __metadata("design:paramtypes", [permission_store_1.default])
    ], AuthorizeService);
    exports.default = AuthorizeService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFxQkEsSUFBcUIsZ0JBQWdCO1FBQ25DLDBCQUFvQixnQkFBa0M7WUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFJLENBQUM7UUFFM0Qsc0NBQVcsR0FBWCxVQUFZLE9BQXdCO1lBQXBDLGlCQTBCQztZQXpCQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9CLFVBQUEsT0FBTztnQkFDM0MsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDdkUsSUFBTSxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUc3RSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO29CQUNyQyxNQUFNLENBQUM7Z0JBQ1QsQ0FBQztnQkFFRCxJQUFNLHFCQUFxQixHQUFtQixLQUFJLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBR25HLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztvQkFDckMsTUFBTSxDQUFDO2dCQUNULENBQUM7Z0JBSUQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FDN0MsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFwQyxDQUFvQyxFQUMxQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBdEUsQ0FBc0UsQ0FDN0UsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELHVDQUFZLEdBQVo7WUFBQSxpQkFpQkM7WUFqQlkscUJBQXdCO2lCQUF4QixVQUF3QixFQUF4QixxQkFBd0IsRUFBeEIsSUFBd0I7Z0JBQXhCLGdDQUF3Qjs7WUFDbkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLElBQU0scUJBQXFCLEdBQW1CLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFHekYsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDO29CQUNWLE1BQU0sQ0FBQztnQkFDVCxDQUFDO2dCQUlELGVBQWUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQzdDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLEVBQW5FLENBQW1FLENBQzFFLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFTyxtREFBd0IsR0FBaEMsVUFBaUMsd0JBQWtDO1lBQW5FLGlCQVlDO1lBWEMsSUFBTSxxQkFBcUIsR0FBbUIsRUFBRSxDQUFDO1lBRWpELHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7Z0JBQ3pDLElBQU0sb0JBQW9CLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFN0UsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO29CQUN6QixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDL0IsQ0FBQztRQUVPLCtDQUFvQixHQUE1QixVQUE2QixNQUFzQixFQUFFLFdBQW9CO1lBQTVDLHVCQUFBLEVBQUEsYUFBc0I7WUFDakQsTUFBTSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFdBQVcsRUFBRSxXQUFXO2FBQ3pCLENBQUM7UUFDSixDQUFDO1FBQ0gsdUJBQUM7SUFBRCxDQXRFQSxBQXNFQyxJQUFBO0lBdEVvQixnQkFBZ0I7UUFEcEMseUNBQVUsRUFBRTt5Q0FFMkIsMEJBQWdCO09BRG5DLGdCQUFnQixDQXNFcEM7c0JBdEVvQixnQkFBZ0IiLCJmaWxlIjoiYXV0aG9yaXplLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBQcm9taXNlRXh0ZW5kZWQgZnJvbSAnYmx1ZWJpcmQnO1xyXG5cclxuaW1wb3J0IFBlcm1pc3Npb25zU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvblJvdXRlIGV4dGVuZHMgUm91dGVDb25maWcge1xyXG4gIHNldHRpbmdzOiB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIG9ubHk6IHN0cmluZ1tdO1xyXG4gICAgICByZWRpcmVjdFRvPzogc3RyaW5nO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXplUmVkaXJlY3Qge1xyXG4gIHJlc3VsdDogYm9vbGVhbjtcclxuICBjYW5jZWxSb3V0ZT86IHN0cmluZztcclxufVxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcm1pc3Npb25zU3RvcmU6IFBlcm1pc3Npb25zU3RvcmUpIHsgfVxyXG5cclxuICBjYW5SZWRpcmVjdCh0b1JvdXRlOiBQZXJtaXNzaW9uUm91dGUpOiBQcm9taXNlPEF1dGhvcml6ZVJlZGlyZWN0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aG9yaXplUmVkaXJlY3Q+KHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByb3V0ZUhhc0NvbmZpZyA9IHRvUm91dGUuc2V0dGluZ3MgJiYgdG9Sb3V0ZS5zZXR0aW5ncy5wZXJtaXNzaW9uO1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uQ29uZmlnID0gcm91dGVIYXNDb25maWcgPyB0b1JvdXRlLnNldHRpbmdzLnBlcm1pc3Npb24gOiBudWxsO1xyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gbm8gcGVybWlzc2lvbnMgaGFzIGJlZW4gc2V0XHJcbiAgICAgIGlmICghcm91dGVIYXNDb25maWcpIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuY3JlYXRlUmVkaXJlY3RSZXN1bHQoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gdGhpcy5nZXRQZXJtaXNzaW9uRGVmaW5pdGlvbnMocGVybWlzc2lvbkNvbmZpZy5vbmx5KTtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIGRlZmluaXRpb25zIHByb3ZpZGVkIGZvciBwZXJtaXNzaW9uc1xyXG4gICAgICBpZiAocGVybWlzc2lvbkRlZmluaXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5jcmVhdGVSZWRpcmVjdFJlc3VsdCgpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIGFueSBvZiBwZXJtaXNzaW9uIGRlZmluaXRpb24gcHJvbWlzZXMgaGFzIGJlZW4gcmVzb2x2ZWQgb3JcclxuICAgICAgLy8gTm90IGF1dGhvcml6ZSBpZiBhbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZFxyXG4gICAgICBQcm9taXNlRXh0ZW5kZWQuYW55KHBlcm1pc3Npb25EZWZpbml0aW9ucykudGhlbihcclxuICAgICAgICAoKSA9PiByZXNvbHZlKHRoaXMuY3JlYXRlUmVkaXJlY3RSZXN1bHQoKSksXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh0aGlzLmNyZWF0ZVJlZGlyZWN0UmVzdWx0KGZhbHNlLCBwZXJtaXNzaW9uQ29uZmlnLnJlZGlyZWN0VG8pKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uczogUHJvbWlzZTxhbnk+W10gPSB0aGlzLmdldFBlcm1pc3Npb25EZWZpbml0aW9ucyhwZXJtaXNzaW9ucyk7XHJcblxyXG4gICAgICAvLyBBdXRob3JpemUgd2hlbiBubyBkZWZpbml0aW9ucyBwcm92aWRlZCBmb3IgcGVybWlzc2lvbnNcclxuICAgICAgaWYgKHBlcm1pc3Npb25EZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdXRob3JpemUgd2hlbiBhbnkgb2YgcGVybWlzc2lvbiBkZWZpbml0aW9uIHByb21pc2VzIGhhcyBiZWVuIHJlc29sdmVkIG9yXHJcbiAgICAgIC8vIE5vdCBhdXRob3JpemUgaWYgYWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWRcclxuICAgICAgUHJvbWlzZUV4dGVuZGVkLmFueShwZXJtaXNzaW9uRGVmaW5pdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ1VzZXIgaGFzIG5vbmUgb2YgcmVxdWlyZWQgcGVybWlzc2lvbnMgYXNzaWduZWQnKSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQZXJtaXNzaW9uRGVmaW5pdGlvbnMob25seUF1dGhvcml6ZVBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PltdIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uczogUHJvbWlzZTxhbnk+W10gPSBbXTtcclxuXHJcbiAgICBvbmx5QXV0aG9yaXplUGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHtcclxuICAgICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb24gPSB0aGlzLnBlcm1pc3Npb25zU3RvcmUuZ2V0RGVmaW5pdGlvbihwZXJtaXNzaW9uKTtcclxuXHJcbiAgICAgIGlmIChwZXJtaXNzaW9uRGVmaW5pdGlvbikge1xyXG4gICAgICAgIHBlcm1pc3Npb25EZWZpbml0aW9ucy5wdXNoKHBlcm1pc3Npb25EZWZpbml0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGVybWlzc2lvbkRlZmluaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVSZWRpcmVjdFJlc3VsdChyZXN1bHQ6IGJvb2xlYW4gPSB0cnVlLCBjYW5jZWxSb3V0ZT86IHN0cmluZyk6IEF1dGhvcml6ZVJlZGlyZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxyXG4gICAgICBjYW5jZWxSb3V0ZTogY2FuY2VsUm91dGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
