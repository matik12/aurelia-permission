import AuthorizeService from './authorize-service';
export declare class Permission {
    private authorizeService;
    static Separator: string;
    only: string;
    disable: boolean;
    readonly onlyPermissions: string[];
    private element;
    private onNotAuthorized;
    private onAuthorized;
    constructor(element: Element, authorizeService: AuthorizeService);
    bind(): void;
    disableChanged(): void;
    private hideElement();
    private showElement();
    private disableElement();
    private enableElement();
}
