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
    AuthorizationService.prototype.isAuthorizedByPermissionName = function (permissionNames) {
        var _this = this;
        var permissions = permissionNames.map(function (permission) { return _this.permissionStore.getPermissionName(permission); });
        return this.isAuthorized.apply(this, permissions);
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
    AuthorizationService = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [permission_store_1.default])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.default = AuthorizationService;
