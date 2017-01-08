"use strict"

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Input> '
});

rl.prompt();

rl.on('line', (answer) => {
  console.log('Output:',pig_sentence(answer));
  rl.prompt();
}).on('close', () => {
  console.log('Success!');
  process.exit(0);
});


function pig_latin(answer){
  let strVowel = ["A","I","U","E","O"];
  let result = "";

  if(strVowel.indexOf(answer[0].toUpperCase()) >= 0 ){
    return answer;
  }else{
    let arrTmp = -1;
    for (let i = 0; i < answer.length; i++){
      if(strVowel.indexOf(answer[i].toUpperCase()) >= 0){
        arrTmp = i;
        result = answer.substring(0,i);
        return answer.slice(arrTmp, answer.length) + result + "ay";
        }
      }
    }
  }

function pig_sentence(answer){
  let arrResult = answer.split(" ");

  if(arrResult.length === 1){
    return pig_latin(answer);
  }else {
    let resultSentence = [];
    for(let i = 0; i < arrResult.length; i++){
      resultSentence.push(pig_latin(arrResult[i]))
    }
    return resultSentence.join(" ");
  }
}
