import { FrameworkConfiguration } from 'aurelia-framework';
import RoleStore from './role-store';
import AuthorizeService from './authorize-service';
export declare function configure(framework: FrameworkConfiguration, config: (roleStore) => void): void;
export { RoleStore, AuthorizeService };
