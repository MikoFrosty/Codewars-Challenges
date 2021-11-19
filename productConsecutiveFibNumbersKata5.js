// Product of consecutive Fib numbers - Kata 5
// This solution is less efficient than brute forcing from 0
// I was not thinking about how as a fib number gets bigger, it would take only a little extra time to
//  compute for a larger number
// The main problem with my solution is that it has to find the square root of any given number multiple times.
// This is a good idea for problems that reuire slow iteration up to big numbers, but fib numbers naturally make
//  giant leaps every iteration once past a certain point and resemble an exponential type growth.


function productFib(prod){
    let fib1 = 0,
        fib2 = 0; 
    for (let n=Math.floor(Math.sqrt(prod)); !fib2; n--) {
        if (!fib1 && isFib(n)) {
            fib1 = n;
        }
        else if (isFib(n)) { 
            fib2 = n+fib1;
        }
    }
    if (fib1*fib2===prod){
        return [fib1,fib2,true];
    } else if (fib1*fib2>prod) {
        return [fib1,fib2,false];
    } else {return [fib2,fib1+fib2,false];}
    
    function isFib(num) {
        return Number.isInteger(Math.sqrt(5*num**2+4)) || Number.isInteger(Math.sqrt(5*num**2-4));
    }
}    



//console.log(productFib(4895)); // Should be [55, 89, true]    
//console.log(productFib(5895)); // Should be [89, 144, false]
//console.log(productFib(74049690)); // Should be [6765, 10946, true]
//console.log(productFib(84049690)); // Should be [10946, 17711, false]
//console.log(productFib(193864606)); // Should be [10946, 17711, true]
//console.log(productFib(447577)); // Should be [610, 987, false]
//console.log(productFib(602070)); // Should be [610, 987, true]