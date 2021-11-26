// Sum of pairs - Kata 5


function sumPairs(ints, s) {
    /*
    // Try to sort so that if a + b = s, they are next to each other in [0] and [1]
    ints.sort((a,b) => a+b===s?a-b:1);
    console.log(ints);
    */
    let nums = [];
    for (let i = 0; i < ints.length; i++) {
        if (ints[i] >= s && s > 0) { continue; }
        if (ints[i] <= s && s < 0) { continue; }
        for (let j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] === s) {
                nums.push([ints[i], ints[j], j]);
                // broken if (i+1>nums[nums.length-1][2]){return [nums[num.length-1][0],num[nums.length-1][1]]}
            }
        }
    }

    return undefined;

}




//console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
//console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
//console.log(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
//console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
//console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
//console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
//console.log(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
//console.log(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");