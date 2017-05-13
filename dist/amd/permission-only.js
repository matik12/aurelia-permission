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
    var PermissionOnlyCustomAttribute = PermissionOnlyCustomAttribute_1 = (function () {
        function PermissionOnlyCustomAttribute(element, authorizeService) {
            this.element = element;
            this.authorizeService = authorizeService;
            this.roles = '';
        }
        PermissionOnlyCustomAttribute.prototype.attached = function () {
            var _this = this;
            this.hideElement();
            this.authorizeService.isAuthorized(this.roles).then(function () { return _this.showElement(); }, function () { });
        };
        PermissionOnlyCustomAttribute.prototype.valueChanged = function (newValue) {
            this.roles = newValue;
        };
        PermissionOnlyCustomAttribute.prototype.hideElement = function () {
            this.element.setAttribute(PermissionOnlyCustomAttribute_1.StyleAttributeName, 'display: none;');
        };
        PermissionOnlyCustomAttribute.prototype.showElement = function () {
            this.element.removeAttribute(PermissionOnlyCustomAttribute_1.StyleAttributeName);
        };
        return PermissionOnlyCustomAttribute;
    }());
    PermissionOnlyCustomAttribute.StyleAttributeName = 'style';
    PermissionOnlyCustomAttribute = PermissionOnlyCustomAttribute_1 = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [Element, authorize_service_1.default])
    ], PermissionOnlyCustomAttribute);
    exports.PermissionOnlyCustomAttribute = PermissionOnlyCustomAttribute;
    var PermissionOnlyCustomAttribute_1;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSw2QkFBNkI7UUFNeEMsdUNBQW9CLE9BQWdCLEVBQVUsZ0JBQWtDO1lBQTVELFlBQU8sR0FBUCxPQUFPLENBQVM7WUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1lBRnhFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFaUUsQ0FBQztRQUVyRixnREFBUSxHQUFSO1lBQUEsaUJBT0M7WUFOQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNqRCxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixFQUN4QixjQUFpRSxDQUFDLENBQ25FLENBQUM7UUFDSixDQUFDO1FBRUQsb0RBQVksR0FBWixVQUFhLFFBQWdCO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLENBQUM7UUFFTyxtREFBVyxHQUFuQjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLCtCQUE2QixDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDaEcsQ0FBQztRQUVPLG1EQUFXLEdBQW5CO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsK0JBQTZCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQ0gsb0NBQUM7SUFBRCxDQTVCQSxBQTRCQyxJQUFBO0lBMUJlLGdEQUFrQixHQUFHLE9BQU8sQ0FBQztJQUZoQyw2QkFBNkI7UUFEekMsOEJBQVUsRUFBRTt5Q0FPa0IsT0FBTyxFQUE0QiwyQkFBZ0I7T0FOckUsNkJBQTZCLENBNEJ6QztJQTVCWSxzRUFBNkIiLCJmaWxlIjoicGVybWlzc2lvbi1vbmx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk9ubHlDdXN0b21BdHRyaWJ1dGUge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFN0eWxlQXR0cmlidXRlTmFtZSA9ICdzdHlsZSc7XHJcblxyXG4gIHByaXZhdGUgcm9sZXMgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UpIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMuaGlkZUVsZW1lbnQoKTtcclxuXHJcbiAgICB0aGlzLmF1dGhvcml6ZVNlcnZpY2UuaXNBdXRob3JpemVkKHRoaXMucm9sZXMpLnRoZW4oXHJcbiAgICAgICgpID0+IHRoaXMuc2hvd0VsZW1lbnQoKSxcclxuICAgICAgKCkgPT4geyAvKiBEbyBqdXN0IG5vdGhpbmcsIGJlY2F1c2UgZWxlbWVudCBpcyBhbHJlYWR5IGhpZGRlbiAqLyB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucm9sZXMgPSBuZXdWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFBlcm1pc3Npb25Pbmx5Q3VzdG9tQXR0cmlidXRlLlN0eWxlQXR0cmlidXRlTmFtZSwgJ2Rpc3BsYXk6IG5vbmU7Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShQZXJtaXNzaW9uT25seUN1c3RvbUF0dHJpYnV0ZS5TdHlsZUF0dHJpYnV0ZU5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=
