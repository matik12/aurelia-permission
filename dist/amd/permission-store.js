define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PermissionStore = (function () {
        function PermissionStore() {
            this.permissionDefinitions = [];
        }
        PermissionStore.prototype.useDefaultDefinition = function (permissions) {
            this.defaultDefinition = PermissionStore.DefaultDefinition(permissions);
        };
        PermissionStore.prototype.definePermission = function (permission, definition) {
            var _this = this;
            var definitions = this.permissionDefinitions.filter(function (pd) { return pd.permission === permission; });
            if (definitions.length > 0) {
                throw Error("Cannot provide multiple definitions for the same permission: " + permission + "!");
            }
            var defaultPermissionDefinition = this.defaultDefinition ? function () { return _this.defaultDefinition(permission); } : null;
            definition = definition || defaultPermissionDefinition;
            if (!definition) {
                throw Error("Configure store to use default definition function or provide it as parameter!");
            }
            this.permissionDefinitions.push({
                permission: permission,
                definition: definition
            });
        };
        PermissionStore.prototype.definePermissions = function (permissions, definition) {
            var _this = this;
            permissions.forEach(function (permission) {
                var permissionDefinition = definition ? function () { return definition(permission); } : null;
                _this.definePermission(permission, permissionDefinition);
            });
        };
        PermissionStore.prototype.definePermissionObject = function (permissionObject, definition) {
            this.permissionObject = permissionObject;
            var permissions = Object.getOwnPropertyNames(permissionObject).map(function (permission) { return permissionObject[permission]; });
            this.definePermissions(permissions, definition);
        };
        PermissionStore.prototype.getDefinition = function (permission) {
            var permissionDefinition = this.permissionDefinitions.find(function (rd) { return rd.permission === permission; });
            return permissionDefinition ? permissionDefinition.definition : null;
        };
        PermissionStore.prototype.getPermissionName = function (permission) {
            return this.permissionObject ?
                this.permissionObject[permission] :
                permission;
        };
        PermissionStore.DefaultDefinition = function (permissions) {
            return function (permission) { return permissions.includes(permission); };
        };
        return PermissionStore;
    }());
    exports.default = PermissionStore;
});
