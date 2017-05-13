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
    var aurelia_framework_1, authorize_service_1, PermissionOnlyCustomAttribute, PermissionOnlyCustomAttribute_1;
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
            PermissionOnlyCustomAttribute = PermissionOnlyCustomAttribute_1 = (function () {
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
            exports_1("PermissionOnlyCustomAttribute", PermissionOnlyCustomAttribute);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLW9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLYSw2QkFBNkI7Z0JBTXhDLHVDQUFvQixPQUFnQixFQUFVLGdCQUFrQztvQkFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUZ4RSxVQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUVpRSxDQUFDO2dCQUVyRixnREFBUSxHQUFSO29CQUFBLGlCQU9DO29CQU5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNqRCxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixFQUN4QixjQUFpRSxDQUFDLENBQ25FLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCxvREFBWSxHQUFaLFVBQWEsUUFBZ0I7b0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN4QixDQUFDO2dCQUVPLG1EQUFXLEdBQW5CO29CQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLCtCQUE2QixDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2hHLENBQUM7Z0JBRU8sbURBQVcsR0FBbkI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsK0JBQTZCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDakYsQ0FBQztnQkFDSCxvQ0FBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUExQmUsZ0RBQWtCLEdBQUcsT0FBTyxDQUFDO1lBRmhDLDZCQUE2QjtnQkFEekMsOEJBQVUsRUFBRTtpREFPa0IsT0FBTyxFQUE0QiwyQkFBZ0I7ZUFOckUsNkJBQTZCLENBNEJ6Qzs7UUFDRCxDQUFDIiwiZmlsZSI6InBlcm1pc3Npb24tb25seS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSBmcm9tICcuL2F1dGhvcml6ZS1zZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25Pbmx5Q3VzdG9tQXR0cmlidXRlIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBTdHlsZUF0dHJpYnV0ZU5hbWUgPSAnc3R5bGUnO1xyXG5cclxuICBwcml2YXRlIHJvbGVzID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBhdXRob3JpemVTZXJ2aWNlOiBBdXRob3JpemVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmhpZGVFbGVtZW50KCk7XHJcblxyXG4gICAgdGhpcy5hdXRob3JpemVTZXJ2aWNlLmlzQXV0aG9yaXplZCh0aGlzLnJvbGVzKS50aGVuKFxyXG4gICAgICAoKSA9PiB0aGlzLnNob3dFbGVtZW50KCksXHJcbiAgICAgICgpID0+IHsgLyogRG8ganVzdCBub3RoaW5nLCBiZWNhdXNlIGVsZW1lbnQgaXMgYWxyZWFkeSBoaWRkZW4gKi8gfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvbGVzID0gbmV3VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShQZXJtaXNzaW9uT25seUN1c3RvbUF0dHJpYnV0ZS5TdHlsZUF0dHJpYnV0ZU5hbWUsICdkaXNwbGF5OiBub25lOycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoUGVybWlzc2lvbk9ubHlDdXN0b21BdHRyaWJ1dGUuU3R5bGVBdHRyaWJ1dGVOYW1lKTtcclxuICB9XHJcbn1cclxuIl19
