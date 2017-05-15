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
var permission_store_1 = require("./permission-store");
var AuthorizeService = (function () {
    function AuthorizeService(permissionStore) {
        this.permissionStore = permissionStore;
    }
    AuthorizeService.prototype.isAuthorized = function () {
        var permissions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            permissions[_i] = arguments[_i];
        }
        var permissionDefinitions = this.getPermissionDefinitions(permissions);
        var noDefinitionsSet = permissionDefinitions.length === 0;
        var anyPermissionDefinitionIsTrue = permissionDefinitions.includes(true);
        if (noDefinitionsSet || anyPermissionDefinitionIsTrue) {
            return true;
        }
        return false;
    };
    AuthorizeService.prototype.getPermissionDefinitions = function (onlyAuthorizePermissions) {
        var _this = this;
        var permissionDefinitions = [];
        onlyAuthorizePermissions.forEach(function (permission) {
            var permissionDefinition = _this.permissionStore.getDefinition(permission);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZFQUEwRDtBQUUxRCx1REFBaUQ7QUFHakQsSUFBcUIsZ0JBQWdCO0lBQ25DLDBCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRXpELHVDQUFZLEdBQVo7UUFBYSxxQkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLGdDQUF3Qjs7UUFDbkMsSUFBTSxxQkFBcUIsR0FBYyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEYsSUFBTSxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQU0sNkJBQTZCLEdBQVMscUJBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxGLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLDZCQUE2QixDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sbURBQXdCLEdBQWhDLFVBQWlDLHdCQUFrQztRQUFuRSxpQkFZQztRQVhDLElBQU0scUJBQXFCLEdBQWMsRUFBRSxDQUFDO1FBRTVDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7WUFDekMsSUFBTSxvQkFBb0IsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUU1RSxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFDSCx1QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1Qm9CLGdCQUFnQjtJQURwQyx5Q0FBVSxFQUFFO3FDQUUwQiwwQkFBZTtHQURqQyxnQkFBZ0IsQ0E0QnBDO2tCQTVCb0IsZ0JBQWdCIiwiZmlsZSI6ImF1dGhvcml6ZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5cclxuaW1wb3J0IFBlcm1pc3Npb25TdG9yZSBmcm9tICcuL3Blcm1pc3Npb24tc3RvcmUnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlKSB7IH1cclxuXHJcbiAgaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBib29sZWFuW10gPSB0aGlzLmdldFBlcm1pc3Npb25EZWZpbml0aW9ucyhwZXJtaXNzaW9ucyk7XHJcbiAgICBjb25zdCBub0RlZmluaXRpb25zU2V0ID0gcGVybWlzc2lvbkRlZmluaXRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIGNvbnN0IGFueVBlcm1pc3Npb25EZWZpbml0aW9uSXNUcnVlID0gKDxhbnk+cGVybWlzc2lvbkRlZmluaXRpb25zKS5pbmNsdWRlcyh0cnVlKTtcclxuXHJcbiAgICBpZiAobm9EZWZpbml0aW9uc1NldCB8fCBhbnlQZXJtaXNzaW9uRGVmaW5pdGlvbklzVHJ1ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBlcm1pc3Npb25EZWZpbml0aW9ucyhvbmx5QXV0aG9yaXplUGVybWlzc2lvbnM6IHN0cmluZ1tdKTogYm9vbGVhbltdIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uczogYm9vbGVhbltdID0gW107XHJcblxyXG4gICAgb25seUF1dGhvcml6ZVBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uID0gdGhpcy5wZXJtaXNzaW9uU3RvcmUuZ2V0RGVmaW5pdGlvbihwZXJtaXNzaW9uKTtcclxuXHJcbiAgICAgIGlmIChwZXJtaXNzaW9uRGVmaW5pdGlvbikge1xyXG4gICAgICAgIHBlcm1pc3Npb25EZWZpbml0aW9ucy5wdXNoKHBlcm1pc3Npb25EZWZpbml0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGVybWlzc2lvbkRlZmluaXRpb25zO1xyXG4gIH1cclxufVxyXG4iXX0=
