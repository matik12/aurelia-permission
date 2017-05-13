define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoleStore = (function () {
        function RoleStore() {
            this.roleDefinitions = [];
        }
        RoleStore.prototype.defineRole = function (role, definition) {
            var definitions = this.roleDefinitions.filter(function (rd) { return rd.role === role; });
            if (definitions.length > 0) {
                throw Error("Cannot provide multiple definitions for the same role: " + role + "!");
            }
            this.roleDefinitions.push({
                role: role,
                definition: definition
            });
        };
        RoleStore.prototype.defineRoles = function (roles, definition) {
            var _this = this;
            roles.forEach(function (role) { return _this.defineRole(role, function () { return definition(role); }); });
        };
        RoleStore.prototype.getDefinition = function (role) {
            var definitions = this.roleDefinitions.filter(function (rd) { return rd.role === role; });
            return definitions.length > 0 ? definitions[0].definition : null;
        };
        return RoleStore;
    }());
    exports.default = RoleStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb2xlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBQUE7WUFDVSxvQkFBZSxHQUFxQixFQUFFLENBQUM7UUF3QmpELENBQUM7UUF0QkMsOEJBQVUsR0FBVixVQUFXLElBQVksRUFBRSxVQUE4QjtZQUNyRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFFeEUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLEtBQUssQ0FBQyw0REFBMEQsSUFBSSxNQUFHLENBQUMsQ0FBQztZQUNqRixDQUFDO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksRUFBRSxJQUFJO2dCQUNWLFVBQVUsRUFBRSxVQUFVO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCwrQkFBVyxHQUFYLFVBQVksS0FBZSxFQUFFLFVBQTBDO1lBQXZFLGlCQUVDO1lBREMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQU0sT0FBQSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQWhCLENBQWdCLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxpQ0FBYSxHQUFiLFVBQWMsSUFBWTtZQUN4QixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFFeEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25FLENBQUM7UUFDSCxnQkFBQztJQUFELENBekJBLEFBeUJDLElBQUEiLCJmaWxlIjoicm9sZS1zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUm9sZURlZmluaXRpb24ge1xyXG4gIHJvbGU6IHN0cmluZztcclxuICBkZWZpbml0aW9uOiAoKSA9PiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvbGVTdG9yZSB7XHJcbiAgcHJpdmF0ZSByb2xlRGVmaW5pdGlvbnM6IFJvbGVEZWZpbml0aW9uW10gPSBbXTtcclxuXHJcbiAgZGVmaW5lUm9sZShyb2xlOiBzdHJpbmcsIGRlZmluaXRpb246ICgpID0+IFByb21pc2U8YW55Pikge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLnJvbGVEZWZpbml0aW9ucy5maWx0ZXIocmQgPT4gcmQucm9sZSA9PT0gcm9sZSk7XHJcblxyXG4gICAgaWYgKGRlZmluaXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBwcm92aWRlIG11bHRpcGxlIGRlZmluaXRpb25zIGZvciB0aGUgc2FtZSByb2xlOiAke3JvbGV9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9sZURlZmluaXRpb25zLnB1c2goe1xyXG4gICAgICByb2xlOiByb2xlLFxyXG4gICAgICBkZWZpbml0aW9uOiBkZWZpbml0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlZmluZVJvbGVzKHJvbGVzOiBzdHJpbmdbXSwgZGVmaW5pdGlvbjogKHJvbGU6IHN0cmluZykgPT4gUHJvbWlzZTxhbnk+KSB7XHJcbiAgICByb2xlcy5mb3JFYWNoKHJvbGUgPT4gdGhpcy5kZWZpbmVSb2xlKHJvbGUsICgpID0+IGRlZmluaXRpb24ocm9sZSkpKTtcclxuICB9XHJcblxyXG4gIGdldERlZmluaXRpb24ocm9sZTogc3RyaW5nKTogKCkgPT4gUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5yb2xlRGVmaW5pdGlvbnMuZmlsdGVyKHJkID0+IHJkLnJvbGUgPT09IHJvbGUpO1xyXG5cclxuICAgIHJldHVybiBkZWZpbml0aW9ucy5sZW5ndGggPiAwID8gZGVmaW5pdGlvbnNbMF0uZGVmaW5pdGlvbiA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==
