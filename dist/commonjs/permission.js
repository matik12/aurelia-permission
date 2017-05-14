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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtaXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQTBFO0FBRTFFLHlEQUFtRDtBQVFuRCxJQUFhLFVBQVU7SUFrQnJCLG9CQUFZLE9BQWdCLEVBQVUsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFiOUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVVsQixvQkFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBR3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFiRCxzQkFBSSx1Q0FBZTthQUFuQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RELEVBQUUsQ0FBQztRQUNQLENBQUM7OztPQUFBO0lBV0QseUJBQUksR0FBSjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixDQUFBLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFBLENBQUMsWUFBWSxXQUFJLElBQUksQ0FBQyxlQUFlLEVBQ3ZELElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDO2FBQy9CLEtBQUssQ0FBQyxjQUFrRixDQUFDLENBQUMsQ0FBQzs7SUFDaEcsQ0FBQztJQUVELG1DQUFjLEdBQWQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBRU8sZ0NBQVcsR0FBbkI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVPLG1DQUFjLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDSCxpQkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFuRGUsb0JBQVMsR0FBRyxHQUFHLENBQUM7QUFFcEI7SUFBVCw0QkFBUTs7d0NBQWM7QUFDYjtJQUFULDRCQUFROzsyQ0FBaUI7QUFMZixVQUFVO0lBRnRCLDhCQUFVLEVBQUU7SUFDWixtQ0FBZSxDQUFDLFlBQVksQ0FBQztxQ0FtQlAsT0FBTyxFQUE0QiwyQkFBZ0I7R0FsQjdELFVBQVUsQ0FxRHRCO0FBckRZLGdDQUFVIiwiZmlsZSI6InBlcm1pc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0IEF1dGhvcml6ZVNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemUtc2VydmljZSc7XHJcblxyXG4vLyBTYW1wbGUgdXNhZ2VzOlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnNcIlxyXG4vLyBwZXJtaXNzaW9uPVwib25seTogYWRkVXNlcnMsIGRlbGV0ZVVzZXJzOyBkaXNhYmxlLmJpbmQ6IHRydWVcIlxyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY3VzdG9tQXR0cmlidXRlKCdwZXJtaXNzaW9uJylcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb24ge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFNlcGFyYXRvciA9ICcsJztcclxuXHJcbiAgQGJpbmRhYmxlIG9ubHk6IHN0cmluZztcclxuICBAYmluZGFibGUgZGlzYWJsZSA9IGZhbHNlO1xyXG5cclxuICBnZXQgb25seVBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLm9ubHkgP1xyXG4gICAgICB0aGlzLm9ubHkucmVwbGFjZSgnICcsICcnKS5zcGxpdChQZXJtaXNzaW9uLlNlcGFyYXRvcikgOlxyXG4gICAgICBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xyXG5cclxuICBwcml2YXRlIG9uTm90QXV0aG9yaXplZCA9IHRoaXMuaGlkZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBvbkF1dGhvcml6ZWQgPSB0aGlzLnNob3dFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlIGF1dGhvcml6ZVNlcnZpY2U6IEF1dGhvcml6ZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlQ2hhbmdlZCgpO1xyXG5cclxuICAgIHRoaXMub25Ob3RBdXRob3JpemVkKCk7XHJcbiAgICB0aGlzLmF1dGhvcml6ZVNlcnZpY2UuaXNBdXRob3JpemVkKC4uLnRoaXMub25seVBlcm1pc3Npb25zKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLm9uQXV0aG9yaXplZCgpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyAvKiBEbyBqdXN0IG5vdGhpbmcsIGJlY2F1c2UgZWxlbWVudCBpcyBhbHJlYWR5IGluIG5vdCBhdXRob3JpemVkIHN0YXRlICovIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUNoYW5nZWQoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XHJcbiAgICAgIHRoaXMub25Ob3RBdXRob3JpemVkID0gdGhpcy5kaXNhYmxlRWxlbWVudDtcclxuICAgICAgdGhpcy5vbkF1dGhvcml6ZWQgPSB0aGlzLmVuYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
