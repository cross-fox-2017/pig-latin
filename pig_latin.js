"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input: ', (word) => {
    // TODO: Log the answer in a database
    var wordArr = word.toString().toLowerCase().split(' ');
    var vowelArr = ["a", "i", "u", "e", "o"];
    var tampung = "";
    var tampungArr = [];

    function pigLatin(wordArr) {
        if (vowelArr.indexOf(wordArr[0]) >= 0) {
            return  wordArr;
        } else {
            var vowelPos = -1;
            //get posisi huruf hidup pertama
            for (var i = 0; i < wordArr.length; i++) {
                if (vowelArr.indexOf(wordArr[i]) >= 0) {
                    vowelPos = i;
                    tampung = wordArr.substring(0, i)
                    return wordArr.slice(vowelPos, wordArr.length) + tampung + 'ay';
                }

            }
        }
    }

    for (var j = 0; j< wordArr.length; j++) {
      tampungArr.push(pigLatin(wordArr[j]));
    }

    console.log(tampungArr.join(' '))

    rl.close();
});
