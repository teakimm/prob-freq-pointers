'use strict';
// add whatever parameters you deem necessary & write docstring

// take two arrays, return an object with keys and values built from the arrays
// if not enough values, corresponding key values should be null. if not keys,
// ignore extra values

/* create an empty object
 create a indexed for loop that loops over keys and adds corresponding value
 if value is undefined, value becomes null
 return object
*/

/** Takes two arrays, returns an object with keys from one array and values
from the other array. If not enough values, remaining key values will be null.
If not enough keys, ignores remaining values */
function twoArrayObject(keys, values) {
  const pairObj = {};

  for (let i = 0; i < keys.length; i++) {
    pairObj[keys[i]] = values[i] || null;
  }

  return pairObj;
}
