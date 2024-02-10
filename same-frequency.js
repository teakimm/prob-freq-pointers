'use strict';
// add whatever parameters you deem necessary & write docstring

/* convert numbers to strings, then build frq counter, compare freq
 */


/** Takes two numbers and determines if  both have same frequency of digits.
 * Returns true if they do, false otherwise */
function sameFrequency(num1, num2) {
  const str1 = makeStringFromNum(num1);
  const str2 = makeStringFromNum(num2);

  const freq1 = countFrequencies(str1);
  const freq2 = countFrequencies(str2);

  for (const key in freq1) {
    if(freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

/** Makes number into string */
function makeStringFromNum(num) {
  return num.toString();
}

/** creates an object with character freqencies in a given string */
function countFrequencies(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}