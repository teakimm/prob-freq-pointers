'use strict';
// add whatever parameters you deem necessary & write docstring

/* take an array, move negative numbers to the right of the array. positives to
the left. doesn't need to be sorted. must return original array */

function separatePositive(nums) {
  let left = 0
  let right = nums.length - 1;

  //[-1,3,5,-6,2]
  while(left < right) {
    while(nums[left] > 0) {
      left++;
    }
    while(nums[right] < 0) {
      right--;
    }
    [nums[left],nums[right]] = [nums[right],nums[left]]
    right--
    left++;
  }
  return nums;
}
