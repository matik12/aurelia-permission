System.register(["aurelia-framework", "./authorization-service"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, authorization_service_1, PermissionFilterValueConverter;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            PermissionFilterValueConverter = (function () {
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
            exports_1("PermissionFilterValueConverter", PermissionFilterValueConverter);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFhLDhCQUE4QjtnQkFFekMsd0NBQW9CLG9CQUEwQztvQkFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtnQkFBRyxDQUFDO2dCQUVsRSwrQ0FBTSxHQUFOLFVBQU8sS0FBSztvQkFBWixpQkFFQztvQkFEQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUVELHlEQUFnQixHQUFoQixVQUFpQixJQUFJO29CQUNuQixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO29CQUNoRyxJQUFNLFdBQVcsR0FBRyxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFdEUsTUFBTSxDQUFDLENBQUEsS0FBQSxJQUFJLENBQUMsb0JBQW9CLENBQUEsQ0FBQyxZQUFZLFdBQUksV0FBVyxFQUFFOztnQkFDaEUsQ0FBQztnQkFDSCxxQ0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZFksOEJBQThCO2dCQUQxQyw4QkFBVSxFQUFFO2lEQUcrQiwrQkFBb0I7ZUFGbkQsOEJBQThCLENBYzFDOztRQUNELENBQUMiLCJmaWxlIjoicGVybWlzc2lvbi1maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5pbXBvcnQgQXV0aG9yaXphdGlvblNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemF0aW9uLXNlcnZpY2UnO1xuXG4vLyBTYW1wbGUgdmFsdWUgY29udmVydGVyIHVzYWdlOlxuLy8gXCJpdGVtIG9mIGl0ZW1zIHwgcGVybWlzc2lvbkZpbHRlclwiXG5cbkBhdXRvaW5qZWN0KClcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uRmlsdGVyVmFsdWVDb252ZXJ0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRvVmlldyhhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoaXRlbSA9PiB0aGlzLmZpbHRlckV4cHJlc3Npb24oaXRlbSkpO1xuICB9XG5cbiAgZmlsdGVyRXhwcmVzc2lvbihpdGVtKSB7XG4gICAgY29uc3QgcGVybWlzc2lvbkNvbmZpZyA9IGl0ZW0uY29uZmlnICYmIGl0ZW0uY29uZmlnLnNldHRpbmdzICYmIGl0ZW0uY29uZmlnLnNldHRpbmdzLnBlcm1pc3Npb247XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSAocGVybWlzc2lvbkNvbmZpZyAmJiBwZXJtaXNzaW9uQ29uZmlnLm9ubHkpIHx8IFtdO1xuXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnBlcm1pc3Npb25zKTtcbiAgfVxufVxuIl19
