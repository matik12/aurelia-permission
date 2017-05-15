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
            exports_1("default", PermissionStore);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFLQTtnQkFBQTtvQkFNVSwwQkFBcUIsR0FBMkIsRUFBRSxDQUFDO2dCQXVEN0QsQ0FBQztnQkFsREMsOENBQW9CLEdBQXBCLFVBQXFCLFdBQXFCO29CQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRSxDQUFDO2dCQUVELDBDQUFnQixHQUFoQixVQUFpQixVQUFrQixFQUFFLFVBQTBCO29CQUEvRCxpQkFrQkM7b0JBakJDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO29CQUUxRixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE1BQU0sS0FBSyxDQUFDLGtFQUFnRSxVQUFVLE1BQUcsQ0FBQyxDQUFDO29CQUM3RixDQUFDO29CQUVELElBQU0sMkJBQTJCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQWxDLENBQWtDLEdBQUcsSUFBSSxDQUFDO29CQUM3RyxVQUFVLEdBQUcsVUFBVSxJQUFJLDJCQUEyQixDQUFDO29CQUV2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUM7b0JBQ2hHLENBQUM7b0JBRUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQzt3QkFDOUIsVUFBVSxFQUFFLFVBQVU7d0JBQ3RCLFVBQVUsRUFBRSxVQUFVO3FCQUN2QixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwyQ0FBaUIsR0FBakIsVUFBa0IsV0FBcUIsRUFBRSxVQUE0QztvQkFBckYsaUJBTUM7b0JBTEMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7d0JBQzVCLElBQU0sb0JBQW9CLEdBQUcsVUFBVSxHQUFHLGNBQU0sT0FBQSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQXRCLENBQXNCLEdBQUcsSUFBSSxDQUFDO3dCQUU5RSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLENBQUM7b0JBQzFELENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsZ0RBQXNCLEdBQXRCLFVBQXVCLGdCQUFxQixFQUFFLFVBQTRDO29CQUN4RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ3pDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7b0JBRWpILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBRUQsdUNBQWEsR0FBYixVQUFjLFVBQWtCO29CQUM5QixJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO29CQUVqRyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkUsQ0FBQztnQkFFRCwyQ0FBaUIsR0FBakIsVUFBa0IsVUFBa0I7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO3dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxVQUFVLENBQUM7Z0JBQ2YsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBN0RBLEFBNkRDLElBQUE7WUEzRFEsaUNBQWlCLEdBQUcsVUFBQyxXQUFxQjtnQkFDL0MsTUFBTSxDQUFDLFVBQUMsVUFBa0IsSUFBSyxPQUFNLFdBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQXZDLENBQXVDLENBQUM7WUFDekUsQ0FBQyxDQUFBOztRQTBESCxDQUFDIiwiZmlsZSI6InBlcm1pc3Npb24tc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25EZWZpbml0aW9uIHtcclxuICBwZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgZGVmaW5pdGlvbjogKCkgPT4gYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVybWlzc2lvblN0b3JlIHtcclxuXHJcbiAgc3RhdGljIERlZmF1bHREZWZpbml0aW9uID0gKHBlcm1pc3Npb25zOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgcmV0dXJuIChwZXJtaXNzaW9uOiBzdHJpbmcpID0+ICg8YW55PnBlcm1pc3Npb25zKS5pbmNsdWRlcyhwZXJtaXNzaW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGVybWlzc2lvbkRlZmluaXRpb25zOiBQZXJtaXNzaW9uRGVmaW5pdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBkZWZhdWx0RGVmaW5pdGlvbjogKHBlcm1pc3Npb246IHN0cmluZykgPT4gYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uT2JqZWN0OiBhbnk7XHJcblxyXG4gIHVzZURlZmF1bHREZWZpbml0aW9uKHBlcm1pc3Npb25zOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kZWZhdWx0RGVmaW5pdGlvbiA9IFBlcm1pc3Npb25TdG9yZS5EZWZhdWx0RGVmaW5pdGlvbihwZXJtaXNzaW9ucyk7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZywgZGVmaW5pdGlvbj86ICgpID0+IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5wZXJtaXNzaW9uRGVmaW5pdGlvbnMuZmlsdGVyKHBkID0+IHBkLnBlcm1pc3Npb24gPT09IHBlcm1pc3Npb24pO1xyXG5cclxuICAgIGlmIChkZWZpbml0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcHJvdmlkZSBtdWx0aXBsZSBkZWZpbml0aW9ucyBmb3IgdGhlIHNhbWUgcGVybWlzc2lvbjogJHtwZXJtaXNzaW9ufSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWZhdWx0UGVybWlzc2lvbkRlZmluaXRpb24gPSB0aGlzLmRlZmF1bHREZWZpbml0aW9uID8gKCkgPT4gdGhpcy5kZWZhdWx0RGVmaW5pdGlvbihwZXJtaXNzaW9uKSA6IG51bGw7XHJcbiAgICBkZWZpbml0aW9uID0gZGVmaW5pdGlvbiB8fCBkZWZhdWx0UGVybWlzc2lvbkRlZmluaXRpb247XHJcblxyXG4gICAgaWYgKCFkZWZpbml0aW9uKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBDb25maWd1cmUgc3RvcmUgdG8gdXNlIGRlZmF1bHQgZGVmaW5pdGlvbiBmdW5jdGlvbiBvciBwcm92aWRlIGl0IGFzIHBhcmFtZXRlciFgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBlcm1pc3Npb25EZWZpbml0aW9ucy5wdXNoKHtcclxuICAgICAgcGVybWlzc2lvbjogcGVybWlzc2lvbixcclxuICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogc3RyaW5nW10sIGRlZmluaXRpb24/OiAocGVybWlzc2lvbjogc3RyaW5nKSA9PiBib29sZWFuKSB7XHJcbiAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbiA9IGRlZmluaXRpb24gPyAoKSA9PiBkZWZpbml0aW9uKHBlcm1pc3Npb24pIDogbnVsbDtcclxuXHJcbiAgICAgIHRoaXMuZGVmaW5lUGVybWlzc2lvbihwZXJtaXNzaW9uLCBwZXJtaXNzaW9uRGVmaW5pdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlZmluZVBlcm1pc3Npb25PYmplY3QocGVybWlzc2lvbk9iamVjdDogYW55LCBkZWZpbml0aW9uPzogKHBlcm1pc3Npb246IHN0cmluZykgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5wZXJtaXNzaW9uT2JqZWN0ID0gcGVybWlzc2lvbk9iamVjdDtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocGVybWlzc2lvbk9iamVjdCkubWFwKHBlcm1pc3Npb24gPT4gcGVybWlzc2lvbk9iamVjdFtwZXJtaXNzaW9uXSk7XHJcblxyXG4gICAgdGhpcy5kZWZpbmVQZXJtaXNzaW9ucyhwZXJtaXNzaW9ucywgZGVmaW5pdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXREZWZpbml0aW9uKHBlcm1pc3Npb246IHN0cmluZyk6ICgpID0+IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb24gPSB0aGlzLnBlcm1pc3Npb25EZWZpbml0aW9ucy5maW5kKHJkID0+IHJkLnBlcm1pc3Npb24gPT09IHBlcm1pc3Npb24pO1xyXG5cclxuICAgIHJldHVybiBwZXJtaXNzaW9uRGVmaW5pdGlvbiA/IHBlcm1pc3Npb25EZWZpbml0aW9uLmRlZmluaXRpb24gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGVybWlzc2lvbk5hbWUocGVybWlzc2lvbjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9uT2JqZWN0ID9cclxuICAgICAgdGhpcy5wZXJtaXNzaW9uT2JqZWN0W3Blcm1pc3Npb25dIDpcclxuICAgICAgcGVybWlzc2lvbjtcclxuICB9XHJcbn1cclxuIl19
