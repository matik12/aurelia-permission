var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "./permission-store"], function (require, exports, aurelia_dependency_injection_1, permission_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthorizeService = (function () {
        function AuthorizeService(permissionStore) {
            this.permissionStore = permissionStore;
        }
        AuthorizeService.prototype.isAuthorized = function () {
            var permissions = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                permissions[_i] = arguments[_i];
            }
            var permissionDefinitions = this.getPermissionDefinitions(permissions);
            var noDefinitionsSet = permissionDefinitions.length === 0;
            var anyPermissionDefinitionIsTrue = permissionDefinitions.includes(true);
            if (noDefinitionsSet || anyPermissionDefinitionIsTrue) {
                return true;
            }
            return false;
        };
        AuthorizeService.prototype.getPermissionDefinitions = function (onlyAuthorizePermissions) {
            var _this = this;
            var permissionDefinitions = [];
            onlyAuthorizePermissions.forEach(function (permission) {
                var permissionDefinition = _this.permissionStore.getDefinition(permission);
                if (permissionDefinition) {
                    permissionDefinitions.push(permissionDefinition());
                }
            });
            return permissionDefinitions;
        };
        return AuthorizeService;
    }());
    AuthorizeService = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [permission_store_1.default])
    ], AuthorizeService);
    exports.default = AuthorizeService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFxQixnQkFBZ0I7UUFDbkMsMEJBQW9CLGVBQWdDO1lBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFJLENBQUM7UUFFekQsdUNBQVksR0FBWjtZQUFhLHFCQUF3QjtpQkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO2dCQUF4QixnQ0FBd0I7O1lBQ25DLElBQU0scUJBQXFCLEdBQWMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BGLElBQU0sZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUM1RCxJQUFNLDZCQUE2QixHQUFTLHFCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsRixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFTyxtREFBd0IsR0FBaEMsVUFBaUMsd0JBQWtDO1lBQW5FLGlCQVlDO1lBWEMsSUFBTSxxQkFBcUIsR0FBYyxFQUFFLENBQUM7WUFFNUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtnQkFDekMsSUFBTSxvQkFBb0IsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFNUUsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO29CQUN6QixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDL0IsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtJQTVCb0IsZ0JBQWdCO1FBRHBDLHlDQUFVLEVBQUU7eUNBRTBCLDBCQUFlO09BRGpDLGdCQUFnQixDQTRCcEM7c0JBNUJvQixnQkFBZ0IiLCJmaWxlIjoiYXV0aG9yaXplLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcblxyXG5pbXBvcnQgUGVybWlzc2lvblN0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUpIHsgfVxyXG5cclxuICBpc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvbnM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uRGVmaW5pdGlvbnM6IGJvb2xlYW5bXSA9IHRoaXMuZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKHBlcm1pc3Npb25zKTtcclxuICAgIGNvbnN0IG5vRGVmaW5pdGlvbnNTZXQgPSBwZXJtaXNzaW9uRGVmaW5pdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgY29uc3QgYW55UGVybWlzc2lvbkRlZmluaXRpb25Jc1RydWUgPSAoPGFueT5wZXJtaXNzaW9uRGVmaW5pdGlvbnMpLmluY2x1ZGVzKHRydWUpO1xyXG5cclxuICAgIGlmIChub0RlZmluaXRpb25zU2V0IHx8IGFueVBlcm1pc3Npb25EZWZpbml0aW9uSXNUcnVlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGVybWlzc2lvbkRlZmluaXRpb25zKG9ubHlBdXRob3JpemVQZXJtaXNzaW9uczogc3RyaW5nW10pOiBib29sZWFuW10ge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb25zOiBib29sZWFuW10gPSBbXTtcclxuXHJcbiAgICBvbmx5QXV0aG9yaXplUGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHtcclxuICAgICAgY29uc3QgcGVybWlzc2lvbkRlZmluaXRpb24gPSB0aGlzLnBlcm1pc3Npb25TdG9yZS5nZXREZWZpbml0aW9uKHBlcm1pc3Npb24pO1xyXG5cclxuICAgICAgaWYgKHBlcm1pc3Npb25EZWZpbml0aW9uKSB7XHJcbiAgICAgICAgcGVybWlzc2lvbkRlZmluaXRpb25zLnB1c2gocGVybWlzc2lvbkRlZmluaXRpb24oKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwZXJtaXNzaW9uRGVmaW5pdGlvbnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==
