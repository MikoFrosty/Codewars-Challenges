// Rot13 - Kata 5
// COMPLETED



function rot13(message){
    const letterArray = message.split(''); 
    const nums = [];1
    for (let i = -13; i<13; i++){nums.push(i)}
    const lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());
    let [n,o,p,q,r,s,t,u,v,w,x,y,z,a,b,c,d,e,f,g,h,i,j,k,l,m] = nums; 
    for (let j = 0; j<letterArray.length; j++){
        if (!(letterArray[j].match(/[a-z]/i))){continue;}
        else if (letterArray[j]===letterArray[j].toUpperCase()){
            letterArray[j] = upperCaseLetters[eval(letterArray[j].toLowerCase())+13];    
        } else {
        letterArray[j] = lowerCaseLetters[eval(letterArray[j])+13];
        }
    }
    return letterArray.join(''); 
} 

 
  
//console.log(rot13("tly9r")); // Should be gyl9e
//console.log(rot13("10+2 is twelve.")); // Should be..
//console.log(rot13("Ruby is cool!")); // Should be...
//console.log(rot13("test")); // Should be grfg
//console.log(rot13("Test")); // Should be Grfg 