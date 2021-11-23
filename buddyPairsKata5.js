// Buddy Pairs - Kata 5

 
// Refactor for performance

function buddy(start, limit) {
    const numPairs = [], // Number Pairs include the number and the sum of all divisers for that number
          iEnd = limit*2; // The ending for the loop need to be higher than limit because
                          //     the second number in the pair can be higher than the limit 
    for (let i = start; i<=iEnd; i++) {  // Need to check all numbers between start and limit*2
        
        // Not working right - Purpose: i should skip past numbers that are garanteed to not be a pair
        //                      The first number in the pair could be any number between start and limit
        //                       but once i is beyond limit, only numbers that have already shown up need to be checked    
        /*
        if (i>limit){
            console.log(numPairs);
            //numPairs.sort((a,b) => a[0]-b[0]);
            if (numPairs[i-limit+1] === undefined){i=iEnd+1}
            
            while (i!==numPairs[i-limit+1][1] && i<=iEnd) {
                //console.log(numPairs[i-limit+1]);
                i++;
                if (numPairs[i-limit+1] === undefined){i=iEnd+1; break;}
            }
        }
        */

        const numbers = [1]; // holds all divisers found for i. 1 is included from the start by default 
        for (let j = 2; ; j++) { // Check all possible divisors for each number (i)
            if (!(i % j)) { // if divisor found
                if (j < i / j) { // divisors and inverse divisors will be logged next, so this if statement
                                 //    stops the loggin if j passes the threshold of sqrt of i 
                    numbers.push(j); // log divisor into numbers array
                    numbers.push(i / j) // log inverse of divisor 
                }
                else { break } // once j is higher than needed, we want to end the loop
            } // both of these breaks might be reduntant, so this should be refactored
            else if (j > i / j) { break } // the final break here checks again for if j is too high
        }
        // Divisor loop is now completed and we want to turn it into a number pair next
        let tot = numbers.reduce((acc, num) => { return acc + num }); // summing divsors and storing in tot
        // if number is prime, do nothing. Otherwise sum divisors, sort it (Why sort it now?), and stor in numPairs
        if (numbers.length > 1) { numPairs.push([i, tot - 1].sort((a,b) => a-b));}// numPairs[numPairs.length-1].push(i); }
    }
    numPairs.sort(); // Sort to easily finding matching pairs, lowest should be found first
    //let pairCandidate = [];
    // Find the first match by looking in each cell, and then checking neighbor, if match found. return it
    for (let i=0; i<numPairs.length-1; i++){
        if (numPairs[i][0]===numPairs[i+1][0]&&numPairs[i][1]===numPairs[i+1][1]){return numPairs[i];}  //pairCandidate.push(numPairs[i])}
    }
    //This part of the code needs work & needs to be as efficient as possible
    // Need to find quickest way to compare numbers in array to find match

    // Too slow
    /*
     for (let i = 0; i < numPairs.length; i++) {
        let str = numPairs[i].join('');
        for (let j = i + 1; j < numPairs.length; j++) {
            if (str === numPairs[j].join('')) {
                return numPairs[i];
            }
        }
    }
    */
    
     // Slowest
    /*
     for (let i=0; i<numPairs.length; i++){
        let str = numPairs[i].join(' ');  
        let match = 0;
        numPairs.forEach(num => num.join(' ')===str?match++:0);
        if (match===2){return str.split(' ');}           
    } 
    */
    return 'Nothing'; // if no match is found, this will execute
}


// Tests
 
//console.log(buddy(48, 75));    
//console.log(buddy(23, 100)); // Should be [48, 75]
//console.log(buddy(4952, 6539)); // Should be [5775, 6128] 
//console.log(buddy(381, 4318)); // Should be [1050, 1925]
//console.log(buddy(2382, 3679)); // Should be "Nothing"
//console.log(buddy(3234, 9664)); // time = 0.78 seconds
console.log(buddy(1071625, 1103735)); // Should be [ 1081184, 1331967 ]   // last two consoles - 14.879
//console.log(buddy(264211, 267650)); // Should be [266000, 507759]