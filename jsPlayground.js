// Javascript Playground //

console.log("Test 1");

const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        a+b>10
        ? resolve(a+b)
        : reject();
    });
}

console.log("Test 2");

sum(4, 7)
.then(value => {
    console.log(value)
})
.catch((error) => {
    console.error("There was an error")
})
.finally(() => {
    console.log("Done")
});

console.log("Test 3");





// Great example of using recursion to solve a simple dice problem.
// Study this in more detail at a later time.

/*
function rolldiceSumProb(arr, totalSides){
    if (arr<totalSides || arr>totalSides*6) return 0;
    if (totalSides===0) return 1;
    let p = 0;
    for (let i=1; i<=6; i++) p += rolldiceSumProb(arr-i, totalSides-1); 
    return p/6;
}

console.log(rolldiceSumProb(7,2)); 
*/
