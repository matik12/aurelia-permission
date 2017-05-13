import AuthorizeService from './authorize-service';
export declare class PermissionOnlyCustomAttribute {
    private element;
    private authorizeService;
    static StyleAttributeName: string;
    private roles;
    constructor(element: Element, authorizeService: AuthorizeService);
    attached(): void;
    valueChanged(newValue: string): void;
    private hideElement();
    private showElement();
}
