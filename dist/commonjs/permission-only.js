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
var authorize_service_1 = require("./authorize-service");
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
    aurelia_framework_1.customAttribute('permission-only'),
    __metadata("design:paramtypes", [Element, authorize_service_1.default])
], PermissionOnly);
exports.PermissionOnly = PermissionOnly;
var PermissionOnly_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBZ0U7QUFFaEUseURBQW1EO0FBSW5ELElBQWEsY0FBYztJQU96Qix3QkFBb0IsT0FBZ0IsRUFBVSxnQkFBa0M7UUFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRXJGLGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixDQUFBLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFBLENBQUMsWUFBWSxXQUFJLElBQUksQ0FBQyxXQUFXLEVBQ25ELElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDO2FBQzlCLEtBQUssQ0FBQyxjQUFpRSxDQUFDLENBQzFFLENBQUM7O0lBQ0osQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxRQUFnQjtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVE7WUFDekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFjLENBQUMsbUJBQW1CLENBQUM7WUFDbkUsRUFBRSxDQUFDO0lBQ1AsQ0FBQztJQUVPLG9DQUFXLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWMsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTyxvQ0FBVyxHQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGdCQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBN0JlLGlDQUFrQixHQUFHLE9BQU8sQ0FBQztBQUM3QixrQ0FBbUIsR0FBRyxHQUFHLENBQUM7QUFIN0IsY0FBYztJQUYxQiw4QkFBVSxFQUFFO0lBQ1osbUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQztxQ0FRSixPQUFPLEVBQTRCLDJCQUFnQjtHQVByRSxjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyIsImZpbGUiOiJwZXJtaXNzaW9uLW9ubHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSBmcm9tICcuL2F1dGhvcml6ZS1zZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGN1c3RvbUF0dHJpYnV0ZSgncGVybWlzc2lvbi1vbmx5JylcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25Pbmx5IHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBTdHlsZUF0dHJpYnV0ZU5hbWUgPSAnc3R5bGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVybWlzc2lvblNlcGFyYXRvciA9ICcsJztcclxuXHJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmhpZGVFbGVtZW50KCk7XHJcblxyXG4gICAgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi50aGlzLnBlcm1pc3Npb25zKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNob3dFbGVtZW50KCkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7IC8qIERvIGp1c3Qgbm90aGluZywgYmVjYXVzZSBlbGVtZW50IGlzIGFscmVhZHkgaGlkZGVuICovIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ld1ZhbHVlID9cclxuICAgICAgbmV3VmFsdWUucmVwbGFjZSgnICcsICcnKS5zcGxpdChQZXJtaXNzaW9uT25seS5QZXJtaXNzaW9uU2VwYXJhdG9yKSA6XHJcbiAgICAgIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoUGVybWlzc2lvbk9ubHkuU3R5bGVBdHRyaWJ1dGVOYW1lLCAnZGlzcGxheTogbm9uZTsnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0VsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFBlcm1pc3Npb25Pbmx5LlN0eWxlQXR0cmlidXRlTmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
