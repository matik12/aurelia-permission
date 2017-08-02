import { FrameworkConfiguration } from 'aurelia-framework';
import PermissionStore from './permission-store';
import AuthorizationService from './authorization-service';
import { Permission } from './permission';
import { PermissionFilterValueConverter } from './permission-filter';
export interface Configuration {
    useDefaultRedirectRoute: (route: string) => void;
}
export declare function configure(framework: FrameworkConfiguration, configure: (permissionStore: PermissionStore, configuration: Configuration) => void): void;
export { PermissionStore, AuthorizationService, Permission, PermissionFilterValueConverter };
