System.register(["aurelia-router", "./permission-store", "./authorize-route-step", "./authorize-service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(framework, configure) {
        var permissionsStore = framework.container.get(permission_store_1.default);
        var authorizeRouteStep = framework.container.get(authorize_route_step_1.default);
        configure(permissionsStore, {
            setDefaultRedirectRoute: function (route) {
                authorizeRouteStep.setDefaultRedirectRoute(route);
            }
        });
        var appRouter = framework.container.get(aurelia_router_1.AppRouter);
        var authorizePipelineStep = appRouter.pipelineProvider.steps.find(function (step) { return step.slotName === 'preActivate'; });
        authorizePipelineStep.steps.push(authorize_route_step_1.default);
        framework.globalResources('./permission');
    }
    exports_1("configure", configure);
    var aurelia_router_1, permission_store_1, authorize_route_step_1, authorize_service_1;
    return {
        setters: [
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (permission_store_1_1) {
                permission_store_1 = permission_store_1_1;
            },
            function (authorize_route_step_1_1) {
                authorize_route_step_1 = authorize_route_step_1_1;
            },
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
            }
        ],
        execute: function () {
            exports_1("PermissionsStore", permission_store_1.default);
            exports_1("AuthorizeService", authorize_service_1.default);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBV0EsbUJBQ0UsU0FBaUMsRUFDakMsU0FBcUY7UUFFckYsSUFBTSxnQkFBZ0IsR0FBcUIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQWdCLENBQUMsQ0FBQztRQUNyRixJQUFNLGtCQUFrQixHQUF1QixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw4QkFBa0IsQ0FBQyxDQUFDO1FBRTNGLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQix1QkFBdUIsRUFBRSxVQUFDLEtBQWE7Z0JBQ3JDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELENBQUM7U0FDRixDQUFDLENBQUM7UUFHSCxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBUyxDQUFDLENBQUM7UUFDckQsSUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6SCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUFrQixDQUFDLENBQUM7UUFFckQsU0FBUyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQTNCTSwwQkFBZ0I7MENBRWhCLDJCQUFnQjtRQStCdkIsQ0FBQyIsImZpbGUiOiJhdXJlbGlhLXBlcm1pc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgUGVybWlzc2lvbnNTdG9yZSBmcm9tICcuL3Blcm1pc3Npb24tc3RvcmUnO1xyXG5pbXBvcnQgQXV0aG9yaXplUm91dGVTdGVwIGZyb20gJy4vYXV0aG9yaXplLXJvdXRlLXN0ZXAnO1xyXG5pbXBvcnQgQXV0aG9yaXplU2VydmljZSBmcm9tICcuL2F1dGhvcml6ZS1zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XHJcbiAgc2V0RGVmYXVsdFJlZGlyZWN0Um91dGU6IChyb3V0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKFxyXG4gIGZyYW1ld29yazogRnJhbWV3b3JrQ29uZmlndXJhdGlvbixcclxuICBjb25maWd1cmU6IChwZXJtaXNzaW9uc1N0b3JlOiBQZXJtaXNzaW9uc1N0b3JlLCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSA9PiB2b2lkXHJcbikge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zU3RvcmUgPSA8UGVybWlzc2lvbnNTdG9yZT5mcmFtZXdvcmsuY29udGFpbmVyLmdldChQZXJtaXNzaW9uc1N0b3JlKTtcclxuICBjb25zdCBhdXRob3JpemVSb3V0ZVN0ZXAgPSA8QXV0aG9yaXplUm91dGVTdGVwPmZyYW1ld29yay5jb250YWluZXIuZ2V0KEF1dGhvcml6ZVJvdXRlU3RlcCk7XHJcblxyXG4gIGNvbmZpZ3VyZShwZXJtaXNzaW9uc1N0b3JlLCB7XHJcbiAgICBzZXREZWZhdWx0UmVkaXJlY3RSb3V0ZTogKHJvdXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgYXV0aG9yaXplUm91dGVTdGVwLnNldERlZmF1bHRSZWRpcmVjdFJvdXRlKHJvdXRlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQ29uZmlndXJlIHBpcGVsaW5lIHN0ZXAgZm9yIGF1dGhvcml6YXRpb24gYmVmb3JlIGFjdGl2YXRlIGlzIGludm9rZWRcclxuICBjb25zdCBhcHBSb3V0ZXIgPSBmcmFtZXdvcmsuY29udGFpbmVyLmdldChBcHBSb3V0ZXIpO1xyXG4gIGNvbnN0IGF1dGhvcml6ZVBpcGVsaW5lU3RlcCA9IGFwcFJvdXRlci5waXBlbGluZVByb3ZpZGVyLnN0ZXBzLmZpbmQoc3RlcCA9PiB7IHJldHVybiBzdGVwLnNsb3ROYW1lID09PSAncHJlQWN0aXZhdGUnOyB9KTtcclxuICBhdXRob3JpemVQaXBlbGluZVN0ZXAuc3RlcHMucHVzaChBdXRob3JpemVSb3V0ZVN0ZXApO1xyXG5cclxuICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL3Blcm1pc3Npb24nKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBQZXJtaXNzaW9uc1N0b3JlLFxyXG4gIEF1dGhvcml6ZVNlcnZpY2VcclxufVxyXG4iXX0=
