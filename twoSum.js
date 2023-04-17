
// 两数之和
const twoSum = (nums, target) =>{
  for (let  i = 0; i < nums.length; i++){
    for (let j = i+1; j < nums.length; j++){
      if (nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  // return [-1, -1]
}
console.log(twoSum([1,2,3,4,5],3))

// 回文数
const isPalindrome = x => {
  if(x === x.toString().split('').reverse().join('')) {
    return true
  }else {
    return false
  }
}
console.log(isPalindrome(121))
