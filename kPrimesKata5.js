


 function countKprimes(k, start, nd) {
    const result = [];
    const primeArr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    for (let i=start; i<nd+1; i++) {
        for (let k=0, j=primeArr[k], counter=0; j<Math.sqrt(nd); k++){
            if (!(i%j)){result.push(j);}
            
            
            j=primeArr[k+1];    

        }
        

        
        
        //if (!(i%(2))){
        //    result.push(i);
        //} 



    }
    return result;
}

function puzzle(s) {
    // your code
}


console.log(countKprimes(2, 0, 100));
//Should be [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51,
//           55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]