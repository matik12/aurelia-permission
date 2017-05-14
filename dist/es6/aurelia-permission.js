System.register(["aurelia-router", "./permission-store", "./authorize-route-step", "./authorize-service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(framework, config) {
        var permissionsStore = framework.container.get(permission_store_1.default);
        config(permissionsStore);
        var appRouter = framework.container.get(aurelia_router_1.AppRouter);
        var authorizePipelineStep = appRouter.pipelineProvider.steps.find(function (step) { return step.slotName === 'preActivate'; });
        authorizePipelineStep.steps.push(authorize_route_step_1.default);
        framework.globalResources('./permission-only');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBT0EsbUJBQTBCLFNBQWlDLEVBQUUsTUFBa0M7UUFDN0YsSUFBTSxnQkFBZ0IsR0FBcUIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQWdCLENBQUMsQ0FBQztRQUNyRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUd6QixJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBUyxDQUFDLENBQUM7UUFDckQsSUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6SCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUFrQixDQUFDLENBQUM7UUFFckQsU0FBUyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBZE0sMEJBQWdCOzBDQUVoQiwyQkFBZ0I7UUFrQnZCLENBQUMiLCJmaWxlIjoiYXVyZWxpYS1wZXJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IFBlcm1pc3Npb25zU3RvcmUgZnJvbSAnLi9wZXJtaXNzaW9uLXN0b3JlJztcclxuaW1wb3J0IEF1dGhvcml6ZVJvdXRlU3RlcCBmcm9tICcuL2F1dGhvcml6ZS1yb3V0ZS1zdGVwJztcclxuaW1wb3J0IEF1dGhvcml6ZVNlcnZpY2UgZnJvbSAnLi9hdXRob3JpemUtc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29yazogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY29uZmlnOiAocGVybWlzc2lvbnNTdG9yZSkgPT4gdm9pZCkge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zU3RvcmUgPSA8UGVybWlzc2lvbnNTdG9yZT5mcmFtZXdvcmsuY29udGFpbmVyLmdldChQZXJtaXNzaW9uc1N0b3JlKTtcclxuICBjb25maWcocGVybWlzc2lvbnNTdG9yZSk7XHJcblxyXG4gIC8vIENvbmZpZ3VyZSBwaXBlbGluZSBzdGVwIGZvciBhdXRob3JpemF0aW9uIGJlZm9yZSBhY3RpdmF0ZSBpcyBpbnZva2VkXHJcbiAgY29uc3QgYXBwUm91dGVyID0gZnJhbWV3b3JrLmNvbnRhaW5lci5nZXQoQXBwUm91dGVyKTtcclxuICBjb25zdCBhdXRob3JpemVQaXBlbGluZVN0ZXAgPSBhcHBSb3V0ZXIucGlwZWxpbmVQcm92aWRlci5zdGVwcy5maW5kKHN0ZXAgPT4geyByZXR1cm4gc3RlcC5zbG90TmFtZSA9PT0gJ3ByZUFjdGl2YXRlJzsgfSk7XHJcbiAgYXV0aG9yaXplUGlwZWxpbmVTdGVwLnN0ZXBzLnB1c2goQXV0aG9yaXplUm91dGVTdGVwKTtcclxuXHJcbiAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9wZXJtaXNzaW9uLW9ubHknKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBQZXJtaXNzaW9uc1N0b3JlLFxyXG4gIEF1dGhvcml6ZVNlcnZpY2VcclxufVxyXG4iXX0=
