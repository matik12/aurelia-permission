import AuthorizationService from './authorization-service';
export declare class PermissionFilterValueConverter {
    private authorizationService;
    constructor(authorizationService: AuthorizationService);
    toView(array: any): any;
    filterExpression(item: any): boolean;
}
