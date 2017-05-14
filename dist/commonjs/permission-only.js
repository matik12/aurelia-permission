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
    __metadata("design:paramtypes", [Element, authorize_service_1.default])
], PermissionOnly);
exports.PermissionOnly = PermissionOnly;
var PermissionOnly_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBK0M7QUFFL0MseURBQW1EO0FBR25ELElBQWEsY0FBYztJQU96Qix3QkFBb0IsT0FBZ0IsRUFBVSxnQkFBa0M7UUFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRXJGLGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixDQUFBLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFBLENBQUMsWUFBWSxXQUFJLElBQUksQ0FBQyxXQUFXLEVBQ25ELElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDO2FBQzlCLEtBQUssQ0FBQyxjQUFpRSxDQUFDLENBQzFFLENBQUM7O0lBQ0osQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxRQUFnQjtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVE7WUFDekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFjLENBQUMsbUJBQW1CLENBQUM7WUFDbkUsRUFBRSxDQUFDO0lBQ1AsQ0FBQztJQUVPLG9DQUFXLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWMsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTyxvQ0FBVyxHQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGdCQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBN0JlLGlDQUFrQixHQUFHLE9BQU8sQ0FBQztBQUM3QixrQ0FBbUIsR0FBRyxHQUFHLENBQUM7QUFIN0IsY0FBYztJQUQxQiw4QkFBVSxFQUFFO3FDQVFrQixPQUFPLEVBQTRCLDJCQUFnQjtHQVByRSxjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyIsImZpbGUiOiJwZXJtaXNzaW9uLW9ubHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0IEF1dGhvcml6ZVNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemUtc2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uT25seSB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgU3R5bGVBdHRyaWJ1dGVOYW1lID0gJ3N0eWxlJztcclxuICBwdWJsaWMgc3RhdGljIFBlcm1pc3Npb25TZXBhcmF0b3IgPSAnLCc7XHJcblxyXG4gIHByaXZhdGUgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgYXV0aG9yaXplU2VydmljZTogQXV0aG9yaXplU2VydmljZSkgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5oaWRlRWxlbWVudCgpO1xyXG5cclxuICAgIHRoaXMuYXV0aG9yaXplU2VydmljZS5pc0F1dGhvcml6ZWQoLi4udGhpcy5wZXJtaXNzaW9ucylcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zaG93RWxlbWVudCgpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyAvKiBEbyBqdXN0IG5vdGhpbmcsIGJlY2F1c2UgZWxlbWVudCBpcyBhbHJlYWR5IGhpZGRlbiAqLyB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXdWYWx1ZSA/XHJcbiAgICAgIG5ld1ZhbHVlLnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoUGVybWlzc2lvbk9ubHkuUGVybWlzc2lvblNlcGFyYXRvcikgOlxyXG4gICAgICBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFBlcm1pc3Npb25Pbmx5LlN0eWxlQXR0cmlidXRlTmFtZSwgJ2Rpc3BsYXk6IG5vbmU7Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShQZXJtaXNzaW9uT25seS5TdHlsZUF0dHJpYnV0ZU5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=
