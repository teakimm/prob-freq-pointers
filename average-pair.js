"use strict";
// add whatever parameters you deem necessary & write docstring

//inputs : sorted array of numbers, and a target average
//output : boolean

/* create a left and right pointer, and we loop through the array
   and find the average of left and right. if it's the target, return true,
   otherwise, change the pointer depending on the calculated average
   if no average can equate to target, return false */



/** Sees if there are two values in nums whose average is equal to targetAvg.
 * returns true if there is, otherwise return false;
*/
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let currentAvg = (nums[left] + nums[right]) / 2;
    if(currentAvg === targetAvg) {
      return true;
    } else if(currentAvg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

