"use strict";

//# Program 1

// function subarraySum(num, k) {
//   let count = 0;
//   let sum = 0;
//   const prefixSum = {};

//   prefixSum[0] = 1;

//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];

//     if (prefixSum.hasOwnProperty(sum - k)) {
//       count += prefixSum[sum - k];
//     }

//     if (prefixSum.hasOwnProperty(sum)) {
//       prefixSum[sum] += 1;
//     } else {
//       prefixSum[sum] = 1;
//     }
//   }

//   return count;
// }
// const num = [1, 1, 1];
// const k = 2;
// const result = subarraySum(num, k);
// console.log(result);

// # 2 Program 2
// function mergeIntervals(intervals) {
//   intervals.sort(function (a, b) {
//     return a[0] - b[0];
//   });
//   let mergedIntervals = [];
//   let currentInterval = intervals[0];
//   mergedIntervals.push(currentInterval);
//   for (let i = 1; i < intervals.length; i++) {
//     let start = intervals[i][0];
//     let end = intervals[i][1];
//     if (start <= currentInterval[1]) {
//       currentInterval[1] = Math.max(currentInterval[1], end);
//     } else {
//       currentInterval = [start, end];
//       mergedIntervals.push(currentInterval);
//     }
//   }
//   return mergedIntervals;
// }
// let intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// let merged = mergeIntervals(intervals);
// console.log(merged);

//3 Program 3

// function countDistinctWays(n) {
//   if (n <= 2) {
//     return n;
//   }
//   let prev1 = 1;
//   let prev2 = 2;
//   for (let i = 3; i <= n; i++) {
//     const current = prev1 + prev2;
//     prev1 = prev2;
//     prev2 = current;
//   }
//   return prev2;
// }
// console.log(countDistinctWays(3));

//4 program 4

// function longestSubstring(str) {
//   let maxLength = 0;
//   let start = 0;
//   let charMap = {};
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];
//     if (charMap[currentChar] >= start) {
//       start = charMap[currentChar] + 1;
//     }
//     charMap[currentChar] = i;
//     const currentLength = i - start + 1;
//     maxLength = Math.max(maxLength, currentLength);
//   }
//   return maxLength;
// }
// const input = "abcabcbb";
// const length = longestSubstring(input);
// console.log(length);

//5 program 5
// function maxArea(heights) {
//   let maxArea = 0;
//   let left = 0;
//   let right = heights.length - 1;
//   while (left < right) {
//     const minHeight = Math.min(heights[left], heights[right]);
//     const currentArea = minHeight * (right - left);
//     if (currentArea > maxArea) {
//       maxArea = currentArea;
//     }
//     if (heights[left] < heights[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxArea;
// }
// const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const maxWater = maxArea(heights);
// console.log(maxWater);

//6 program 6

// function nextPermutation(nums) {
//   let i = nums.length - 1;
//   while (i > 0 && nums[i] <= nums[i - 1]) {
//     i--;
//   }
//   if (i <= 0) {
//     reverse(nums, 0, nums.length - 1);
//   } else {
//     let j = nums.length - 1;
//     while (nums[j] <= nums[i - 1]) {
//       j--;
//     }

//     swap(nums, i - 1, j);

//     reverse(nums, i, nums.length - 1);
//   }

//   return nums;
// }

// function reverse(nums, start, end) {
//   while (start < end) {
//     swap(nums, start, end);
//     start++;
//     end--;
//   }
// }

// function swap(nums, i, j) {
//   const temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }
// const nums = [1, 2, 3];
// const result = nextPermutation(nums);
// console.log(result);

//7 program 7

// function firstMissingPositive(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] <= 0 || nums[i] > nums.length) {
//       nums.splice(i, 1);
//     } else if (nums[i] !== nums[nums[i] - 1]) {
//       const temp = nums[i];
//       nums[i] = nums[temp - 1];
//       nums[temp - 1] = temp;
//     } else {
//       i++;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       return i + 1;
//     }
//   }

//   return nums.length + 1;
// }

// const nums = [3, 4, -1, 1];
// const result = firstMissingPositive(nums);
// console.log(result);

//8 Program 8

// function canAttendMeetings(intervals) {
//   intervals.sort(function (a, b) {
//     return a[0] - b[0];
//   });
//   for (var i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] < intervals[i - 1][1]) {
//       return false;
//     }
//   }
//   return true;
// }
// var meetings = [
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
// var canAttend = canAttendMeetings(meetings);
// console.log(canAttend);

//9 program 9

let divisionOne;
function domManipulation() {
  divisionOne = document.getElementsByTagName(`div`);
}
domManipulation();
console.log(divisionOne);

//10 program 10
function findMissingLetter(array) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let start = alphabet.indexOf(array[0]);

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== alphabet[start + i]) {
      return alphabet[start + i];
    }
  }

  return null;
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
