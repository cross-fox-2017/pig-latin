"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input : ', (input) => {
  //code starts here...
    let sentenceArr = input.split(' ');
    let holdArr = [];
    let answerStr = '';
    let vowel = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o'];

  function pig_latin (sentenceArr) {

    if (vowel.indexOf(sentenceArr[0]) >= 0) {
      return sentenceArr;
      }
      else {
          // vowel pertama ada di index berapa
          let cekIndex = '-1'
          for (var i = 0; i < sentenceArr.length; i++) {
            if (vowel.indexOf(sentenceArr[i]) >= 0 ){
                // vowel pertama ada di index ke i
                cekIndex = i;
                // potong konsonan di awal
                answerStr = sentenceArr.substring(0, i);
                // potong sisa + potongan konsonan + 'ay'
                return sentenceArr.slice(cekIndex, sentenceArr.length) + answerStr + 'ay';
            }
          }
        }
      }
        for (var j = 0; j < sentenceArr.length; j++) {
        holdArr.push(pig_latin(sentenceArr[j]));
    }

  console.log(holdArr.join(' '));;

  rl.close();
});
