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

  function pig_latin (answer) {

    if (vowel.indexOf(answer[0]) >= 0) {
      return answer;
      }
      else {
          // vowel pertama ada di index berapa
          let cekIndex = ''
          for (var i = 0; i < answer.length; i++) {
            if (vowel.indexOf(answer[i]) >= 0 ){
                // vowel pertama ada di index ke i
                cekIndex = i;
                // potong konsonan di awal
                answerStr += answer.substring(0, i);
                // potong sisa + potongan konsonan + 'ay'
                return answer.slice(cekIndex, answer.length) + answerStr + 'ay';
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
