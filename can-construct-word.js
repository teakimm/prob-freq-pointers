"use strict";
// add whatever parameters you deem necessary & write doc comment

//inputs: string, string
//output: boolean

/* create a freq counter
look at the keys of the word and see if the letters as at least that many
occourances*/


/** Checks to see if a given word can be made with the given letters.
 * If the word can be made with the letters, return true. Otherwise, return
 * false.
 */
function canConstructWord(word, letters) {
  if(letters.length === 0) {
    return false;
  }

  const wordFreq = countFrequencies(word);
  const letterFreq = countFrequencies(letters);

  for (const key in wordFreq) {
    if(!(key in letterFreq)) {
      return false;
    }
    if(wordFreq[key] > letterFreq[key]) {
      return false;
    }
  }
  return true;
}

/** creates an object with character freqencies in a given string */
function countFrequencies(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}