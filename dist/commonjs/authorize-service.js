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
var permission_store_1 = require("./permission-store");
var AuthorizeService = (function () {
    function AuthorizeService(permissionsStore) {
        this.permissionsStore = permissionsStore;
    }
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
    return AuthorizeService;
}());
AuthorizeService = __decorate([
    aurelia_dependency_injection_1.autoinject(),
    __metadata("design:paramtypes", [permission_store_1.default])
], AuthorizeService);
exports.default = AuthorizeService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZFQUEwRDtBQUMxRCwwQ0FBNEM7QUFFNUMsdURBQWtEO0FBR2xELElBQXFCLGdCQUFnQjtJQUNuQywwQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELHVDQUFZLEdBQVo7UUFBQSxpQkFpQkM7UUFqQlkscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQ25DLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQU0scUJBQXFCLEdBQW1CLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUd6RixFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUlELGVBQWUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQzdDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLEVBQW5FLENBQW1FLENBQzFFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtREFBd0IsR0FBaEMsVUFBaUMsd0JBQWtDO1FBQW5FLGlCQVlDO1FBWEMsSUFBTSxxQkFBcUIsR0FBbUIsRUFBRSxDQUFDO1FBRWpELHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7WUFDekMsSUFBTSxvQkFBb0IsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTdFLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDekIscUJBQXFCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMscUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5Db0IsZ0JBQWdCO0lBRHBDLHlDQUFVLEVBQUU7cUNBRTJCLDBCQUFnQjtHQURuQyxnQkFBZ0IsQ0FtQ3BDO2tCQW5Db0IsZ0JBQWdCIiwiZmlsZSI6ImF1dGhvcml6ZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBQcm9taXNlRXh0ZW5kZWQgZnJvbSAnYmx1ZWJpcmQnO1xyXG5cclxuaW1wb3J0IFBlcm1pc3Npb25zU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uc1N0b3JlOiBQZXJtaXNzaW9uc1N0b3JlKSB7IH1cclxuXHJcbiAgaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gdGhpcy5nZXRQZXJtaXNzaW9uRGVmaW5pdGlvbnMocGVybWlzc2lvbnMpO1xyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gbm8gZGVmaW5pdGlvbnMgcHJvdmlkZWQgZm9yIHBlcm1pc3Npb25zXHJcbiAgICAgIGlmIChwZXJtaXNzaW9uRGVmaW5pdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXV0aG9yaXplIHdoZW4gYW55IG9mIHBlcm1pc3Npb24gZGVmaW5pdGlvbiBwcm9taXNlcyBoYXMgYmVlbiByZXNvbHZlZCBvclxyXG4gICAgICAvLyBOb3QgYXV0aG9yaXplIGlmIGFsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkXHJcbiAgICAgIFByb21pc2VFeHRlbmRlZC5hbnkocGVybWlzc2lvbkRlZmluaXRpb25zKS50aGVuKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoKSA9PiByZWplY3QobmV3IEVycm9yKCdVc2VyIGhhcyBub25lIG9mIHJlcXVpcmVkIHBlcm1pc3Npb25zIGFzc2lnbmVkJykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKG9ubHlBdXRob3JpemVQZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPGFueT5bXSB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IFByb21pc2U8YW55PltdID0gW107XHJcblxyXG4gICAgb25seUF1dGhvcml6ZVBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uID0gdGhpcy5wZXJtaXNzaW9uc1N0b3JlLmdldERlZmluaXRpb24ocGVybWlzc2lvbik7XHJcblxyXG4gICAgICBpZiAocGVybWlzc2lvbkRlZmluaXRpb24pIHtcclxuICAgICAgICBwZXJtaXNzaW9uRGVmaW5pdGlvbnMucHVzaChwZXJtaXNzaW9uRGVmaW5pdGlvbigpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBlcm1pc3Npb25EZWZpbml0aW9ucztcclxuICB9XHJcbn1cclxuIl19
