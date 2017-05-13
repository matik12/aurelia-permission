System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RoleStore;
    return {
        setters: [],
        execute: function () {
            RoleStore = (function () {
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
            exports_1("default", RoleStore);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb2xlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFLQTtnQkFBQTtvQkFDVSxvQkFBZSxHQUFxQixFQUFFLENBQUM7Z0JBd0JqRCxDQUFDO2dCQXRCQyw4QkFBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLFVBQThCO29CQUNyRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUM7b0JBRXhFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsTUFBTSxLQUFLLENBQUMsNERBQTBELElBQUksTUFBRyxDQUFDLENBQUM7b0JBQ2pGLENBQUM7b0JBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7d0JBQ3hCLElBQUksRUFBRSxJQUFJO3dCQUNWLFVBQVUsRUFBRSxVQUFVO3FCQUN2QixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwrQkFBVyxHQUFYLFVBQVksS0FBZSxFQUFFLFVBQTBDO29CQUF2RSxpQkFFQztvQkFEQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBTSxPQUFBLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQsaUNBQWEsR0FBYixVQUFjLElBQVk7b0JBQ3hCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztvQkFFeEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUNuRSxDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6InJvbGUtc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJvbGVEZWZpbml0aW9uIHtcclxuICByb2xlOiBzdHJpbmc7XHJcbiAgZGVmaW5pdGlvbjogKCkgPT4gUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlU3RvcmUge1xyXG4gIHByaXZhdGUgcm9sZURlZmluaXRpb25zOiBSb2xlRGVmaW5pdGlvbltdID0gW107XHJcblxyXG4gIGRlZmluZVJvbGUocm9sZTogc3RyaW5nLCBkZWZpbml0aW9uOiAoKSA9PiBQcm9taXNlPGFueT4pIHtcclxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5yb2xlRGVmaW5pdGlvbnMuZmlsdGVyKHJkID0+IHJkLnJvbGUgPT09IHJvbGUpO1xyXG5cclxuICAgIGlmIChkZWZpbml0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcHJvdmlkZSBtdWx0aXBsZSBkZWZpbml0aW9ucyBmb3IgdGhlIHNhbWUgcm9sZTogJHtyb2xlfSFgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvbGVEZWZpbml0aW9ucy5wdXNoKHtcclxuICAgICAgcm9sZTogcm9sZSxcclxuICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVSb2xlcyhyb2xlczogc3RyaW5nW10sIGRlZmluaXRpb246IChyb2xlOiBzdHJpbmcpID0+IFByb21pc2U8YW55Pikge1xyXG4gICAgcm9sZXMuZm9yRWFjaChyb2xlID0+IHRoaXMuZGVmaW5lUm9sZShyb2xlLCAoKSA9PiBkZWZpbml0aW9uKHJvbGUpKSk7XHJcbiAgfVxyXG5cclxuICBnZXREZWZpbml0aW9uKHJvbGU6IHN0cmluZyk6ICgpID0+IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMucm9sZURlZmluaXRpb25zLmZpbHRlcihyZCA9PiByZC5yb2xlID09PSByb2xlKTtcclxuXHJcbiAgICByZXR1cm4gZGVmaW5pdGlvbnMubGVuZ3RoID4gMCA/IGRlZmluaXRpb25zWzBdLmRlZmluaXRpb24gOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=
