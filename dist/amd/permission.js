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
    var Permission = Permission_1 = (function () {
        function Permission(element, authorizeService) {
            this.authorizeService = authorizeService;
            this.disable = false;
            this.onNotAuthorized = this.hideElement;
            this.onAuthorized = this.showElement;
            this.element = element;
        }
        Object.defineProperty(Permission.prototype, "onlyPermissions", {
            get: function () {
                return this.only ?
                    this.only.replace(' ', '').split(Permission_1.Separator) :
                    [];
            },
            enumerable: true,
            configurable: true
        });
        Permission.prototype.bind = function () {
            var _this = this;
            this.disableChanged();
            this.onNotAuthorized();
            (_a = this.authorizeService).isAuthorized.apply(_a, this.onlyPermissions).then(function () { return _this.onAuthorized(); })
                .catch(function () { });
            var _a;
        };
        Permission.prototype.disableChanged = function () {
            if (this.disable) {
                this.onNotAuthorized = this.disableElement;
                this.onAuthorized = this.enableElement;
            }
        };
        Permission.prototype.hideElement = function () {
            this.element.style.display = 'none';
        };
        Permission.prototype.showElement = function () {
            this.element.style.display = '';
        };
        Permission.prototype.disableElement = function () {
            this.element.setAttribute('disabled', '');
        };
        Permission.prototype.enableElement = function () {
            this.element.removeAttribute('disabled');
        };
        return Permission;
    }());
    Permission.Separator = ',';
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], Permission.prototype, "only", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Permission.prototype, "disable", void 0);
    Permission = Permission_1 = __decorate([
        aurelia_framework_1.autoinject(),
        aurelia_framework_1.customAttribute('permission'),
        __metadata("design:paramtypes", [Element, authorize_service_1.default])
    ], Permission);
    exports.Permission = Permission;
    var Permission_1;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBLElBQWEsVUFBVTtRQWtCckIsb0JBQVksT0FBZ0IsRUFBVSxnQkFBa0M7WUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtZQWI5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1lBVWxCLG9CQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNuQyxpQkFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFHdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQWJELHNCQUFJLHVDQUFlO2lCQUFuQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFVLENBQUMsU0FBUyxDQUFDO29CQUN0RCxFQUFFLENBQUM7WUFDUCxDQUFDOzs7V0FBQTtRQVdELHlCQUFJLEdBQUo7WUFBQSxpQkFPQztZQU5DLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsQ0FBQSxLQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLFlBQVksV0FBSSxJQUFJLENBQUMsZUFBZSxFQUN2RCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQztpQkFDL0IsS0FBSyxDQUFDLGNBQWtGLENBQUMsQ0FBQyxDQUFDOztRQUNoRyxDQUFDO1FBRUQsbUNBQWMsR0FBZDtZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQztRQUVPLGdDQUFXLEdBQW5CO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxDQUFDO1FBRU8sZ0NBQVcsR0FBbkI7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFFTyxtQ0FBYyxHQUF0QjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRU8sa0NBQWEsR0FBckI7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQXJEQSxBQXFEQyxJQUFBO0lBbkRlLG9CQUFTLEdBQUcsR0FBRyxDQUFDO0lBRXBCO1FBQVQsNEJBQVE7OzRDQUFjO0lBQ2I7UUFBVCw0QkFBUTs7K0NBQWlCO0lBTGYsVUFBVTtRQUZ0Qiw4QkFBVSxFQUFFO1FBQ1osbUNBQWUsQ0FBQyxZQUFZLENBQUM7eUNBbUJQLE9BQU8sRUFBNEIsMkJBQWdCO09BbEI3RCxVQUFVLENBcUR0QjtJQXJEWSxnQ0FBVSIsImZpbGUiOiJwZXJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuLy8gU2FtcGxlIHVzYWdlczpcclxuLy8gcGVybWlzc2lvbj1cIm9ubHk6IGFkZFVzZXJzXCJcclxuLy8gcGVybWlzc2lvbj1cIm9ubHk6IGFkZFVzZXJzLCBkZWxldGVVc2VyczsgZGlzYWJsZS5iaW5kOiB0cnVlXCJcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGN1c3RvbUF0dHJpYnV0ZSgncGVybWlzc2lvbicpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBTZXBhcmF0b3IgPSAnLCc7XHJcblxyXG4gIEBiaW5kYWJsZSBvbmx5OiBzdHJpbmc7XHJcbiAgQGJpbmRhYmxlIGRpc2FibGUgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IG9ubHlQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5vbmx5ID9cclxuICAgICAgdGhpcy5vbmx5LnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoUGVybWlzc2lvbi5TZXBhcmF0b3IpIDpcclxuICAgICAgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBvbk5vdEF1dGhvcml6ZWQgPSB0aGlzLmhpZGVFbGVtZW50O1xyXG4gIHByaXZhdGUgb25BdXRob3JpemVkID0gdGhpcy5zaG93RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMuZGlzYWJsZUNoYW5nZWQoKTtcclxuXHJcbiAgICB0aGlzLm9uTm90QXV0aG9yaXplZCgpO1xyXG4gICAgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi50aGlzLm9ubHlQZXJtaXNzaW9ucylcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbkF1dGhvcml6ZWQoKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgLyogRG8ganVzdCBub3RoaW5nLCBiZWNhdXNlIGVsZW1lbnQgaXMgYWxyZWFkeSBpbiBub3QgYXV0aG9yaXplZCBzdGF0ZSAqLyB9KTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVDaGFuZ2VkKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZSkge1xyXG4gICAgICB0aGlzLm9uTm90QXV0aG9yaXplZCA9IHRoaXMuZGlzYWJsZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkID0gdGhpcy5lbmFibGVFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=
