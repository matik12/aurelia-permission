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
        aurelia_framework_1.customAttribute('permission-only'),
        __metadata("design:paramtypes", [Element, authorize_service_1.default])
    ], PermissionOnly);
    exports.PermissionOnly = PermissionOnly;
    var PermissionOnly_1;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxjQUFjO1FBT3pCLHdCQUFvQixPQUFnQixFQUFVLGdCQUFrQztZQUE1RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1lBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFJLENBQUM7UUFFckYsaUNBQVEsR0FBUjtZQUFBLGlCQU9DO1lBTkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5CLENBQUEsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsQ0FBQyxZQUFZLFdBQUksSUFBSSxDQUFDLFdBQVcsRUFDbkQsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUM7aUJBQzlCLEtBQUssQ0FBQyxjQUFpRSxDQUFDLENBQzFFLENBQUM7O1FBQ0osQ0FBQztRQUVELHFDQUFZLEdBQVosVUFBYSxRQUFnQjtZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVE7Z0JBQ3pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBYyxDQUFDLG1CQUFtQixDQUFDO2dCQUNuRSxFQUFFLENBQUM7UUFDUCxDQUFDO1FBRU8sb0NBQVcsR0FBbkI7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFBYyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDakYsQ0FBQztRQUVPLG9DQUFXLEdBQW5CO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsZ0JBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFDSCxxQkFBQztJQUFELENBL0JBLEFBK0JDLElBQUE7SUE3QmUsaUNBQWtCLEdBQUcsT0FBTyxDQUFDO0lBQzdCLGtDQUFtQixHQUFHLEdBQUcsQ0FBQztJQUg3QixjQUFjO1FBRjFCLDhCQUFVLEVBQUU7UUFDWixtQ0FBZSxDQUFDLGlCQUFpQixDQUFDO3lDQVFKLE9BQU8sRUFBNEIsMkJBQWdCO09BUHJFLGNBQWMsQ0ErQjFCO0lBL0JZLHdDQUFjIiwiZmlsZSI6InBlcm1pc3Npb24tb25seS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY3VzdG9tQXR0cmlidXRlKCdwZXJtaXNzaW9uLW9ubHknKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk9ubHkge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFN0eWxlQXR0cmlidXRlTmFtZSA9ICdzdHlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBQZXJtaXNzaW9uU2VwYXJhdG9yID0gJywnO1xyXG5cclxuICBwcml2YXRlIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UpIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMuaGlkZUVsZW1lbnQoKTtcclxuXHJcbiAgICB0aGlzLmF1dGhvcml6ZVNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnRoaXMucGVybWlzc2lvbnMpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2hvd0VsZW1lbnQoKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgLyogRG8ganVzdCBub3RoaW5nLCBiZWNhdXNlIGVsZW1lbnQgaXMgYWxyZWFkeSBoaWRkZW4gKi8gfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3VmFsdWUgP1xyXG4gICAgICBuZXdWYWx1ZS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KFBlcm1pc3Npb25Pbmx5LlBlcm1pc3Npb25TZXBhcmF0b3IpIDpcclxuICAgICAgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShQZXJtaXNzaW9uT25seS5TdHlsZUF0dHJpYnV0ZU5hbWUsICdkaXNwbGF5OiBub25lOycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoUGVybWlzc2lvbk9ubHkuU3R5bGVBdHRyaWJ1dGVOYW1lKTtcclxuICB9XHJcbn1cclxuIl19
