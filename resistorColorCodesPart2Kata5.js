// Resistor Color Codes, Part2 = Kata 5
// COMPLETED
// This solution was very similar to best practice, and as such, I am happy with it.


function encodeResistorColors(ohmsString) {
    const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
    let ohms = ohmsString.replace(' ohms', '').replace('k', `000`).replace('M', `000000`);
    if (ohms.includes('.')) {ohms = ohms.replace('.', '').replace('0', '')}
    return `${colors[ohms[0]]} ${colors[ohms[1]]} ${colors[ohms.length-2]} gold` 
}







//console.log(encodeResistorColors("10 ohms")); // Should be "brown black black gold"
//console.log(encodeResistorColors("47 ohms")); // Should be "yellow violet black gold"
//console.log(encodeResistorColors("100 ohms")); // Should be "brown black brown gold"
//console.log(encodeResistorColors("220 ohms")); // Should be "red red brown gold"
//console.log(encodeResistorColors("330 ohms")); // Should be "orange orange brown gold"
//console.log(encodeResistorColors("470 ohms")); // Should be "yellow violet brown gold"
//console.log(encodeResistorColors("680 ohms")); // Should be "blue gray brown gold"
//console.log(encodeResistorColors("1k ohms")); // Should be "brown black red gold"
//console.log(encodeResistorColors("4.7k ohms")); // Should be "yellow violet red gold"
//console.log(encodeResistorColors("10k ohms")); // Should be "brown black orange gold"
//console.log(encodeResistorColors("22k ohms")); // Should be "red red orange gold"
//console.log(encodeResistorColors("47k ohms")); // Should be "yellow violet orange gold"
//console.log(encodeResistorColors("100k ohms")); // Should be "brown black yellow gold"
//console.log(encodeResistorColors("330k ohms")); // Should be "orange orange yellow gold"
//console.log(encodeResistorColors("1M ohms")); // Should be "brown black green gold"
//console.log(encodeResistorColors("2M ohms")); // Should be "red black green gold"