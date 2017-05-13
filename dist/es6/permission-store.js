System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PermissionStore;
    return {
        setters: [],
        execute: function () {
            PermissionStore = (function () {
                function PermissionStore() {
                    this.permissionDefinitions = [];
                }
                PermissionStore.prototype.definePermission = function (permission, definition) {
                    var definitions = this.permissionDefinitions.filter(function (rd) { return rd.permission === permission; });
                    if (definitions.length > 0) {
                        throw Error("Cannot provide multiple definitions for the same permission: " + permission + "!");
                    }
                    this.permissionDefinitions.push({
                        permission: permission,
                        definition: definition
                    });
                };
                PermissionStore.prototype.definePermissions = function (permissions, definition) {
                    var _this = this;
                    permissions.forEach(function (permission) { return _this.definePermission(permission, function () { return definition(permission); }); });
                };
                PermissionStore.prototype.getDefinition = function (permission) {
                    var definitions = this.permissionDefinitions.filter(function (rd) { return rd.permission === permission; });
                    return definitions.length > 0 ? definitions[0].definition : null;
                };
                return PermissionStore;
            }());
            exports_1("default", PermissionStore);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFLQTtnQkFBQTtvQkFDVSwwQkFBcUIsR0FBMkIsRUFBRSxDQUFDO2dCQXdCN0QsQ0FBQztnQkF0QkMsMENBQWdCLEdBQWhCLFVBQWlCLFVBQWtCLEVBQUUsVUFBOEI7b0JBQ2pFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO29CQUUxRixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE1BQU0sS0FBSyxDQUFDLGtFQUFnRSxVQUFVLE1BQUcsQ0FBQyxDQUFDO29CQUM3RixDQUFDO29CQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7d0JBQzlCLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixVQUFVLEVBQUUsVUFBVTtxQkFDdkIsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsMkNBQWlCLEdBQWpCLFVBQWtCLFdBQXFCLEVBQUUsVUFBZ0Q7b0JBQXpGLGlCQUVDO29CQURDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQXRCLENBQXNCLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDO2dCQUNyRyxDQUFDO2dCQUVELHVDQUFhLEdBQWIsVUFBYyxVQUFrQjtvQkFDOUIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7b0JBRTFGLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbkUsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7O1FBQ0QsQ0FBQyIsImZpbGUiOiJwZXJtaXNzaW9uLXN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uRGVmaW5pdGlvbiB7XHJcbiAgcGVybWlzc2lvbjogc3RyaW5nO1xyXG4gIGRlZmluaXRpb246ICgpID0+IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVybWlzc2lvblN0b3JlIHtcclxuICBwcml2YXRlIHBlcm1pc3Npb25EZWZpbml0aW9uczogUGVybWlzc2lvbkRlZmluaXRpb25bXSA9IFtdO1xyXG5cclxuICBkZWZpbmVQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZywgZGVmaW5pdGlvbjogKCkgPT4gUHJvbWlzZTxhbnk+KSB7XHJcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMucGVybWlzc2lvbkRlZmluaXRpb25zLmZpbHRlcihyZCA9PiByZC5wZXJtaXNzaW9uID09PSBwZXJtaXNzaW9uKTtcclxuXHJcbiAgICBpZiAoZGVmaW5pdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHByb3ZpZGUgbXVsdGlwbGUgZGVmaW5pdGlvbnMgZm9yIHRoZSBzYW1lIHBlcm1pc3Npb246ICR7cGVybWlzc2lvbn0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wZXJtaXNzaW9uRGVmaW5pdGlvbnMucHVzaCh7XHJcbiAgICAgIHBlcm1pc3Npb246IHBlcm1pc3Npb24sXHJcbiAgICAgIGRlZmluaXRpb246IGRlZmluaXRpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVmaW5lUGVybWlzc2lvbnMocGVybWlzc2lvbnM6IHN0cmluZ1tdLCBkZWZpbml0aW9uOiAocGVybWlzc2lvbjogc3RyaW5nKSA9PiBQcm9taXNlPGFueT4pIHtcclxuICAgIHBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB0aGlzLmRlZmluZVBlcm1pc3Npb24ocGVybWlzc2lvbiwgKCkgPT4gZGVmaW5pdGlvbihwZXJtaXNzaW9uKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmaW5pdGlvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiAoKSA9PiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLnBlcm1pc3Npb25EZWZpbml0aW9ucy5maWx0ZXIocmQgPT4gcmQucGVybWlzc2lvbiA9PT0gcGVybWlzc2lvbik7XHJcblxyXG4gICAgcmV0dXJuIGRlZmluaXRpb25zLmxlbmd0aCA+IDAgPyBkZWZpbml0aW9uc1swXS5kZWZpbml0aW9uIDogbnVsbDtcclxuICB9XHJcbn1cclxuIl19
