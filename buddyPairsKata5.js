// Buddy Pairs - Kata 5

 


function buddy(start, limit) {
    const numPairs = [];
    for (let i = start; i <= limit; i++) {
        const numbers = [1];
        for (let j = 2; ; j++) {
            if (!(i % j)) {
                if (j < i / j) {
                    numbers.push(j);
                    numbers.push(i / j)
                }
                else { break }
            }
            else if (j > i / j) { break }
        }
        let tot = numbers.reduce((acc, num) => { return acc + num });
        if (numbers.length > 1) { numPairs.push([i, tot - 1].sort((a,b) => a-b)) }
    }
    
    //This part of the code needs work & needs to be as efficient ass possible
    
    numPairs.sort((a,b) => a-b);
    for (let i=0; i<numPairs.length; i++){
        if (numPairs.includes()){}
    }
    
    console.log(numPairs);
    /*
    
    for (let i = 0; i < numPairs.length; i++) {
        for (let j = i + 1; j < numPairs.length; j++) {
            if (numPairs[i].includes(numPairs[j])) {
                return numPairs[i];
            }
        }
    }
    */
    return 'Nothing';
}


// Tests
 
//console.log(buddy(48, 75));   
console.log(buddy(23, 100)); // Should be [48, 75]
//console.log(buddy(4952, 6539)); // Should be [5775, 6128] 
//console.log(buddy(381, 4318)); // Should be [1050, 1925]
//console.log(buddy(2382, 3679)); // Should be "Nothing"