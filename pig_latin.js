"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan suatu kata: ', (word) => {
    // TODO: Log the answer in a database
    var wordStrLo = word.toString().toLowerCase();
    var vowelArr = ["a", "i", "u", "e", "o"];
    var tampung = [];

    function pigLatin(word) {
      if (vowelArr.indexOf(wordStrLo[0]) >= 0) {
          return `Bahasa pig latin untuk awalan vowel adalah: ` + word;
      } else {
        // for (var i = 0; i<vowelArr.length; i++) {
        //   if (wordStrLo.indexOf(vowelArr[i])>0) {
        //     var indexVowel =  wordStrLo.indexOf(vowelArr[i]);
        //     tampung.push(wordStrLo[indexVowel - 1]);
        //     var tempStr = wordStrLo.substring(indexVowel,wordStrLo.length);
        //     return `Bahasa pig latinnya untuk awal konsonan adalah: ` +tempStr+tampung+"ay";
        //   }
        // }
          for (var i = 0; i < wordStrLo.length; i++) {
            for (var j = 0; j < vowelArr.length; j++) {
              if (wordStrLo[i] === vowelArr[j]) {
                  tampung.push(wordStrLo[i - 1]);
                  var tempWord = wordStrLo.substring(i,wordStrLo.length);
                  //pigLatin(wordStrLo);
                  return `Bahasa pig latinnya untuk awal konsonan adalah: ` + tempWord+tampung+"ay";
              }
            }
          }
      }
    }
    console.log(pigLatin(word))

    rl.close();
});
