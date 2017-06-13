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

## Default permission definition usage

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

## Enum like permission object usage

It is possible to create enum like permission object with all permissions to use it in diffrent authorization configurations instead of **magic strings** - string permisssion names, that are returned from API and can change.
First define module (or scoped object, but module is recommended), which defines all application permissions as values of object properites as in sample below.

```js
const UserPermission = {
  AddUsers: 'Add_Users',
  DeleteUsers: 'Delete_Users',
  ListUsers: 'List_Users',
}
```

Then in plugin configuration in permission store leverage usage of **definePermissionObject** instead of **definePermissions** method as follows:

```js
function configurePermissions(aurelia: Aurelia, permissionStore: PermissionStore, configuration: Configuration) {
  configuration.useDefaultRedirectRoute('not-authorized');

  userPromise
    .then((user: any) => {
      permissionStore.useDefaultDefinition(user.permissions);
      permissionStore.definePermissionObject(UserPermission /*, provide custom definition if needed or use default one as in setup above */)

      return user;
    });
```

Later on, use permission object properties i.e. when securing app routes

```js
{
  route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users',
  settings: {
    permission: {
      only: [UserPermission.ListUsers]
    }
  }
}
```

**Note:** When permission object is set, then listed 'only' authorize permission names in custom attribute **permission** must be permission object property names not values (actual API string permisssion names) i.e.
```html
// correct usage
<div permission="only: AddUsers">Can add users!</div>

// incorrect usage in case of permission object setup, otherwise it is a correct setup
<div permission="only: Add_Users">Can add users!</div>
```

This object method will define permissions for all values of properites

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

## Hide or disable elements in HTML templates based on user permissions

```html
<div permission="only: addUsers">Can add users!</div>
<div permission="only: deleteUsers">Can delete users!</div>
<div permission="only: addUsers, deleteUsers">Can add or delete users!</div>
<div permission="only: listUsers">Can list users!</div>

// The following input element will be disabled when user has neither listUsers nor deleteUsers permissions
<input type="text" permission="only: listUsers, deleteUsers; disable.bind: true">

// It is also possible to turn off permission check during attach lifecycle using is-active binded to ViewModel, where some conditions are met
<input type="text" permission="only: addUsers, deleteUsers; disable.bind: true; is-active.bind: true">
```

## Use AuthorizationService to implement custom application logic

```js
import { AuthorizationService } from 'aurelia-permission';

// Inject service via aurelia dependency injection
constructor(private authorizationService: AuthorizationService) { }

// Then use it in the ViewModel code
// i.e. define route in child router that will only be visible in navbar menu
// when user has 'listUsers' permission defined
{
  route: 'child-router',
  name: 'child-router',
  moduleId: 'child-router',
  nav: this.authorizationService.isAuthorized('listUsers'),
  title: 'Child Router'
}
```

## Use PermissionFilter value converter for dynamic menu generation or to filter out route collections

Plugin provides value converter for filtering out menu items or any collection based on permission only settings property.
This converter can be applied on child routers as well i.e. when you generate tabs based on child routes. Sample value converter usage is shown below.

```html
<li repeat.for="navigationItem of router.navigation | permissionFilter" class="navbar__item">
  <a href.bind="navigationItem.href" class="navbar__link"></a>
</li>
```

## API of plugin exported PermissionStore & AuthorizationService classes

```js
export interface PermissionDefinition {
    permission: string;
    definition: () => boolean;
}

export default class PermissionStore {
    static DefaultDefinition: (permissions: string[]) => (permission: string) => any;
    useDefaultDefinition(permissions: string[]): void;
    definePermission(permission: string, definition?: () => boolean): void;
    definePermissions(permissions: string[], definition?: (permission: string) => boolean): void;
    definePermissionObject(permissionObject: any, definition?: (permission: string) => boolean): void;
    getDefinition(permission: string): () => boolean;
    getPermissionName(permission: string): any;
}
```

```js
export default class AuthorizationService {
    isAuthorized(...permissions: string[]): boolean;
}
```

## Feature possible improvements

- [ ] Broadcast events on route navigation canceled - redirect and activating next route
- [ ] Support defining roles containing list of permissions
- [ ] Route permission configuration on parent route to protect all child routes with one definition ???
