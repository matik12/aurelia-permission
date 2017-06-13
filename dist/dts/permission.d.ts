import AuthorizationService from './authorization-service';
import PermissionStore from './permission-store';
export declare class Permission {
    private authorizationService;
    private permissionStore;
    static Separator: string;
    only: string;
    disable: boolean;
    isActive: boolean;
    readonly onlyPermissions: string[];
    private element;
    private onNotAuthorized;
    private onAuthorized;
    constructor(element: Element, authorizationService: AuthorizationService, permissionStore: PermissionStore);
    bind(): void;
    onBind(): void;
    updateDisableBehaviour(): void;
    private hideElement();
    private showElement();
    private disableElement();
    private enableElement();
}
