import { FrameworkConfiguration } from 'aurelia-framework';
import PermissionStore from './permission-store';
import AuthorizationService from './authorization-service';
import { GlobalPermissionShow } from './global-permission-show';
import { GlobalPermissionEnable } from './global-permission-enable';
import { GlobalPermissionIf } from './global-permission-if';
import { PermissionFilterValueConverter } from './permission-filter';
export interface Configuration {
    useDefaultRedirectRoute: (route: string) => void;
}
export declare function configure(framework: FrameworkConfiguration, configure: (permissionStore: PermissionStore, configuration: Configuration) => void): void;
export { PermissionStore, AuthorizationService, GlobalPermissionShow, GlobalPermissionEnable, GlobalPermissionIf, PermissionFilterValueConverter };
