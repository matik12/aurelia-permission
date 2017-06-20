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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBaUJBLG1CQUNFLFNBQWlDLEVBQ2pDLFNBQW1GO1FBRW5GLElBQU0sZUFBZSxHQUFvQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBZSxDQUFDLENBQUM7UUFDbEYsSUFBTSxrQkFBa0IsR0FBdUIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsOEJBQWtCLENBQUMsQ0FBQztRQUUzRixTQUFTLENBQUMsZUFBZSxFQUFFO1lBQ3pCLHVCQUF1QixFQUFFLFVBQUMsS0FBYTtnQkFDckMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUdILElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pILHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsOEJBQWtCLENBQUMsQ0FBQztRQUVyRCxTQUFTLENBQUMsZUFBZSxDQUFDO1lBQ3hCLGNBQWM7WUFDZCxxQkFBcUI7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FwQ00sMEJBQWU7OENBRWYsK0JBQW9CO1FBd0MzQixDQUFDIiwiZmlsZSI6ImF1cmVsaWEtcGVybWlzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbmltcG9ydCBQZXJtaXNzaW9uU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuaW1wb3J0IEF1dGhvcml6ZVJvdXRlU3RlcCBmcm9tICcuL2F1dGhvcml6ZS1yb3V0ZS1zdGVwJztcclxuaW1wb3J0IEF1dGhvcml6YXRpb25TZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXphdGlvbi1zZXJ2aWNlJztcclxuXHJcbi8vIEltcG9ydCBnbG9iYWwgcmVzb3VyY2VzIGZvciBiZXR0ZXIgcGx1Z2luIGJ1bmRsaW5nIGFuZCB0cmFjaW5nIGRlcGVuZGVuY2llc1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uIH0gZnJvbSAnLi9wZXJtaXNzaW9uJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbkZpbHRlclZhbHVlQ29udmVydGVyIH0gZnJvbSAnLi9wZXJtaXNzaW9uLWZpbHRlcic7XHJcbi8qIHRzbGludDplbmFibGUgKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XHJcbiAgdXNlRGVmYXVsdFJlZGlyZWN0Um91dGU6IChyb3V0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKFxyXG4gIGZyYW1ld29yazogRnJhbWV3b3JrQ29uZmlndXJhdGlvbixcclxuICBjb25maWd1cmU6IChwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSwgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikgPT4gdm9pZFxyXG4pIHtcclxuICBjb25zdCBwZXJtaXNzaW9uU3RvcmUgPSA8UGVybWlzc2lvblN0b3JlPmZyYW1ld29yay5jb250YWluZXIuZ2V0KFBlcm1pc3Npb25TdG9yZSk7XHJcbiAgY29uc3QgYXV0aG9yaXplUm91dGVTdGVwID0gPEF1dGhvcml6ZVJvdXRlU3RlcD5mcmFtZXdvcmsuY29udGFpbmVyLmdldChBdXRob3JpemVSb3V0ZVN0ZXApO1xyXG5cclxuICBjb25maWd1cmUocGVybWlzc2lvblN0b3JlLCB7XHJcbiAgICB1c2VEZWZhdWx0UmVkaXJlY3RSb3V0ZTogKHJvdXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgYXV0aG9yaXplUm91dGVTdGVwLnVzZURlZmF1bHRSZWRpcmVjdFJvdXRlKHJvdXRlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQ29uZmlndXJlIHBpcGVsaW5lIHN0ZXAgZm9yIGF1dGhvcml6YXRpb24gYmVmb3JlIGFjdGl2YXRlIGlzIGludm9rZWRcclxuICBjb25zdCBhcHBSb3V0ZXIgPSBmcmFtZXdvcmsuY29udGFpbmVyLmdldChBcHBSb3V0ZXIpO1xyXG4gIGNvbnN0IGF1dGhvcml6ZVBpcGVsaW5lU3RlcCA9IGFwcFJvdXRlci5waXBlbGluZVByb3ZpZGVyLnN0ZXBzLmZpbmQoc3RlcCA9PiB7IHJldHVybiBzdGVwLnNsb3ROYW1lID09PSAncHJlQWN0aXZhdGUnOyB9KTtcclxuICBhdXRob3JpemVQaXBlbGluZVN0ZXAuc3RlcHMucHVzaChBdXRob3JpemVSb3V0ZVN0ZXApO1xyXG5cclxuICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKFtcclxuICAgICcuL3Blcm1pc3Npb24nLFxyXG4gICAgJy4vcGVybWlzc2lvbi1maWx0ZXInXHJcbiAgXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgUGVybWlzc2lvblN0b3JlLFxyXG4gIEF1dGhvcml6YXRpb25TZXJ2aWNlXHJcbn1cclxuIl19
