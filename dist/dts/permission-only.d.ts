import AuthorizeService from './authorize-service';
export declare class PermissionOnly {
    private element;
    private authorizeService;
    static StyleAttributeName: string;
    static PermissionSeparator: string;
    private permissions;
    constructor(element: Element, authorizeService: AuthorizeService);
    attached(): void;
    valueChanged(newValue: string): void;
    private hideElement();
    private showElement();
}
