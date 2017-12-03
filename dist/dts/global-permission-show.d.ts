import AuthorizationService from './authorization-service';
export declare class GlobalPermissionShow {
    private authorizationService;
    can: string;
    check: boolean;
    readonly canPermissions: string[];
    private element;
    constructor(element: Element, authorizationService: AuthorizationService);
    bind(): void;
    private hideElement();
}
