System.register(["aurelia-router", "./permission-store", "./authorize-route-step", "./authorize-service"], function (exports_1, context_1) {
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
            exports_1("PermissionStore", permission_store_1.default);
            exports_1("AuthorizeService", authorize_service_1.default);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBV0EsbUJBQ0UsU0FBaUMsRUFDakMsU0FBbUY7UUFFbkYsSUFBTSxlQUFlLEdBQW9CLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUFlLENBQUMsQ0FBQztRQUNsRixJQUFNLGtCQUFrQixHQUF1QixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw4QkFBa0IsQ0FBQyxDQUFDO1FBRTNGLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDekIsdUJBQXVCLEVBQUUsVUFBQyxLQUFhO2dCQUNyQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekgscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBa0IsQ0FBQyxDQUFDO1FBRXJELFNBQVMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0EzQk0sMEJBQWU7MENBRWYsMkJBQWdCO1FBK0J2QixDQUFDIiwiZmlsZSI6ImF1cmVsaWEtcGVybWlzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbmltcG9ydCBQZXJtaXNzaW9uU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuaW1wb3J0IEF1dGhvcml6ZVJvdXRlU3RlcCBmcm9tICcuL2F1dGhvcml6ZS1yb3V0ZS1zdGVwJztcclxuaW1wb3J0IEF1dGhvcml6ZVNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemUtc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xyXG4gIHVzZURlZmF1bHRSZWRpcmVjdFJvdXRlOiAocm91dGU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShcclxuICBmcmFtZXdvcms6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sXHJcbiAgY29uZmlndXJlOiAocGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pID0+IHZvaWRcclxuKSB7XHJcbiAgY29uc3QgcGVybWlzc2lvblN0b3JlID0gPFBlcm1pc3Npb25TdG9yZT5mcmFtZXdvcmsuY29udGFpbmVyLmdldChQZXJtaXNzaW9uU3RvcmUpO1xyXG4gIGNvbnN0IGF1dGhvcml6ZVJvdXRlU3RlcCA9IDxBdXRob3JpemVSb3V0ZVN0ZXA+ZnJhbWV3b3JrLmNvbnRhaW5lci5nZXQoQXV0aG9yaXplUm91dGVTdGVwKTtcclxuXHJcbiAgY29uZmlndXJlKHBlcm1pc3Npb25TdG9yZSwge1xyXG4gICAgdXNlRGVmYXVsdFJlZGlyZWN0Um91dGU6IChyb3V0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGF1dGhvcml6ZVJvdXRlU3RlcC51c2VEZWZhdWx0UmVkaXJlY3RSb3V0ZShyb3V0ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIENvbmZpZ3VyZSBwaXBlbGluZSBzdGVwIGZvciBhdXRob3JpemF0aW9uIGJlZm9yZSBhY3RpdmF0ZSBpcyBpbnZva2VkXHJcbiAgY29uc3QgYXBwUm91dGVyID0gZnJhbWV3b3JrLmNvbnRhaW5lci5nZXQoQXBwUm91dGVyKTtcclxuICBjb25zdCBhdXRob3JpemVQaXBlbGluZVN0ZXAgPSBhcHBSb3V0ZXIucGlwZWxpbmVQcm92aWRlci5zdGVwcy5maW5kKHN0ZXAgPT4geyByZXR1cm4gc3RlcC5zbG90TmFtZSA9PT0gJ3ByZUFjdGl2YXRlJzsgfSk7XHJcbiAgYXV0aG9yaXplUGlwZWxpbmVTdGVwLnN0ZXBzLnB1c2goQXV0aG9yaXplUm91dGVTdGVwKTtcclxuXHJcbiAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9wZXJtaXNzaW9uJyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgUGVybWlzc2lvblN0b3JlLFxyXG4gIEF1dGhvcml6ZVNlcnZpY2VcclxufVxyXG4iXX0=
