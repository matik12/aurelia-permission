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
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-permission', () => configurePermissions(aurelia));

  aurelia.start().then(() => aurelia.setRoot());
}

function configurePermissions(aurelia: Aurelia) {
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

  aurelia.use
    .plugin('aurelia-permission', (permissionsStore: PermissionsStore, configuration: Configuration) => {
      configuration.setDefaultRedirectRoute('not-authorized');

      permissionsStore.definePermissions(['addUsers', 'deleteUsers', 'listUsers'], (permission: string) => {
        return userPromise
          .then((user: any) => {
            const hasPermission = user.permissions.includes(permission);

            if (!hasPermission) {
              return Promise.reject(new Error('Current user has no required permissions.'));
            }

            return Promise.resolve(user);
          });
      });
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
