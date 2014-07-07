# angular-gs-invert-case

[![Build Status](https://secure.travis-ci.org/garbles/angular-gs-invert-case.png?branch=master)](https://travis-ci.org/garbles/angular-gs-invert-case)

Inverts the case (snake or camel) of an entire object

### Installing

`bower install angular-gs-invert-case`

### Using

Include the package in your application:

```javascript
angular.module('app', ['gs.invert-case']);
```

Pass objects into invertCase with either 'snake' or 'camel' as the second argument

```javascript
app.controller('Ctrl', function (invertCase) {
  var camel = { aeeBeeCee: 'gabe', deeEeeEff: 'chelsea', gee: 'doge' },
    snake = { run_dog_run: 'go', bigHat: 'bye' };

  invertCase(camel, 'snake'); // => { aee_bee_cee: 'gabe', dee_eee_eff: 'chelsea', gee: 'doge' }
  invertCase(snake, 'camel'); // => { runDogRun: 'go', bigHat: 'bye' }

});
```
