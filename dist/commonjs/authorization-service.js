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
var AuthorizationService = (function () {
    function AuthorizationService(permissionStore) {
        this.permissionStore = permissionStore;
    }
    AuthorizationService.prototype.isAuthorized = function () {
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
    AuthorizationService.prototype.getPermissionDefinitions = function (onlyAuthorizePermissions) {
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
    return AuthorizationService;
}());
AuthorizationService = __decorate([
    aurelia_dependency_injection_1.autoinject(),
    __metadata("design:paramtypes", [permission_store_1.default])
], AuthorizationService);
exports.default = AuthorizationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemF0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2RUFBMEQ7QUFFMUQsdURBQWlEO0FBR2pELElBQXFCLG9CQUFvQjtJQUN2Qyw4QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUksQ0FBQztJQUV6RCwyQ0FBWSxHQUFaO1FBQWEscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQ25DLElBQU0scUJBQXFCLEdBQWMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BGLElBQU0sZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFNLDZCQUE2QixHQUFTLHFCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLHVEQUF3QixHQUFoQyxVQUFpQyx3QkFBa0M7UUFBbkUsaUJBWUM7UUFYQyxJQUFNLHFCQUFxQixHQUFjLEVBQUUsQ0FBQztRQUU1Qyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO1lBQ3pDLElBQU0sb0JBQW9CLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFNUUsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJvQixvQkFBb0I7SUFEeEMseUNBQVUsRUFBRTtxQ0FFMEIsMEJBQWU7R0FEakMsb0JBQW9CLENBNEJ4QztrQkE1Qm9CLG9CQUFvQiIsImZpbGUiOiJhdXRob3JpemF0aW9uLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcblxyXG5pbXBvcnQgUGVybWlzc2lvblN0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6YXRpb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlKSB7IH1cclxuXHJcbiAgaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBib29sZWFuW10gPSB0aGlzLmdldFBlcm1pc3Npb25EZWZpbml0aW9ucyhwZXJtaXNzaW9ucyk7XHJcbiAgICBjb25zdCBub0RlZmluaXRpb25zU2V0ID0gcGVybWlzc2lvbkRlZmluaXRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIGNvbnN0IGFueVBlcm1pc3Npb25EZWZpbml0aW9uSXNUcnVlID0gKDxhbnk+cGVybWlzc2lvbkRlZmluaXRpb25zKS5pbmNsdWRlcyh0cnVlKTtcclxuXHJcbiAgICBpZiAobm9EZWZpbml0aW9uc1NldCB8fCBhbnlQZXJtaXNzaW9uRGVmaW5pdGlvbklzVHJ1ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBlcm1pc3Npb25EZWZpbml0aW9ucyhvbmx5QXV0aG9yaXplUGVybWlzc2lvbnM6IHN0cmluZ1tdKTogYm9vbGVhbltdIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uczogYm9vbGVhbltdID0gW107XHJcblxyXG4gICAgb25seUF1dGhvcml6ZVBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uID0gdGhpcy5wZXJtaXNzaW9uU3RvcmUuZ2V0RGVmaW5pdGlvbihwZXJtaXNzaW9uKTtcclxuXHJcbiAgICAgIGlmIChwZXJtaXNzaW9uRGVmaW5pdGlvbikge1xyXG4gICAgICAgIHBlcm1pc3Npb25EZWZpbml0aW9ucy5wdXNoKHBlcm1pc3Npb25EZWZpbml0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGVybWlzc2lvbkRlZmluaXRpb25zO1xyXG4gIH1cclxufVxyXG4iXX0=
