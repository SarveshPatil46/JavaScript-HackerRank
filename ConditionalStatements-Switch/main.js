'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a' || 'e' || 'i' || 'o' || 'u':
            letter = 'A'
        case 'b' || 'c' || 'd' || 'f' || 'g':
            letter = 'B'
        case 'h' || 'j' || 'k' || 'l' || 'm':
            letter = 'C'
        case 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z':
            letter = 'D'
    }
    // Another Method to do the same
    // switch (true) {
    //     case 'aeiou'.includes(s[0]):
    //         letter = 'A';
    //         break;
    //     case 'bcdfg'.includes(s[0]):
    //         letter = 'B';
    //         break;
    //     case 'hjklm'.includes(s[0]):
    //         letter = 'C';
    //         break;
    //     case 'npqrstvwxyz'.includes(s[0]):
    //         letter = 'D';
    //         break;
    // }
    return letter;
}