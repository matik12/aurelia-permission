"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermissionStore = (function () {
    function PermissionStore() {
        this.permissionDefinitions = [];
    }
    PermissionStore.prototype.definePermission = function (permission, definition) {
        var definitions = this.permissionDefinitions.filter(function (pd) { return pd.permission === permission; });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7SUFBQTtRQUNVLDBCQUFxQixHQUEyQixFQUFFLENBQUM7SUF3QjdELENBQUM7SUF0QkMsMENBQWdCLEdBQWhCLFVBQWlCLFVBQWtCLEVBQUUsVUFBOEI7UUFDakUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFFMUYsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sS0FBSyxDQUFDLGtFQUFnRSxVQUFVLE1BQUcsQ0FBQyxDQUFDO1FBQzdGLENBQUM7UUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBaUIsR0FBakIsVUFBa0IsV0FBcUIsRUFBRSxVQUFnRDtRQUF6RixpQkFFQztRQURDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQXRCLENBQXNCLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFFMUYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ25FLENBQUM7SUFDSCxzQkFBQztBQUFELENBekJBLEFBeUJDLElBQUEiLCJmaWxlIjoicGVybWlzc2lvbi1zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkRlZmluaXRpb24ge1xyXG4gIHBlcm1pc3Npb246IHN0cmluZztcclxuICBkZWZpbml0aW9uOiAoKSA9PiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcm1pc3Npb25TdG9yZSB7XHJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IFBlcm1pc3Npb25EZWZpbml0aW9uW10gPSBbXTtcclxuXHJcbiAgZGVmaW5lUGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcsIGRlZmluaXRpb246ICgpID0+IFByb21pc2U8YW55Pikge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLnBlcm1pc3Npb25EZWZpbml0aW9ucy5maWx0ZXIocGQgPT4gcGQucGVybWlzc2lvbiA9PT0gcGVybWlzc2lvbik7XHJcblxyXG4gICAgaWYgKGRlZmluaXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBwcm92aWRlIG11bHRpcGxlIGRlZmluaXRpb25zIGZvciB0aGUgc2FtZSBwZXJtaXNzaW9uOiAke3Blcm1pc3Npb259IWApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGVybWlzc2lvbkRlZmluaXRpb25zLnB1c2goe1xyXG4gICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uLFxyXG4gICAgICBkZWZpbml0aW9uOiBkZWZpbml0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlZmluZVBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSwgZGVmaW5pdGlvbjogKHBlcm1pc3Npb246IHN0cmluZykgPT4gUHJvbWlzZTxhbnk+KSB7XHJcbiAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4gdGhpcy5kZWZpbmVQZXJtaXNzaW9uKHBlcm1pc3Npb24sICgpID0+IGRlZmluaXRpb24ocGVybWlzc2lvbikpKTtcclxuICB9XHJcblxyXG4gIGdldERlZmluaXRpb24ocGVybWlzc2lvbjogc3RyaW5nKTogKCkgPT4gUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5wZXJtaXNzaW9uRGVmaW5pdGlvbnMuZmlsdGVyKHJkID0+IHJkLnBlcm1pc3Npb24gPT09IHBlcm1pc3Npb24pO1xyXG5cclxuICAgIHJldHVybiBkZWZpbml0aW9ucy5sZW5ndGggPiAwID8gZGVmaW5pdGlvbnNbMF0uZGVmaW5pdGlvbiA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==
