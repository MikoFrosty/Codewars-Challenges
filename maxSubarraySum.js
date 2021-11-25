// Maximum subarray sum - Kata 5
// COMPLETED


var maxSequence = function(arr){
    let greatestSum = 0;
    let tempSum = 0;
    for (let i = 0; i<arr.length; i++){
        if (tempSum<0){tempSum = 0}
        tempSum += arr[i];
        if (tempSum>greatestSum){greatestSum=tempSum}
    }    
    return greatestSum;
}





console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Should be 6