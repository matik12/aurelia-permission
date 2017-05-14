System.register(["aurelia-framework", "./authorize-service"], function (exports_1, context_1) {
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
    var aurelia_framework_1, authorize_service_1, Permission, Permission_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
            }
        ],
        execute: function () {
            Permission = Permission_1 = (function () {
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
            exports_1("Permission", Permission);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVWEsVUFBVTtnQkFrQnJCLG9CQUFZLE9BQWdCLEVBQVUsZ0JBQWtDO29CQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQWI5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO29CQVVsQixvQkFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ25DLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFHdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLENBQUM7Z0JBYkQsc0JBQUksdUNBQWU7eUJBQW5CO3dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTs0QkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVUsQ0FBQyxTQUFTLENBQUM7NEJBQ3RELEVBQUUsQ0FBQztvQkFDUCxDQUFDOzs7bUJBQUE7Z0JBV0QseUJBQUksR0FBSjtvQkFBQSxpQkFPQztvQkFOQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBRXRCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQSxLQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLFlBQVksV0FBSSxJQUFJLENBQUMsZUFBZSxFQUN2RCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQzt5QkFDL0IsS0FBSyxDQUFDLGNBQWtGLENBQUMsQ0FBQyxDQUFDOztnQkFDaEcsQ0FBQztnQkFFRCxtQ0FBYyxHQUFkO29CQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7d0JBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDekMsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLGdDQUFXLEdBQW5CO29CQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRU8sZ0NBQVcsR0FBbkI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQztnQkFFTyxtQ0FBYyxHQUF0QjtvQkFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRU8sa0NBQWEsR0FBckI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0gsaUJBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBbkRlLG9CQUFTLEdBQUcsR0FBRyxDQUFDO1lBRXBCO2dCQUFULDRCQUFROztvREFBYztZQUNiO2dCQUFULDRCQUFROzt1REFBaUI7WUFMZixVQUFVO2dCQUZ0Qiw4QkFBVSxFQUFFO2dCQUNaLG1DQUFlLENBQUMsWUFBWSxDQUFDO2lEQW1CUCxPQUFPLEVBQTRCLDJCQUFnQjtlQWxCN0QsVUFBVSxDQXFEdEI7O1FBQ0QsQ0FBQyIsImZpbGUiOiJwZXJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuLy8gU2FtcGxlIHVzYWdlczpcclxuLy8gcGVybWlzc2lvbj1cIm9ubHk6IGFkZFVzZXJzXCJcclxuLy8gcGVybWlzc2lvbj1cIm9ubHk6IGFkZFVzZXJzLCBkZWxldGVVc2VyczsgZGlzYWJsZS5iaW5kOiB0cnVlXCJcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGN1c3RvbUF0dHJpYnV0ZSgncGVybWlzc2lvbicpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBTZXBhcmF0b3IgPSAnLCc7XHJcblxyXG4gIEBiaW5kYWJsZSBvbmx5OiBzdHJpbmc7XHJcbiAgQGJpbmRhYmxlIGRpc2FibGUgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IG9ubHlQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5vbmx5ID9cclxuICAgICAgdGhpcy5vbmx5LnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoUGVybWlzc2lvbi5TZXBhcmF0b3IpIDpcclxuICAgICAgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBvbk5vdEF1dGhvcml6ZWQgPSB0aGlzLmhpZGVFbGVtZW50O1xyXG4gIHByaXZhdGUgb25BdXRob3JpemVkID0gdGhpcy5zaG93RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMuZGlzYWJsZUNoYW5nZWQoKTtcclxuXHJcbiAgICB0aGlzLm9uTm90QXV0aG9yaXplZCgpO1xyXG4gICAgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi50aGlzLm9ubHlQZXJtaXNzaW9ucylcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbkF1dGhvcml6ZWQoKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgLyogRG8ganVzdCBub3RoaW5nLCBiZWNhdXNlIGVsZW1lbnQgaXMgYWxyZWFkeSBpbiBub3QgYXV0aG9yaXplZCBzdGF0ZSAqLyB9KTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVDaGFuZ2VkKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZSkge1xyXG4gICAgICB0aGlzLm9uTm90QXV0aG9yaXplZCA9IHRoaXMuZGlzYWJsZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMub25BdXRob3JpemVkID0gdGhpcy5lbmFibGVFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=
