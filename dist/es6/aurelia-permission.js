System.register(["aurelia-router", "./permission-store", "./authorize-route-step", "./authorization-service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(framework, configure) {
        var permissionStore = framework.container.get(permission_store_1.default);
        var authorizeRouteStep = framework.container.get(authorize_route_step_1.default);
        configure(permissionStore, {
            useDefaultRedirectRoute: function (route) {
                authorizeRouteStep.useDefaultRedirectRoute(route);
            }
        });
        var appRouter = framework.container.get(aurelia_router_1.AppRouter);
        var authorizePipelineStep = appRouter.pipelineProvider.steps.find(function (step) { return step.slotName === 'preActivate'; });
        authorizePipelineStep.steps.push(authorize_route_step_1.default);
        framework.globalResources([
            './permission',
            './permission-filter'
        ]);
    }
    exports_1("configure", configure);
    var aurelia_router_1, permission_store_1, authorize_route_step_1, authorization_service_1;
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
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            exports_1("PermissionStore", permission_store_1.default);
            exports_1("AuthorizationService", authorization_service_1.default);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBV0EsbUJBQ0UsU0FBaUMsRUFDakMsU0FBbUY7UUFFbkYsSUFBTSxlQUFlLEdBQW9CLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUFlLENBQUMsQ0FBQztRQUNsRixJQUFNLGtCQUFrQixHQUF1QixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw4QkFBa0IsQ0FBQyxDQUFDO1FBRTNGLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDekIsdUJBQXVCLEVBQUUsVUFBQyxLQUFhO2dCQUNyQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekgscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBa0IsQ0FBQyxDQUFDO1FBRXJELFNBQVMsQ0FBQyxlQUFlLENBQUM7WUFDeEIsY0FBYztZQUNkLHFCQUFxQjtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQTlCTSwwQkFBZTs4Q0FFZiwrQkFBb0I7UUFrQzNCLENBQUMiLCJmaWxlIjoiYXVyZWxpYS1wZXJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IFBlcm1pc3Npb25TdG9yZSBmcm9tICcuL3Blcm1pc3Npb24tc3RvcmUnO1xyXG5pbXBvcnQgQXV0aG9yaXplUm91dGVTdGVwIGZyb20gJy4vYXV0aG9yaXplLXJvdXRlLXN0ZXAnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvblNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemF0aW9uLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcclxuICB1c2VEZWZhdWx0UmVkaXJlY3RSb3V0ZTogKHJvdXRlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoXHJcbiAgZnJhbWV3b3JrOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLFxyXG4gIGNvbmZpZ3VyZTogKHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlLCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSA9PiB2b2lkXHJcbikge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25TdG9yZSA9IDxQZXJtaXNzaW9uU3RvcmU+ZnJhbWV3b3JrLmNvbnRhaW5lci5nZXQoUGVybWlzc2lvblN0b3JlKTtcclxuICBjb25zdCBhdXRob3JpemVSb3V0ZVN0ZXAgPSA8QXV0aG9yaXplUm91dGVTdGVwPmZyYW1ld29yay5jb250YWluZXIuZ2V0KEF1dGhvcml6ZVJvdXRlU3RlcCk7XHJcblxyXG4gIGNvbmZpZ3VyZShwZXJtaXNzaW9uU3RvcmUsIHtcclxuICAgIHVzZURlZmF1bHRSZWRpcmVjdFJvdXRlOiAocm91dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICBhdXRob3JpemVSb3V0ZVN0ZXAudXNlRGVmYXVsdFJlZGlyZWN0Um91dGUocm91dGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBDb25maWd1cmUgcGlwZWxpbmUgc3RlcCBmb3IgYXV0aG9yaXphdGlvbiBiZWZvcmUgYWN0aXZhdGUgaXMgaW52b2tlZFxyXG4gIGNvbnN0IGFwcFJvdXRlciA9IGZyYW1ld29yay5jb250YWluZXIuZ2V0KEFwcFJvdXRlcik7XHJcbiAgY29uc3QgYXV0aG9yaXplUGlwZWxpbmVTdGVwID0gYXBwUm91dGVyLnBpcGVsaW5lUHJvdmlkZXIuc3RlcHMuZmluZChzdGVwID0+IHsgcmV0dXJuIHN0ZXAuc2xvdE5hbWUgPT09ICdwcmVBY3RpdmF0ZSc7IH0pO1xyXG4gIGF1dGhvcml6ZVBpcGVsaW5lU3RlcC5zdGVwcy5wdXNoKEF1dGhvcml6ZVJvdXRlU3RlcCk7XHJcblxyXG4gIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoW1xyXG4gICAgJy4vcGVybWlzc2lvbicsXHJcbiAgICAnLi9wZXJtaXNzaW9uLWZpbHRlcidcclxuICBdKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgQXV0aG9yaXphdGlvblNlcnZpY2VcclxufVxyXG4iXX0=
