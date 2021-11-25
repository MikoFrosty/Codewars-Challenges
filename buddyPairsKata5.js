// Buddy Pairs - Kata 5
// COMPLETED

function buddy(start, limit) {  
    for (let i = start; i<=limit; i++) {
        let tot = sumOfDiv(i)-1;
        if (tot > 1 && tot >= start) {
            if (sumOfDiv(tot)-1===i){return [i, tot]}
        }
    }
    return 'Nothing'
    function sumOfDiv(num) {
        const numbers = [1]; 
        for (let j = 2; ; j++) {
            if (!(num % j)) {
                if (j < num / j) {
                    numbers.push(j);
                    numbers.push(num / j)
                }
                else { break }                } 
        else if (j > num / j) { break } 
        }
        return numbers.reduce((acc, num) => { return acc + num });
    }
}


// Tests
 
//console.log(buddy(48, 75));    
//console.log(buddy(23, 4669)); // Should be [48, 75]
//console.log(buddy(4952, 6539)); // Should be [5775, 6128] 
//console.log(buddy(381, 4318)); // Should be [1050, 1925]
//console.log(buddy(2382, 3679)); // Should be "Nothing"
//console.log(buddy(3234, 9664)); // time = 0.78 seconds
//console.log(buddy(1071625, 1103735)); // Should be [ 1081184, 1331967 ]   // last two consoles - 14.879
//console.log(buddy(264211, 267650)); // Should be [266000, 507759]






// Legacy code

/* 
    //numPairs.sort((a,b) => a[0]-b[0]); // Sort to easily finding matching pairs, lowest should be found first
    numPairs.sort((a,b) => {return a[0]===b[0]&&a[1]===b[1]?0:1 });
    console.log(numPairs);
    //let pairCandidate = [];
    // Find the first match by looking in each cell, and then checking neighbor, if match found. return it
    for (let i=0; i<numPairs.length-1; i++){
        if (numPairs[i][0]===numPairs[i+1][0]&&numPairs[i][1]===numPairs[i+1][1]&&numPairs[i][0]<=limit){return numPairs[i].splice(0,2);}  //pairCandidate.push(numPairs[i])}
    }
    */

 
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
        /* This is now a function "SumOfDiv"
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
        */
        // if number is prime, do nothing. Otherwise sum divisors, sort it (Why sort it now?), and stor in numPairs



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