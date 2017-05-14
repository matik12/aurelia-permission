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
    var aurelia_framework_1, authorize_service_1, PermissionOnly, PermissionOnly_1;
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
            PermissionOnly = PermissionOnly_1 = (function () {
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
            exports_1("PermissionOnly", PermissionOnly);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNYSxjQUFjO2dCQU96Qix3QkFBb0IsT0FBZ0IsRUFBVSxnQkFBa0M7b0JBQTVELFlBQU8sR0FBUCxPQUFPLENBQVM7b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtnQkFBSSxDQUFDO2dCQUVyRixpQ0FBUSxHQUFSO29CQUFBLGlCQU9DO29CQU5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFbkIsQ0FBQSxLQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLFlBQVksV0FBSSxJQUFJLENBQUMsV0FBVyxFQUNuRCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQzt5QkFDOUIsS0FBSyxDQUFDLGNBQWlFLENBQUMsQ0FDMUUsQ0FBQzs7Z0JBQ0osQ0FBQztnQkFFRCxxQ0FBWSxHQUFaLFVBQWEsUUFBZ0I7b0JBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUTt3QkFDekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFjLENBQUMsbUJBQW1CLENBQUM7d0JBQ25FLEVBQUUsQ0FBQztnQkFDUCxDQUFDO2dCQUVPLG9DQUFXLEdBQW5CO29CQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFjLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDakYsQ0FBQztnQkFFTyxvQ0FBVyxHQUFuQjtvQkFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBQ0gscUJBQUM7WUFBRCxDQS9CQSxBQStCQyxJQUFBO1lBN0JlLGlDQUFrQixHQUFHLE9BQU8sQ0FBQztZQUM3QixrQ0FBbUIsR0FBRyxHQUFHLENBQUM7WUFIN0IsY0FBYztnQkFGMUIsOEJBQVUsRUFBRTtnQkFDWixtQ0FBZSxDQUFDLGlCQUFpQixDQUFDO2lEQVFKLE9BQU8sRUFBNEIsMkJBQWdCO2VBUHJFLGNBQWMsQ0ErQjFCOztRQUNELENBQUMiLCJmaWxlIjoicGVybWlzc2lvbi1vbmx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0IEF1dGhvcml6ZVNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemUtc2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ3Blcm1pc3Npb24tb25seScpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uT25seSB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgU3R5bGVBdHRyaWJ1dGVOYW1lID0gJ3N0eWxlJztcclxuICBwdWJsaWMgc3RhdGljIFBlcm1pc3Npb25TZXBhcmF0b3IgPSAnLCc7XHJcblxyXG4gIHByaXZhdGUgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgYXV0aG9yaXplU2VydmljZTogQXV0aG9yaXplU2VydmljZSkgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5oaWRlRWxlbWVudCgpO1xyXG5cclxuICAgIHRoaXMuYXV0aG9yaXplU2VydmljZS5pc0F1dGhvcml6ZWQoLi4udGhpcy5wZXJtaXNzaW9ucylcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zaG93RWxlbWVudCgpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyAvKiBEbyBqdXN0IG5vdGhpbmcsIGJlY2F1c2UgZWxlbWVudCBpcyBhbHJlYWR5IGhpZGRlbiAqLyB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXdWYWx1ZSA/XHJcbiAgICAgIG5ld1ZhbHVlLnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoUGVybWlzc2lvbk9ubHkuUGVybWlzc2lvblNlcGFyYXRvcikgOlxyXG4gICAgICBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFBlcm1pc3Npb25Pbmx5LlN0eWxlQXR0cmlidXRlTmFtZSwgJ2Rpc3BsYXk6IG5vbmU7Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShQZXJtaXNzaW9uT25seS5TdHlsZUF0dHJpYnV0ZU5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=
