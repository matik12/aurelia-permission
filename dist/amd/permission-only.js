var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./authorize-service"], function (require, exports, aurelia_framework_1, authorize_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PermissionOnly = PermissionOnly_1 = (function () {
        function PermissionOnly(element, authorizeService) {
            this.element = element;
            this.authorizeService = authorizeService;
        }
        PermissionOnly.prototype.attached = function () {
            var _this = this;
            this.hideElement();
            (_a = this.authorizeService).isAuthorized.apply(_a, this.permissions).then(function () { return _this.showElement(); })
                .catch(function () { });
            var _a;
        };
        PermissionOnly.prototype.valueChanged = function (newValue) {
            this.permissions = newValue ?
                newValue.replace(' ', '').split(PermissionOnly_1.PermissionSeparator) :
                [];
        };
        PermissionOnly.prototype.hideElement = function () {
            this.element.setAttribute(PermissionOnly_1.StyleAttributeName, 'display: none;');
        };
        PermissionOnly.prototype.showElement = function () {
            this.element.removeAttribute(PermissionOnly_1.StyleAttributeName);
        };
        return PermissionOnly;
    }());
    PermissionOnly.StyleAttributeName = 'style';
    PermissionOnly.PermissionSeparator = ',';
    PermissionOnly = PermissionOnly_1 = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [Element, authorize_service_1.default])
    ], PermissionOnly);
    exports.PermissionOnly = PermissionOnly;
    var PermissionOnly_1;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSxjQUFjO1FBT3pCLHdCQUFvQixPQUFnQixFQUFVLGdCQUFrQztZQUE1RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1lBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFJLENBQUM7UUFFckYsaUNBQVEsR0FBUjtZQUFBLGlCQU9DO1lBTkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5CLENBQUEsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsQ0FBQyxZQUFZLFdBQUksSUFBSSxDQUFDLFdBQVcsRUFDbkQsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUM7aUJBQzlCLEtBQUssQ0FBQyxjQUFpRSxDQUFDLENBQzFFLENBQUM7O1FBQ0osQ0FBQztRQUVELHFDQUFZLEdBQVosVUFBYSxRQUFnQjtZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVE7Z0JBQ3pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBYyxDQUFDLG1CQUFtQixDQUFDO2dCQUNuRSxFQUFFLENBQUM7UUFDUCxDQUFDO1FBRU8sb0NBQVcsR0FBbkI7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFBYyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDakYsQ0FBQztRQUVPLG9DQUFXLEdBQW5CO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsZ0JBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFDSCxxQkFBQztJQUFELENBL0JBLEFBK0JDLElBQUE7SUE3QmUsaUNBQWtCLEdBQUcsT0FBTyxDQUFDO0lBQzdCLGtDQUFtQixHQUFHLEdBQUcsQ0FBQztJQUg3QixjQUFjO1FBRDFCLDhCQUFVLEVBQUU7eUNBUWtCLE9BQU8sRUFBNEIsMkJBQWdCO09BUHJFLGNBQWMsQ0ErQjFCO0lBL0JZLHdDQUFjIiwiZmlsZSI6InBlcm1pc3Npb24tb25seS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSBmcm9tICcuL2F1dGhvcml6ZS1zZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25Pbmx5IHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBTdHlsZUF0dHJpYnV0ZU5hbWUgPSAnc3R5bGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVybWlzc2lvblNlcGFyYXRvciA9ICcsJztcclxuXHJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmhpZGVFbGVtZW50KCk7XHJcblxyXG4gICAgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi50aGlzLnBlcm1pc3Npb25zKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNob3dFbGVtZW50KCkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7IC8qIERvIGp1c3Qgbm90aGluZywgYmVjYXVzZSBlbGVtZW50IGlzIGFscmVhZHkgaGlkZGVuICovIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ld1ZhbHVlID9cclxuICAgICAgbmV3VmFsdWUucmVwbGFjZSgnICcsICcnKS5zcGxpdChQZXJtaXNzaW9uT25seS5QZXJtaXNzaW9uU2VwYXJhdG9yKSA6XHJcbiAgICAgIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoUGVybWlzc2lvbk9ubHkuU3R5bGVBdHRyaWJ1dGVOYW1lLCAnZGlzcGxheTogbm9uZTsnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0VsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFBlcm1pc3Npb25Pbmx5LlN0eWxlQXR0cmlidXRlTmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
