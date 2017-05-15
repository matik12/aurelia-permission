import { FrameworkConfiguration } from 'aurelia-framework';
import PermissionStore from './permission-store';
import AuthorizeService from './authorize-service';
export interface Configuration {
    useDefaultRedirectRoute: (route: string) => void;
}
export declare function configure(framework: FrameworkConfiguration, configure: (permissionStore: PermissionStore, configuration: Configuration) => void): void;
export { PermissionStore, AuthorizeService };
