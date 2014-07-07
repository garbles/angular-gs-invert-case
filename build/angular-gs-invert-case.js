if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports){
  module.exports = 'gs.invert-case';
}

(function(window, angular, undefined) {'use strict';

angular.module('gs.invert-case', ['gs.to-camel-case', 'gs.to-snake-case'])
.factory('invertCase', ['toCamelCase', 'toSnakeCase',
function (toCamelCase, toSnakeCase) {
  function replaceKey (object, toCase, key) {
    var newKey, value;

    newKey = toCase(key);

    if (newKey !== key) {
      object[newKey] = object[key];
      delete object[key];
    }

    if (_.isObject(value)) {
      invertCase(value);
    }

    return object;
  }

  function invertCase (object, toCase) {
    var replaceKeyPartial = _.partial(replaceKey, object, toCase);

    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        replaceKeyPartial(key);
      }
    }

    return object;
  }

  return function (object, toCase) {
    var to, from, fn;

    switch (toCase) {
      case 'camel':
        to = toCamelCase;
        from = toSnakeCase;
        break;
      case 'snake':
        to = toSnakeCase;
        from = toCamelCase;
        break;
      default:
        throw 'invertCase: toCase must be \'snake\' or \'camel\'';
    }

    invertCase(object, to);

    if (_.isFunction(object.addSerializer)) {
      fn = _.partialRight(invertCase, from);
      object.addSerializer(fn);
    }

    return object;
  };
}]);

})(window, window.angular);
