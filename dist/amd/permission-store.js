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
        return PermissionStore;
    }());
    PermissionStore.DefaultDefinition = function (permissions) {
        return function (permission) { return permissions.includes(permission); };
    };
    exports.default = PermissionStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBQUE7WUFNVSwwQkFBcUIsR0FBMkIsRUFBRSxDQUFDO1FBdUQ3RCxDQUFDO1FBbERDLDhDQUFvQixHQUFwQixVQUFxQixXQUFxQjtZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsVUFBa0IsRUFBRSxVQUEwQjtZQUEvRCxpQkFrQkM7WUFqQkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7WUFFMUYsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLEtBQUssQ0FBQyxrRUFBZ0UsVUFBVSxNQUFHLENBQUMsQ0FBQztZQUM3RixDQUFDO1lBRUQsSUFBTSwyQkFBMkIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBbEMsQ0FBa0MsR0FBRyxJQUFJLENBQUM7WUFDN0csVUFBVSxHQUFHLFVBQVUsSUFBSSwyQkFBMkIsQ0FBQztZQUV2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixVQUFVLEVBQUUsVUFBVTthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsMkNBQWlCLEdBQWpCLFVBQWtCLFdBQXFCLEVBQUUsVUFBNEM7WUFBckYsaUJBTUM7WUFMQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtnQkFDNUIsSUFBTSxvQkFBb0IsR0FBRyxVQUFVLEdBQUcsY0FBTSxPQUFBLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBdEIsQ0FBc0IsR0FBRyxJQUFJLENBQUM7Z0JBRTlFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxnREFBc0IsR0FBdEIsVUFBdUIsZ0JBQXFCLEVBQUUsVUFBNEM7WUFDeEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1lBQ3pDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7WUFFakgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsdUNBQWEsR0FBYixVQUFjLFVBQWtCO1lBQzlCLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7WUFFakcsTUFBTSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkUsQ0FBQztRQUVELDJDQUFpQixHQUFqQixVQUFrQixVQUFrQjtZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztnQkFDakMsVUFBVSxDQUFDO1FBQ2YsQ0FBQztRQUNILHNCQUFDO0lBQUQsQ0E3REEsQUE2REM7SUEzRFEsaUNBQWlCLEdBQUcsVUFBQyxXQUFxQjtRQUMvQyxNQUFNLENBQUMsVUFBQyxVQUFrQixJQUFLLE9BQU0sV0FBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQztJQUN6RSxDQUFDLENBQUEiLCJmaWxlIjoicGVybWlzc2lvbi1zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkRlZmluaXRpb24ge1xyXG4gIHBlcm1pc3Npb246IHN0cmluZztcclxuICBkZWZpbml0aW9uOiAoKSA9PiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJtaXNzaW9uU3RvcmUge1xyXG5cclxuICBzdGF0aWMgRGVmYXVsdERlZmluaXRpb24gPSAocGVybWlzc2lvbnM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICByZXR1cm4gKHBlcm1pc3Npb246IHN0cmluZykgPT4gKDxhbnk+cGVybWlzc2lvbnMpLmluY2x1ZGVzKHBlcm1pc3Npb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IFBlcm1pc3Npb25EZWZpbml0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIGRlZmF1bHREZWZpbml0aW9uOiAocGVybWlzc2lvbjogc3RyaW5nKSA9PiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHBlcm1pc3Npb25PYmplY3Q6IGFueTtcclxuXHJcbiAgdXNlRGVmYXVsdERlZmluaXRpb24ocGVybWlzc2lvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmRlZmF1bHREZWZpbml0aW9uID0gUGVybWlzc2lvblN0b3JlLkRlZmF1bHREZWZpbml0aW9uKHBlcm1pc3Npb25zKTtcclxuICB9XHJcblxyXG4gIGRlZmluZVBlcm1pc3Npb24ocGVybWlzc2lvbjogc3RyaW5nLCBkZWZpbml0aW9uPzogKCkgPT4gYm9vbGVhbikge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLnBlcm1pc3Npb25EZWZpbml0aW9ucy5maWx0ZXIocGQgPT4gcGQucGVybWlzc2lvbiA9PT0gcGVybWlzc2lvbik7XHJcblxyXG4gICAgaWYgKGRlZmluaXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBwcm92aWRlIG11bHRpcGxlIGRlZmluaXRpb25zIGZvciB0aGUgc2FtZSBwZXJtaXNzaW9uOiAke3Blcm1pc3Npb259IWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRQZXJtaXNzaW9uRGVmaW5pdGlvbiA9IHRoaXMuZGVmYXVsdERlZmluaXRpb24gPyAoKSA9PiB0aGlzLmRlZmF1bHREZWZpbml0aW9uKHBlcm1pc3Npb24pIDogbnVsbDtcclxuICAgIGRlZmluaXRpb24gPSBkZWZpbml0aW9uIHx8IGRlZmF1bHRQZXJtaXNzaW9uRGVmaW5pdGlvbjtcclxuXHJcbiAgICBpZiAoIWRlZmluaXRpb24pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYENvbmZpZ3VyZSBzdG9yZSB0byB1c2UgZGVmYXVsdCBkZWZpbml0aW9uIGZ1bmN0aW9uIG9yIHByb3ZpZGUgaXQgYXMgcGFyYW1ldGVyIWApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGVybWlzc2lvbkRlZmluaXRpb25zLnB1c2goe1xyXG4gICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uLFxyXG4gICAgICBkZWZpbml0aW9uOiBkZWZpbml0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlZmluZVBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSwgZGVmaW5pdGlvbj86IChwZXJtaXNzaW9uOiBzdHJpbmcpID0+IGJvb2xlYW4pIHtcclxuICAgIHBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25EZWZpbml0aW9uID0gZGVmaW5pdGlvbiA/ICgpID0+IGRlZmluaXRpb24ocGVybWlzc2lvbikgOiBudWxsO1xyXG5cclxuICAgICAgdGhpcy5kZWZpbmVQZXJtaXNzaW9uKHBlcm1pc3Npb24sIHBlcm1pc3Npb25EZWZpbml0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVmaW5lUGVybWlzc2lvbk9iamVjdChwZXJtaXNzaW9uT2JqZWN0OiBhbnksIGRlZmluaXRpb24/OiAocGVybWlzc2lvbjogc3RyaW5nKSA9PiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnBlcm1pc3Npb25PYmplY3QgPSBwZXJtaXNzaW9uT2JqZWN0O1xyXG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwZXJtaXNzaW9uT2JqZWN0KS5tYXAocGVybWlzc2lvbiA9PiBwZXJtaXNzaW9uT2JqZWN0W3Blcm1pc3Npb25dKTtcclxuXHJcbiAgICB0aGlzLmRlZmluZVBlcm1pc3Npb25zKHBlcm1pc3Npb25zLCBkZWZpbml0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldERlZmluaXRpb24ocGVybWlzc2lvbjogc3RyaW5nKTogKCkgPT4gYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbiA9IHRoaXMucGVybWlzc2lvbkRlZmluaXRpb25zLmZpbmQocmQgPT4gcmQucGVybWlzc2lvbiA9PT0gcGVybWlzc2lvbik7XHJcblxyXG4gICAgcmV0dXJuIHBlcm1pc3Npb25EZWZpbml0aW9uID8gcGVybWlzc2lvbkRlZmluaXRpb24uZGVmaW5pdGlvbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRQZXJtaXNzaW9uTmFtZShwZXJtaXNzaW9uOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnBlcm1pc3Npb25PYmplY3QgP1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25PYmplY3RbcGVybWlzc2lvbl0gOlxyXG4gICAgICBwZXJtaXNzaW9uO1xyXG4gIH1cclxufVxyXG4iXX0=
