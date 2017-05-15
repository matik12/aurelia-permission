[![npm Version](https://img.shields.io/npm/v/aurelia-permission.svg)](https://www.npmjs.com/package/aurelia-permission)
[![Build Status](https://travis-ci.org/matik12/aurelia-permission.svg?branch=master)](https://travis-ci.org/matik12/aurelia-permission)

---

#### NPM package [aurelia-permission](https://www.npmjs.com/package/aurelia-permission)

## What is aurelia-permission plugin?
aurelia-permission is a plugin for [Aurelia](http://aurelia.io/) to provide support of user authorization throughout the SPA app using defined user permissions.

# Installation prerequisites
Obviously, you need to have installed [NodeJs](https://nodejs.org/) and [Gulp](http://gulpjs.com/). aurelia-permission was based on [Aurelia plugin](https://github.com/aurelia/skeleton-plugin) and requires only standard Aurelia libraries. It's highly recommended to use JSPM for package managment.

# Installation
```
jspm install npm:aurelia-permission
```
Using Npm:
```
npm install aurelia-permission --save
```
Using typescript you can install definitions:
```
typings install github:matik12/aurelia-permission --save
```

# Usage guide

## Configure plugin in main configuration file & define avaiable permissions using PermissionStore

In your Aurelia configuration file(most commonly main file) add the plugin and provide configuration for user permissions :
```js
import { PermissionStore, Configuration } from 'aurelia-permission';

const sampleUser = {
  id: 1,
  permissions: [
    'addUsers'
    ,'deleteUsers'
    ,'listUsers'
  ]
}
const userPromise = new Promise(resolve => {
  // Simulate promise getting user data including permissions from API
  setTimeout(() => resolve(sampleUser), 1000);
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-permission', (permissionStore: PermissionStore, configuration: Configuration) =>
      configurePermissions(aurelia, permissionStore, configuration));

  aurelia.start().then(() => aurelia.setRoot());

  // If your landing default page needs permissions to show UI properly then
  // chain starting aurelia app with resolving user promise i.e as below
  // Thanks to that permissions will be defined before navigate to first page
  userPromise.then(() => {
    aurelia.start().then(() => aurelia.setRoot());
  });
}

function configurePermissions(aurelia: Aurelia, permissionStore: PermissionStore, configuration: Configuration) {
  configuration.useDefaultRedirectRoute('not-authorized');

  userPromise
    .then((user: any) => {
      const allApplicationPermissions = ['addUsers', 'deleteUsers', 'listUsers'];

      permissionStore.definePermissions(
        allApplicationPermissions,
        // simple custom definition, the same function for all permissions
        // it only checks if particular permission is included in user's permissions array
        // if permissions need to have different definitions, then use
        // permissionStore.definePermissions() method for each specific permission
        (permission: string) => {
          console.log('Custom definition function');
          return user.permissions.includes(permission)
        }
      );

      return user;
    });
}
```

**Note:** When listing 'only' acceptable permissions in route or in custom attribute the default logical operator is OR.
This means that if any of the listed permissions is set then user is authorized to see / use element or navigate to particular route.

## Use default permission definition

When defining user permissions, it is possible to use default definition function instead of providing custom implementation as above.
This default definition function simplly checks if particular permission exists in the supplied string array of user permissions.
If this is the case, use code as shown below to simplify implementation and plugin configuration.

```js
userPromise
  .then((user: any) => {
    const allApplicationPermissions = ['addUsers', 'deleteUsers', 'listUsers'];

    permissionStore.useDefaultDefinition(user.permissions);
    permissionStore.definePermissions(allApplicationPermissions);

    return user;
  });
```

## Secure page routes using user permissions authorization

Using list of permissions and default redirect route if user is not authorized.

```js
{
  route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users',
  settings: {
    permission: {
      only: ['listUsers']
    }
  }
}
```

or setting **redirectTo** property to define route to redirect to in case user is not authorized.

```js
{
  route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users',
  settings: {
    permission: {
      only: ['listUsers'],
      redirectTo: 'child-router'
    }
  }
}
```

## Hide or disable elements in HTML based on user permissions

```html
<div permission="only: addUsers">Can add users!</div>
<div permission="only: deleteUsers">Can delete users!</div>
<div permission="only: addUsers, deleteUsers">Can add or delete users!</div>
<div permission="only: listUsers">Can list users!</div>

// The following input element will be disabled when user has neither listUsers nor deleteUsers permissions
<input type="text" permission="only: listUsers, deleteUsers; disable.bind: true">
```

## Use AuthorizeService to implement custom application logic

```js
import { AuthorizeService } from 'aurelia-permission';

// Inject service via aurelia dependency injection
constructor(private authorizeService: AuthorizeService) { }

// Then use it in the ViewModel code
// i.e. define route in child router that will only be visible in navbar menu
// when user has 'listUsers' permission defined
{
  route: 'child-router',
  name: 'child-router',
  moduleId: 'child-router',
  nav: this.authorizeService.isAuthorized('listUsers'),
  title: 'Child Router'
}
```

## API of plugin exported PermissionStore & AuthorizeService classes

```js
export interface PermissionDefinition {
    permission: string;
    definition: () => boolean;
}

export default class PermissionStore {
    static DefaultDefinition: (permissions: string[]) => (permission: string) => any;
    definePermission(permission: string, definition?: () => boolean): void;
    definePermissions(permissions: string[], definition?: (permission: string) => boolean): void;
    getDefinition(permission: string): () => boolean;
    useDefaultDefinition(permissions: string[]): void;
}
```

```js
export default class AuthorizeService {
    isAuthorized(...permissions: string[]): boolean;
}
```
