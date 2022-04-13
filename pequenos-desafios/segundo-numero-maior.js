array1 = [2, 3, 6, 6, 5];
array2 = [10, 11, 16, 8, 0];

function getSecondLargest(nums) {
    nums.sort( function(a, b) {
        return b - a;
    });

    let firstBiggestNumber = 0;    
    
    let secondBiggestNumber = 0;
    
    for(let i = 0; i < nums.length; i++){   
        if(nums[i] > firstBiggestNumber) {
            firstBiggestNumber = nums[i];
        }
        if(nums[i] < firstBiggestNumber && nums[i] > secondBiggestNumber){
            secondBiggestNumber = nums[i];            
        }
    }
    
   
    return secondBiggestNumber;     
}

console.log(getSecondLargest(array1)); 
console.log (getSecondLargest(array2));

