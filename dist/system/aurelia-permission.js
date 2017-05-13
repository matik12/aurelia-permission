System.register(["aurelia-router", "./role-store", "./authorize-route-step", "./authorize-service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(framework, config) {
        var roleStore = framework.container.get(role_store_1.default);
        config(roleStore);
        framework.globalResources('./permission-only');
        framework.aurelia.start().then(function () {
            var appRouter = framework.container.get(aurelia_router_1.AppRouter);
            appRouter.pipelineProvider.steps.splice(3, 0, authorize_route_step_1.default);
        });
    }
    exports_1("configure", configure);
    var aurelia_router_1, role_store_1, authorize_route_step_1, authorize_service_1;
    return {
        setters: [
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (role_store_1_1) {
                role_store_1 = role_store_1_1;
            },
            function (authorize_route_step_1_1) {
                authorize_route_step_1 = authorize_route_step_1_1;
            },
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
            }
        ],
        execute: function () {
            exports_1("RoleStore", role_store_1.default);
            exports_1("AuthorizeService", authorize_service_1.default);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBT0EsbUJBQTBCLFNBQWlDLEVBQUUsTUFBMkI7UUFFdEYsSUFBTSxTQUFTLEdBQWMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQVMsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQixTQUFTLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFFN0IsSUFBTSxTQUFTLEdBQWMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQVMsQ0FBQyxDQUFDO1lBQzFELFNBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsOEJBQWtCLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBakJNLG9CQUFTOzBDQUVULDJCQUFnQjtRQXFCdkIsQ0FBQyIsImZpbGUiOiJhdXJlbGlhLXBlcm1pc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgUm9sZVN0b3JlIGZyb20gJy4vcm9sZS1zdG9yZSc7XHJcbmltcG9ydCBBdXRob3JpemVSb3V0ZVN0ZXAgZnJvbSAnLi9hdXRob3JpemUtcm91dGUtc3RlcCc7XHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcms6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNvbmZpZzogKHJvbGVTdG9yZSkgPT4gdm9pZCkge1xyXG5cclxuICBjb25zdCByb2xlU3RvcmUgPSA8Um9sZVN0b3JlPmZyYW1ld29yay5jb250YWluZXIuZ2V0KFJvbGVTdG9yZSk7XHJcblxyXG4gIGNvbmZpZyhyb2xlU3RvcmUpO1xyXG5cclxuICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL3Blcm1pc3Npb24tb25seScpO1xyXG5cclxuICBmcmFtZXdvcmsuYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gQWRkIGF1dGhvcml6ZSBzdGVwIGJlZm9yZSB2aWV3LW1vZGVsIGFjdGl2YXRlIHByZWRlZmluZWQgcGlwZWxpbmUgc3RlcFxyXG4gICAgY29uc3QgYXBwUm91dGVyID0gPEFwcFJvdXRlcj5mcmFtZXdvcmsuY29udGFpbmVyLmdldChBcHBSb3V0ZXIpO1xyXG4gICAgKDxhbnk+YXBwUm91dGVyKS5waXBlbGluZVByb3ZpZGVyLnN0ZXBzLnNwbGljZSgzLCAwLCBBdXRob3JpemVSb3V0ZVN0ZXApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFJvbGVTdG9yZSxcclxuICBBdXRob3JpemVTZXJ2aWNlXHJcbn1cclxuIl19
