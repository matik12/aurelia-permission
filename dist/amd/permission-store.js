define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PermissionStore = (function () {
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
    exports.default = PermissionStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBQUE7WUFDVSwwQkFBcUIsR0FBMkIsRUFBRSxDQUFDO1FBd0I3RCxDQUFDO1FBdEJDLDBDQUFnQixHQUFoQixVQUFpQixVQUFrQixFQUFFLFVBQThCO1lBQ2pFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1lBRTFGLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxLQUFLLENBQUMsa0VBQWdFLFVBQVUsTUFBRyxDQUFDLENBQUM7WUFDN0YsQ0FBQztZQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixVQUFVLEVBQUUsVUFBVTthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsMkNBQWlCLEdBQWpCLFVBQWtCLFdBQXFCLEVBQUUsVUFBZ0Q7WUFBekYsaUJBRUM7WUFEQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUF0QixDQUFzQixDQUFDLEVBQS9ELENBQStELENBQUMsQ0FBQztRQUNyRyxDQUFDO1FBRUQsdUNBQWEsR0FBYixVQUFjLFVBQWtCO1lBQzlCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1lBRTFGLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNuRSxDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQXpCQSxBQXlCQyxJQUFBIiwiZmlsZSI6InBlcm1pc3Npb24tc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25EZWZpbml0aW9uIHtcclxuICBwZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgZGVmaW5pdGlvbjogKCkgPT4gUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJtaXNzaW9uU3RvcmUge1xyXG4gIHByaXZhdGUgcGVybWlzc2lvbkRlZmluaXRpb25zOiBQZXJtaXNzaW9uRGVmaW5pdGlvbltdID0gW107XHJcblxyXG4gIGRlZmluZVBlcm1pc3Npb24ocGVybWlzc2lvbjogc3RyaW5nLCBkZWZpbml0aW9uOiAoKSA9PiBQcm9taXNlPGFueT4pIHtcclxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5wZXJtaXNzaW9uRGVmaW5pdGlvbnMuZmlsdGVyKHJkID0+IHJkLnBlcm1pc3Npb24gPT09IHBlcm1pc3Npb24pO1xyXG5cclxuICAgIGlmIChkZWZpbml0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcHJvdmlkZSBtdWx0aXBsZSBkZWZpbml0aW9ucyBmb3IgdGhlIHNhbWUgcGVybWlzc2lvbjogJHtwZXJtaXNzaW9ufSFgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBlcm1pc3Npb25EZWZpbml0aW9ucy5wdXNoKHtcclxuICAgICAgcGVybWlzc2lvbjogcGVybWlzc2lvbixcclxuICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogc3RyaW5nW10sIGRlZmluaXRpb246IChwZXJtaXNzaW9uOiBzdHJpbmcpID0+IFByb21pc2U8YW55Pikge1xyXG4gICAgcGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHRoaXMuZGVmaW5lUGVybWlzc2lvbihwZXJtaXNzaW9uLCAoKSA9PiBkZWZpbml0aW9uKHBlcm1pc3Npb24pKSk7XHJcbiAgfVxyXG5cclxuICBnZXREZWZpbml0aW9uKHBlcm1pc3Npb246IHN0cmluZyk6ICgpID0+IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMucGVybWlzc2lvbkRlZmluaXRpb25zLmZpbHRlcihyZCA9PiByZC5wZXJtaXNzaW9uID09PSBwZXJtaXNzaW9uKTtcclxuXHJcbiAgICByZXR1cm4gZGVmaW5pdGlvbnMubGVuZ3RoID4gMCA/IGRlZmluaXRpb25zWzBdLmRlZmluaXRpb24gOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=
