let array = [30, 20, 10, 4, 3, 1];
let result = 80;

function checkSumNumber() {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if(sum < result) {
        return false;
    } else if( sum === result) {
        return true;
    }else {
        return checkSubArray(array, 0);
    }
}

function checkSubArray (array, previousSum) {
    
    if(array[0] > result || previousSum + array[0] > result) {
        array.shift();
        return checkSubArray(array, previousSum);
    }else if(array[0] === result || previousSum + array[0] === result) {
        return true;
    }else {
        let newSum = array[0] + previousSum;
        array.shift()
        if(array.length > 0) {
            return checkSubArray(array, newSum);
        } else {
            return false;
        }
    }

}
console.log(checkSumNumber())