var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let min = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min=j;
      }
    }
    nums[min]*=multiplier
  }
  return nums;
};
let nums =[2,1,3,5,6],
  k = 5,
  multiplier = 2;

console.log(getFinalState(nums, 5, 2));
