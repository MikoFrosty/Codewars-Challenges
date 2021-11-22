// Buddy Pairs - Kata 5

 
// Refactor for performance

function buddy(start, limit) {
    const numPairs = [],
          iEnd = limit;//*2;
          //counter = 0;
    for (let i = start; i<iEnd; i++) {
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
        if (numbers.length > 1) { numPairs.push([i, tot - 1].sort((a,b) => a-b));}// numPairs[numPairs.length-1].push(i); }
        //while (i>limit && i!===numPairs[counter][1] && i<iEnd && counter<numPairs.length) {counter++}
    }
    numPairs.sort();
    //let pairCandidate = [];
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
    return 'Nothing';
}


// Tests
 
console.log(buddy(48, 75));    
//console.log(buddy(23, 100)); // Should be [48, 75]
//console.log(buddy(4952, 6539)); // Should be [5775, 6128] 
//console.log(buddy(381, 4318)); // Should be [1050, 1925]
//console.log(buddy(2382, 3679)); // Should be "Nothing"
//console.log(buddy(3234, 9664)); // time = 0.78 seconds
//console.log(buddy(1071625, 1103735)); // Should be [ 1081184, 1331967 ]   // last two consoles - 14.879
//console.log(buddy(264211, 267650)); // Should be [266000, 507759]