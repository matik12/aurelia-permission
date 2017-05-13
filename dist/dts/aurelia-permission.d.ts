import { FrameworkConfiguration } from 'aurelia-framework';
import PermissionsStore from './permission-store';
import AuthorizeService from './authorize-service';
export declare function configure(framework: FrameworkConfiguration, config: (permissionsStore) => void): void;
export { PermissionsStore, AuthorizeService };
