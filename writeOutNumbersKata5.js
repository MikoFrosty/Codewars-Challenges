// Write out numbers - Kata 5 - Completed


function number2words(n){
    const onesArr = ['','one','two','three','four','five','six','seven','eight','nine','ten',
                    'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const tensArr = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if (!n) {return 'zero'}
    else if (n<1000) {return threeDigits(n)}   
    else {return (threeDigits(parseInt(n.toString().substring(0,n.toString().length-3)))+
                    ' thousand '+threeDigits(n%1000)).replace(/\s$/, '')
    }   
    
    function threeDigits(n){ 
        if (n<100) {return tensOnes(n);}
        else {return hunds(n);}
        function hunds(num){
            return (onesArr[Math.floor(num/100)]+' hundred '+tensOnes(num%100)).replace(/\s$/, '');
        }
        function tensOnes(num) {
            if (num<20){return onesArr[num];}
            return [tensArr[Math.floor(num/10)], onesArr[num%10]].join('-').replace(/-$/, '');     
        }
    }
} 




//Tests

//console.log(number2words(0)); // Should be "zero"
//console.log(number2words(1)); // Should be "one"
//console.log(number2words(8)); // Should be "eight"
//console.log(number2words(10)); // Should be "ten"
//console.log(number2words(19)); // Should be "nineteen"
//console.log(number2words(20)); // Should be "twenty"
//console.log(number2words(22)); // Should be "twenty-two"
//console.log(number2words(54)); // Should be "fifty-four"
//console.log(number2words(80)); // Should be "eighty"
//console.log(number2words(98)); // Should be "ninety-eight"
//console.log(number2words(100)); // Should be "one hundred" 
//console.log(number2words(301)); // Should be "three hundred one"
//console.log(number2words(793)); // Should be "seven hundred ninety-three"
//console.log(number2words(800)); // Should be "eight hundred"
//console.log(number2words(650)); // Should be "six hundred fifty"
//console.log(number2words(1000)); // Should be "one thousand"
//console.log(number2words(1003)); // Should be "one thousand three"