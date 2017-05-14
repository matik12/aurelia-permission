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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFxQixnQkFBZ0I7UUFDbkMsMEJBQW9CLGdCQUFrQztZQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQUksQ0FBQztRQUUzRCx1Q0FBWSxHQUFaO1lBQUEsaUJBaUJDO1lBakJZLHFCQUF3QjtpQkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO2dCQUF4QixnQ0FBd0I7O1lBQ25DLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxJQUFNLHFCQUFxQixHQUFtQixLQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBR3pGLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQztvQkFDVixNQUFNLENBQUM7Z0JBQ1QsQ0FBQztnQkFJRCxlQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUM3QyxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLGNBQU0sT0FBQSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxFQUFuRSxDQUFtRSxDQUMxRSxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRU8sbURBQXdCLEdBQWhDLFVBQWlDLHdCQUFrQztZQUFuRSxpQkFZQztZQVhDLElBQU0scUJBQXFCLEdBQW1CLEVBQUUsQ0FBQztZQUVqRCx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO2dCQUN6QyxJQUFNLG9CQUFvQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRTdFLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztvQkFDekIscUJBQXFCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztnQkFDckQsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLHFCQUFxQixDQUFDO1FBQy9CLENBQUM7UUFDSCx1QkFBQztJQUFELENBbkNBLEFBbUNDLElBQUE7SUFuQ29CLGdCQUFnQjtRQURwQyx5Q0FBVSxFQUFFO3lDQUUyQiwwQkFBZ0I7T0FEbkMsZ0JBQWdCLENBbUNwQztzQkFuQ29CLGdCQUFnQiIsImZpbGUiOiJhdXRob3JpemUtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0ICogYXMgUHJvbWlzZUV4dGVuZGVkIGZyb20gJ2JsdWViaXJkJztcclxuXHJcbmltcG9ydCBQZXJtaXNzaW9uc1N0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvbnNTdG9yZTogUGVybWlzc2lvbnNTdG9yZSkgeyB9XHJcblxyXG4gIGlzQXV0aG9yaXplZCguLi5wZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBQcm9taXNlPGFueT5bXSA9IHRoaXMuZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKHBlcm1pc3Npb25zKTtcclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIG5vIGRlZmluaXRpb25zIHByb3ZpZGVkIGZvciBwZXJtaXNzaW9uc1xyXG4gICAgICBpZiAocGVybWlzc2lvbkRlZmluaXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF1dGhvcml6ZSB3aGVuIGFueSBvZiBwZXJtaXNzaW9uIGRlZmluaXRpb24gcHJvbWlzZXMgaGFzIGJlZW4gcmVzb2x2ZWQgb3JcclxuICAgICAgLy8gTm90IGF1dGhvcml6ZSBpZiBhbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZFxyXG4gICAgICBQcm9taXNlRXh0ZW5kZWQuYW55KHBlcm1pc3Npb25EZWZpbml0aW9ucykudGhlbihcclxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXHJcbiAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignVXNlciBoYXMgbm9uZSBvZiByZXF1aXJlZCBwZXJtaXNzaW9ucyBhc3NpZ25lZCcpKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBlcm1pc3Npb25EZWZpbml0aW9ucyhvbmx5QXV0aG9yaXplUGVybWlzc2lvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+W10ge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBQcm9taXNlPGFueT5bXSA9IFtdO1xyXG5cclxuICAgIG9ubHlBdXRob3JpemVQZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbiA9IHRoaXMucGVybWlzc2lvbnNTdG9yZS5nZXREZWZpbml0aW9uKHBlcm1pc3Npb24pO1xyXG5cclxuICAgICAgaWYgKHBlcm1pc3Npb25EZWZpbml0aW9uKSB7XHJcbiAgICAgICAgcGVybWlzc2lvbkRlZmluaXRpb25zLnB1c2gocGVybWlzc2lvbkRlZmluaXRpb24oKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwZXJtaXNzaW9uRGVmaW5pdGlvbnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==
