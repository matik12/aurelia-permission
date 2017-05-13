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
            (_a = this.authorizeService).isAuthorized.apply(_a, this.permissions).then(function () { return _this.showElement(); }, function () { });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSxjQUFjO1FBT3pCLHdCQUFvQixPQUFnQixFQUFVLGdCQUFrQztZQUE1RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1lBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFJLENBQUM7UUFFckYsaUNBQVEsR0FBUjtZQUFBLGlCQU9DO1lBTkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5CLENBQUEsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsQ0FBQyxZQUFZLFdBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQzFELGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLEVBQ3hCLGNBQWlFLENBQUMsQ0FDbkUsQ0FBQzs7UUFDSixDQUFDO1FBRUQscUNBQVksR0FBWixVQUFhLFFBQWdCO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUTtnQkFDekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFjLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25FLEVBQUUsQ0FBQztRQUNQLENBQUM7UUFFTyxvQ0FBVyxHQUFuQjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFjLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBRU8sb0NBQVcsR0FBbkI7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0EvQkEsQUErQkMsSUFBQTtJQTdCZSxpQ0FBa0IsR0FBRyxPQUFPLENBQUM7SUFDN0Isa0NBQW1CLEdBQUcsR0FBRyxDQUFDO0lBSDdCLGNBQWM7UUFEMUIsOEJBQVUsRUFBRTt5Q0FRa0IsT0FBTyxFQUE0QiwyQkFBZ0I7T0FQckUsY0FBYyxDQStCMUI7SUEvQlksd0NBQWMiLCJmaWxlIjoicGVybWlzc2lvbi1vbmx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk9ubHkge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFN0eWxlQXR0cmlidXRlTmFtZSA9ICdzdHlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBQZXJtaXNzaW9uU2VwYXJhdG9yID0gJywnO1xyXG5cclxuICBwcml2YXRlIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UpIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMuaGlkZUVsZW1lbnQoKTtcclxuXHJcbiAgICB0aGlzLmF1dGhvcml6ZVNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnRoaXMucGVybWlzc2lvbnMpLnRoZW4oXHJcbiAgICAgICgpID0+IHRoaXMuc2hvd0VsZW1lbnQoKSxcclxuICAgICAgKCkgPT4geyAvKiBEbyBqdXN0IG5vdGhpbmcsIGJlY2F1c2UgZWxlbWVudCBpcyBhbHJlYWR5IGhpZGRlbiAqLyB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXdWYWx1ZSA/XHJcbiAgICAgIG5ld1ZhbHVlLnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoUGVybWlzc2lvbk9ubHkuUGVybWlzc2lvblNlcGFyYXRvcikgOlxyXG4gICAgICBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFBlcm1pc3Npb25Pbmx5LlN0eWxlQXR0cmlidXRlTmFtZSwgJ2Rpc3BsYXk6IG5vbmU7Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShQZXJtaXNzaW9uT25seS5TdHlsZUF0dHJpYnV0ZU5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=
