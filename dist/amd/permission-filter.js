var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./authorization-service"], function (require, exports, aurelia_framework_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFRQSxJQUFhLDhCQUE4QjtRQUV6Qyx3Q0FBb0Isb0JBQTBDO1lBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFBRyxDQUFDO1FBRWxFLCtDQUFNLEdBQU4sVUFBTyxLQUFLO1lBQVosaUJBRUM7WUFEQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCx5REFBZ0IsR0FBaEIsVUFBaUIsSUFBSTtZQUNuQixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2hHLElBQU0sV0FBVyxHQUFHLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXRFLE1BQU0sQ0FBQyxDQUFBLEtBQUEsSUFBSSxDQUFDLG9CQUFvQixDQUFBLENBQUMsWUFBWSxXQUFJLFdBQVcsRUFBRTs7UUFDaEUsQ0FBQztRQUNILHFDQUFDO0lBQUQsQ0FkQSxBQWNDLElBQUE7SUFkWSw4QkFBOEI7UUFEMUMsOEJBQVUsRUFBRTt5Q0FHK0IsK0JBQW9CO09BRm5ELDhCQUE4QixDQWMxQztJQWRZLHdFQUE4QiIsImZpbGUiOiJwZXJtaXNzaW9uLWZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmltcG9ydCBBdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuL2F1dGhvcml6YXRpb24tc2VydmljZSc7XG5cbi8vIFNhbXBsZSB2YWx1ZSBjb252ZXJ0ZXIgdXNhZ2U6XG4vLyBcIml0ZW0gb2YgaXRlbXMgfCBwZXJtaXNzaW9uRmlsdGVyXCJcblxuQGF1dG9pbmplY3QoKVxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25GaWx0ZXJWYWx1ZUNvbnZlcnRlciB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRob3JpemF0aW9uU2VydmljZTogQXV0aG9yaXphdGlvblNlcnZpY2UpIHt9XG5cbiAgdG9WaWV3KGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihpdGVtID0+IHRoaXMuZmlsdGVyRXhwcmVzc2lvbihpdGVtKSk7XG4gIH1cblxuICBmaWx0ZXJFeHByZXNzaW9uKGl0ZW0pIHtcbiAgICBjb25zdCBwZXJtaXNzaW9uQ29uZmlnID0gaXRlbS5jb25maWcgJiYgaXRlbS5jb25maWcuc2V0dGluZ3MgJiYgaXRlbS5jb25maWcuc2V0dGluZ3MucGVybWlzc2lvbjtcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IChwZXJtaXNzaW9uQ29uZmlnICYmIHBlcm1pc3Npb25Db25maWcub25seSkgfHwgW107XG5cbiAgICByZXR1cm4gdGhpcy5hdXRob3JpemF0aW9uU2VydmljZS5pc0F1dGhvcml6ZWQoLi4ucGVybWlzc2lvbnMpO1xuICB9XG59XG4iXX0=
