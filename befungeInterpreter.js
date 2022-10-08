// TITLE: Befunge Interpreter
// RATING: 4 kyu
// LINK:  https://www.codewars.com/kata/526c7b931666d07889000a3c
// LANGUAGE: javascript
// COMPLETED: 10/08/2022

function interpret(code) {
    const codeStack = code.split('\n').map(row => row.split(''));
    const stack = [];
    const output = [];
    let direction = '>';
    const position = {x: 0, y: 0};
    
    /*
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    */

    while (true) {
        /*
        // slow down the interpreter so we can see what's going on
        await sleep(500);
        console.log('stack', stack);
        console.log('output', output);
        console.log('position', position);
        console.log('direction', direction);
        // display codeStack in 2d
        console.log(codeStack.map(row => row.join('')).join('\n'));
        console.log('---------------------');
        */
        const current = codeStack[position.y][position.x];
        if (current === '@') {
            break;
        }
        if (current === '>') {
            direction = '>';
            position.x++;
            continue;
        }
        if (current === '<') {
            direction = '<';
            position.x--;
            continue;
        }
        if (current === 'v') {
            direction = 'v';
            position.y++;
            continue;
        }
        if (current === '^') {
            direction = '^';
            position.y--;
            continue;
        }
        if (current === '+') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(a + b);
        }
        if (current === '-') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b - a);
        }
        if (current === '*') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(a * b);
        }
        if (current === '/') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(a === 0 ? 0 : Math.floor(b / a));
        }
        if (current === '%') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(a === 0 ? 0 : b % a);
        }
        if (current === '!') {
            const a = stack.pop();
            stack.push(a === 0 ? 1 : 0);
        }
        if (current === '`') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b > a ? 1 : 0);
        }
        if (current === '_') {
            const a = stack.pop();
            direction = a === 0 ? '>' : '<';
        }
        if (current === '|') {
            const a = stack.pop();
            direction = a === 0 ? 'v' : '^';
        }
        if (current === '"') {
            let next = direction === '>' ? codeStack[position.y][position.x + 1] : codeStack[position.y][position.x - 1];
            while (next !== '"') {
                stack.push(next.charCodeAt(0));
                direction === '>' ? position.x++ : position.x--;
                next = direction === '>' ? codeStack[position.y][position.x + 1] : codeStack[position.y][position.x - 1];
            }
            direction === '>' ? position.x++ : position.x--;
        }
        if (current === ':') {
            const a = stack.pop();
            a === undefined ? stack.push(0) : stack.push(a, a);
        }
        if (current === '\\') {
            const a = stack.pop();
            const b = stack.pop();
            b === undefined ? stack.push(a, 0) : stack.push(a, b);
        }
        if (current === '$') {
            stack.pop();
        }
        if (current === '.') {
            const a = stack.pop();
            output.push(a);
        }
        if (current === ',') {
            const a = stack.pop();
            output.push(String.fromCharCode(a));
        }
        if (current === '#') {
            if (direction === '>') {
                position.x++;
            }
            if (direction === '<') {
                position.x--;
            }
            if (direction === 'v') {
                position.y++;
            }
            if (direction === '^') {
                position.y--;
            }
        }
        if (current === 'p') {
            const y = stack.pop();
            const x = stack.pop();
            const v = stack.pop();
            codeStack[y][x] = String.fromCharCode(v);
        }
        if (current === 'g') {
            const y = stack.pop();
            const x = stack.pop();
            stack.push(codeStack[y][x].charCodeAt(0));
        }
        if (current >= '0' && current <= '9') {
            stack.push(parseInt(current));
        }
        if (current === '?') {
            const random = Math.floor(Math.random() * 4);
            if (random === 0) {
                direction = '>';
            }
            if (random === 1) {
                direction = '<';
            }
            if (random === 2) {
                direction = 'v';
            }
            if (random === 3) {
                direction = '^';
            }
        }
        if (current === ' ') {
            // do nothing
        }
        if (direction === '>') {
            position.x === codeStack[position.y].length - 1 ? position.x = 0 : position.x++;
        }
        if (direction === '<') {
            position.x === 0 ? position.x = codeStack[0].length - 1 : position.x--;
        }
        if (direction === 'v') {
            position.y === codeStack.length - 1 ? position.y = 0 : position.y++;
        }
        if (direction === '^') {
            position.y === 0 ? position.y = codeStack.length - 1 : position.y--;
        }
    }


    return output.join('');
}

// TEST CASES
//console.log(interpret('>987v>.v\nv456<  :\n>321 ^ _@'), '123456789');
//console.log(interpret('>25*"!dlroW olleH":v\n                v:,_@\n                >  ^'), 'Hello World!');
//console.log(interpret('>              v\nv  ,,,,,"Hello"<\n>48*,          v\nv,,,,,,"World!"<\n>25*,@'), 'Hello World!');
//console.log(interpret('>08>:1-:v v>*_$.@\n ^    _$>\\:^'), '123456789');