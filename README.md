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

## Update the Aurelia configuration file

In your Aurelia configuration file(most commonly main file) add the plugin and provide configuration for user permissions :
```js
import { PermissionsStore, Configuration } from 'aurelia-permission';

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
    .plugin('aurelia-permission', (permissionsStore: PermissionsStore, configuration: Configuration) =>
      configurePermissions(aurelia, permissionsStore, configuration));

  aurelia.start().then(() => aurelia.setRoot());

  // If your landing default page needs permissions to show UI properly then
  // chain starting aurelia app with resolving user promise i.e as below
  // Thanks to that permissions will be defined before navigate to first page
  userPromise.then(() => {
    aurelia.start().then(() => aurelia.setRoot());
  });
}

function configurePermissions(aurelia: Aurelia, permissionsStore: PermissionsStore, configuration: Configuration) {
  configuration.setDefaultRedirectRoute('not-authorized');

  userPromise
    .then((user: any) => {
      permissionsStore.definePermissions(
        ['addUsers', 'deleteUsers', 'listUsers'],
        // simple definition, the same for all permissions
        // it only checks if particular permission is in user's permissions array
        (permission: string) => user.permissions.includes(permission)
      );

      return user;
    });
}
```

**Note:** When listing 'only' acceptable permissions in route or in custom attribute the default logical operator is OR.
This means that if any of the listed permissions is set then user is authorized to see / use element or navigate to particular route.

## Configure routing to use authorization

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

## Hide or disable elements in HTML based on defined permissions

```html
<div permission="only: addUsers">Can add users!</div>
<div permission="only: deleteUsers">Can delete users!</div>
<div permission="only: addUsers, deleteUsers">Can add or delete users!</div>
<div permission="only: listUsers">Can list users!</div>

// The following input element will be disabled when user has neither listUsers nor deleteUsers permissions
<input type="text" permission="only: listUsers, deleteUsers; disable.bind: true">
```

## Use AuthorizeService to implement custom logic

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
