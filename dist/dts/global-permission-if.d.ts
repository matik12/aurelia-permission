import AuthorizationService from './authorization-service';
export declare class GlobalPermissionIf {
    private element;
    private authorizationService;
    can: string;
    check: boolean;
    readonly canPermissions: string[];
    constructor(element: Element, authorizationService: AuthorizationService);
    bind(): void;
    private removeElement();
}
