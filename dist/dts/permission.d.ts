import AuthorizeService from './authorize-service';
import PermissionStore from './permission-store';
export declare class Permission {
    private authorizeService;
    private permissionStore;
    static Separator: string;
    only: string;
    disable: boolean;
    readonly onlyPermissions: string[];
    private element;
    private onNotAuthorized;
    private onAuthorized;
    constructor(element: Element, authorizeService: AuthorizeService, permissionStore: PermissionStore);
    bind(): void;
    onBind(): void;
    updateDisableBehaviour(): void;
    private hideElement();
    private showElement();
    private disableElement();
    private enableElement();
}
