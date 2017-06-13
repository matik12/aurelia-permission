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
var aurelia_framework_1 = require("aurelia-framework");
var authorization_service_1 = require("./authorization-service");
var PermissionFilterValueConverter = (function () {
    function PermissionFilterValueConverter(authorizationService) {
        this.authorizationService = authorizationService;
    }
    PermissionFilterValueConverter.prototype.toView = function (array) {
        var _this = this;
        return array.filter(function (item) { return _this.filterExpression(item); });
    };
    PermissionFilterValueConverter.prototype.filterExpression = function (item) {
        var permissionConfig = item.config && item.config.settings && item.config.settings.permission;
        var permissions = (permissionConfig && permissionConfig.only) || [];
        return (_a = this.authorizationService).isAuthorized.apply(_a, permissions);
        var _a;
    };
    return PermissionFilterValueConverter;
}());
PermissionFilterValueConverter = __decorate([
    aurelia_framework_1.autoinject(),
    __metadata("design:paramtypes", [authorization_service_1.default])
], PermissionFilterValueConverter);
exports.PermissionFilterValueConverter = PermissionFilterValueConverter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUErQztBQUUvQyxpRUFBMkQ7QUFNM0QsSUFBYSw4QkFBOEI7SUFFekMsd0NBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQztJQUVsRSwrQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUFaLGlCQUVDO1FBREMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQseURBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoRyxJQUFNLFdBQVcsR0FBRyxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0RSxNQUFNLENBQUMsQ0FBQSxLQUFBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQSxDQUFDLFlBQVksV0FBSSxXQUFXLEVBQUU7O0lBQ2hFLENBQUM7SUFDSCxxQ0FBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksOEJBQThCO0lBRDFDLDhCQUFVLEVBQUU7cUNBRytCLCtCQUFvQjtHQUZuRCw4QkFBOEIsQ0FjMUM7QUFkWSx3RUFBOEIiLCJmaWxlIjoicGVybWlzc2lvbi1maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5pbXBvcnQgQXV0aG9yaXphdGlvblNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemF0aW9uLXNlcnZpY2UnO1xuXG4vLyBTYW1wbGUgdmFsdWUgY29udmVydGVyIHVzYWdlOlxuLy8gXCJpdGVtIG9mIGl0ZW1zIHwgcGVybWlzc2lvbkZpbHRlclwiXG5cbkBhdXRvaW5qZWN0KClcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uRmlsdGVyVmFsdWVDb252ZXJ0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRvVmlldyhhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoaXRlbSA9PiB0aGlzLmZpbHRlckV4cHJlc3Npb24oaXRlbSkpO1xuICB9XG5cbiAgZmlsdGVyRXhwcmVzc2lvbihpdGVtKSB7XG4gICAgY29uc3QgcGVybWlzc2lvbkNvbmZpZyA9IGl0ZW0uY29uZmlnICYmIGl0ZW0uY29uZmlnLnNldHRpbmdzICYmIGl0ZW0uY29uZmlnLnNldHRpbmdzLnBlcm1pc3Npb247XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSAocGVybWlzc2lvbkNvbmZpZyAmJiBwZXJtaXNzaW9uQ29uZmlnLm9ubHkpIHx8IFtdO1xuXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zKTtcbiAgfVxufVxuIl19
