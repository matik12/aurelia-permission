System.register(["aurelia-router", "./permission-store", "./authorize-route-step", "./authorize-service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(framework, config) {
        var permissionsStore = framework.container.get(permission_store_1.default);
        config(permissionsStore);
        framework.globalResources('./permission-only');
        framework.aurelia.start().then(function () {
            var appRouter = framework.container.get(aurelia_router_1.AppRouter);
            appRouter.pipelineProvider.steps.splice(3, 0, authorize_route_step_1.default);
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBT0EsbUJBQTBCLFNBQWlDLEVBQUUsTUFBa0M7UUFFN0YsSUFBTSxnQkFBZ0IsR0FBcUIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQWdCLENBQUMsQ0FBQztRQUVyRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV6QixTQUFTLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFFN0IsSUFBTSxTQUFTLEdBQWMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQVMsQ0FBQyxDQUFDO1lBQzFELFNBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsOEJBQWtCLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBakJNLDBCQUFnQjswQ0FFaEIsMkJBQWdCO1FBcUJ2QixDQUFDIiwiZmlsZSI6ImF1cmVsaWEtcGVybWlzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbmltcG9ydCBQZXJtaXNzaW9uc1N0b3JlIGZyb20gJy4vcGVybWlzc2lvbi1zdG9yZSc7XHJcbmltcG9ydCBBdXRob3JpemVSb3V0ZVN0ZXAgZnJvbSAnLi9hdXRob3JpemUtcm91dGUtc3RlcCc7XHJcbmltcG9ydCBBdXRob3JpemVTZXJ2aWNlIGZyb20gJy4vYXV0aG9yaXplLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcms6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNvbmZpZzogKHBlcm1pc3Npb25zU3RvcmUpID0+IHZvaWQpIHtcclxuXHJcbiAgY29uc3QgcGVybWlzc2lvbnNTdG9yZSA9IDxQZXJtaXNzaW9uc1N0b3JlPmZyYW1ld29yay5jb250YWluZXIuZ2V0KFBlcm1pc3Npb25zU3RvcmUpO1xyXG5cclxuICBjb25maWcocGVybWlzc2lvbnNTdG9yZSk7XHJcblxyXG4gIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vcGVybWlzc2lvbi1vbmx5Jyk7XHJcblxyXG4gIGZyYW1ld29yay5hdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiB7XHJcbiAgICAvLyBBZGQgYXV0aG9yaXplIHN0ZXAgYmVmb3JlIHZpZXctbW9kZWwgYWN0aXZhdGUgcHJlZGVmaW5lZCBwaXBlbGluZSBzdGVwXHJcbiAgICBjb25zdCBhcHBSb3V0ZXIgPSA8QXBwUm91dGVyPmZyYW1ld29yay5jb250YWluZXIuZ2V0KEFwcFJvdXRlcik7XHJcbiAgICAoPGFueT5hcHBSb3V0ZXIpLnBpcGVsaW5lUHJvdmlkZXIuc3RlcHMuc3BsaWNlKDMsIDAsIEF1dGhvcml6ZVJvdXRlU3RlcCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgUGVybWlzc2lvbnNTdG9yZSxcclxuICBBdXRob3JpemVTZXJ2aWNlXHJcbn1cclxuIl19
