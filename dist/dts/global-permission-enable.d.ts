import AuthorizationService from './authorization-service';
export declare class GlobalPermissionEnable {
    private authorizationService;
    can: string;
    check: boolean;
    readonly canPermissions: string[];
    private element;
    constructor(element: Element, authorizationService: AuthorizationService);
    bind(): void;
    private disableElement();
}
