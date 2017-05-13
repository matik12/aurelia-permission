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
            exports_1("PermissionOnly", PermissionOnly);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLYSxjQUFjO2dCQU96Qix3QkFBb0IsT0FBZ0IsRUFBVSxnQkFBa0M7b0JBQTVELFlBQU8sR0FBUCxPQUFPLENBQVM7b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtnQkFBSSxDQUFDO2dCQUVyRixpQ0FBUSxHQUFSO29CQUFBLGlCQU9DO29CQU5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFbkIsQ0FBQSxLQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLFlBQVksV0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FDMUQsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFDeEIsY0FBaUUsQ0FBQyxDQUNuRSxDQUFDOztnQkFDSixDQUFDO2dCQUVELHFDQUFZLEdBQVosVUFBYSxRQUFnQjtvQkFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRO3dCQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWMsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbkUsRUFBRSxDQUFDO2dCQUNQLENBQUM7Z0JBRU8sb0NBQVcsR0FBbkI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWMsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUVPLG9DQUFXLEdBQW5CO29CQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGdCQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBL0JBLEFBK0JDLElBQUE7WUE3QmUsaUNBQWtCLEdBQUcsT0FBTyxDQUFDO1lBQzdCLGtDQUFtQixHQUFHLEdBQUcsQ0FBQztZQUg3QixjQUFjO2dCQUQxQiw4QkFBVSxFQUFFO2lEQVFrQixPQUFPLEVBQTRCLDJCQUFnQjtlQVByRSxjQUFjLENBK0IxQjs7UUFDRCxDQUFDIiwiZmlsZSI6InBlcm1pc3Npb24tb25seS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSBmcm9tICcuL2F1dGhvcml6ZS1zZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25Pbmx5IHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBTdHlsZUF0dHJpYnV0ZU5hbWUgPSAnc3R5bGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVybWlzc2lvblNlcGFyYXRvciA9ICcsJztcclxuXHJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmhpZGVFbGVtZW50KCk7XHJcblxyXG4gICAgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCguLi50aGlzLnBlcm1pc3Npb25zKS50aGVuKFxyXG4gICAgICAoKSA9PiB0aGlzLnNob3dFbGVtZW50KCksXHJcbiAgICAgICgpID0+IHsgLyogRG8ganVzdCBub3RoaW5nLCBiZWNhdXNlIGVsZW1lbnQgaXMgYWxyZWFkeSBoaWRkZW4gKi8gfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3VmFsdWUgP1xyXG4gICAgICBuZXdWYWx1ZS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KFBlcm1pc3Npb25Pbmx5LlBlcm1pc3Npb25TZXBhcmF0b3IpIDpcclxuICAgICAgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShQZXJtaXNzaW9uT25seS5TdHlsZUF0dHJpYnV0ZU5hbWUsICdkaXNwbGF5OiBub25lOycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoUGVybWlzc2lvbk9ubHkuU3R5bGVBdHRyaWJ1dGVOYW1lKTtcclxuICB9XHJcbn1cclxuIl19
