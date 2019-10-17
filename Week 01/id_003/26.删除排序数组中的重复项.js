var removeDuplicates = function(nums) {
    let i = 0;
    for(let j=1; i < nums.length-1; ){
        if(nums[j]==nums[j]){
            i++;
            nums[i] = nums[j++];
        }
    }
    return i;
};
