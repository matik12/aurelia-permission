import { FrameworkConfiguration } from 'aurelia-framework';
import PermissionsStore from './permission-store';
import AuthorizeService from './authorize-service';
export interface Configuration {
    setDefaultRedirectRoute: (route: string) => void;
}
export declare function configure(framework: FrameworkConfiguration, configure: (permissionsStore: PermissionsStore, configuration: Configuration) => void): void;
export { PermissionsStore, AuthorizeService };
