import { FrameworkConfiguration, Aurelia } from 'aurelia-framework';
import { configure } from '../../src/aurelia-permission';

describe('The aurelia permission plugin configuration', () => {
  var configuration;
  var permissionStore;

  beforeEach(() => {
    configuration = new FrameworkConfiguration(new Aurelia());
  });

  it('should invoke callback with supplied store as parameter', () => {
    configure(configuration, param => {
      permissionStore = param;
    });

    expect(permissionStore).toBeDefined();
  });
});
