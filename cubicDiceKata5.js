// Probabilities for Sums in Rolling Cubic Dice (Kata 5)

function rolldiceSumProb(arr, totalSides){
    let counter = 0;
    let test = [];    
    if (arr>6**totalSides||arr<totalSides){return 0;}        
    for (let j=1; j<7; j++){
        for (let k=1; k<7; k++){
            if (totalSides<3){
                if (j+k===arr){counter++;break;}
            } else {
                for (let l=1; l<7; l++){
                    if (totalSides<4){    
                        if (j+k+l===arr){counter++;break;}                        
                    } else {
                        for (let i=1; i<7; i++){
                            if (totalSides<5){
                                if (j+k+l+i===arr){counter++;break;}
                            } else {
                                for (let m=1; m<7; m++){
                                    if (j+k+l+i+m>arr){break;}
                                    else if (j+k+l+i+m===arr){               
                                        counter++;
                                        break;  
                                    }
                                }
                            } 
                        }
                    }
                } 
            }
        }
    }
    return counter/(6**totalSides);
}

//TESTS

//console.log(rolldiceSumProb(11, 2)); // Should be 0.055555555555  
//console.log(rolldiceSumProb(8, 2)); // Should be 0.13888888889
//console.log(rolldiceSumProb(8, 3)); // Should be 0.0972222222222 
//console.log(rolldiceSumProb(23, 4)); // Should be 0.00309
//console.log(rolldiceSumProb(14, 5)); // Should be 0.069444444444