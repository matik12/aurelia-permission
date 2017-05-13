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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb2xlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7SUFBQTtRQUNVLG9CQUFlLEdBQXFCLEVBQUUsQ0FBQztJQXdCakQsQ0FBQztJQXRCQyw4QkFBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLFVBQThCO1FBQ3JELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUV4RSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxLQUFLLENBQUMsNERBQTBELElBQUksTUFBRyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFlLEVBQUUsVUFBMEM7UUFBdkUsaUJBRUM7UUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBTSxPQUFBLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3hCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUV4RSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDbkUsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQSIsImZpbGUiOiJyb2xlLXN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBSb2xlRGVmaW5pdGlvbiB7XHJcbiAgcm9sZTogc3RyaW5nO1xyXG4gIGRlZmluaXRpb246ICgpID0+IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9sZVN0b3JlIHtcclxuICBwcml2YXRlIHJvbGVEZWZpbml0aW9uczogUm9sZURlZmluaXRpb25bXSA9IFtdO1xyXG5cclxuICBkZWZpbmVSb2xlKHJvbGU6IHN0cmluZywgZGVmaW5pdGlvbjogKCkgPT4gUHJvbWlzZTxhbnk+KSB7XHJcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMucm9sZURlZmluaXRpb25zLmZpbHRlcihyZCA9PiByZC5yb2xlID09PSByb2xlKTtcclxuXHJcbiAgICBpZiAoZGVmaW5pdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHByb3ZpZGUgbXVsdGlwbGUgZGVmaW5pdGlvbnMgZm9yIHRoZSBzYW1lIHJvbGU6ICR7cm9sZX0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb2xlRGVmaW5pdGlvbnMucHVzaCh7XHJcbiAgICAgIHJvbGU6IHJvbGUsXHJcbiAgICAgIGRlZmluaXRpb246IGRlZmluaXRpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVmaW5lUm9sZXMocm9sZXM6IHN0cmluZ1tdLCBkZWZpbml0aW9uOiAocm9sZTogc3RyaW5nKSA9PiBQcm9taXNlPGFueT4pIHtcclxuICAgIHJvbGVzLmZvckVhY2gocm9sZSA9PiB0aGlzLmRlZmluZVJvbGUocm9sZSwgKCkgPT4gZGVmaW5pdGlvbihyb2xlKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmaW5pdGlvbihyb2xlOiBzdHJpbmcpOiAoKSA9PiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLnJvbGVEZWZpbml0aW9ucy5maWx0ZXIocmQgPT4gcmQucm9sZSA9PT0gcm9sZSk7XHJcblxyXG4gICAgcmV0dXJuIGRlZmluaXRpb25zLmxlbmd0aCA+IDAgPyBkZWZpbml0aW9uc1swXS5kZWZpbml0aW9uIDogbnVsbDtcclxuICB9XHJcbn1cclxuIl19
