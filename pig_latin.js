"use strict"

const convertSingleWord = (str) => {
  let newArr = [];
  let newArr2 = [];
  let vowel = ['a','i','u','e','o'];
  let limit = 0;

  str = str.split('');

  for(let i = 0; i < vowel.length; i++){
    if(str[0] === vowel[i]){
      return str.join('');
    }
  }

  for(let i = 0; i < vowel.length; i++){
    let idx = str.indexOf(vowel[i])
    if(idx > 0){
      limit = idx;
      break;
    }
  }

  for(let i = 0; i < limit; i++){
    newArr.push(str[i]);
  }

  for(let i = limit; i < str.length; i++){
    newArr2.push(str[i]);
  }

  return newArr2.join('')+newArr.join('')+'ay.';
}

function convertCompleteSentence(str){
  str = str.split(' ');
  let newStr = '';

  for(let i = 0; i < str.length; i++){
    newStr += convertSingleWord(str[i]) + ' ';
  }
  return newStr;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Pig Latin > ');
rl.prompt();

rl.on('line', (answer) => {
  // TODO: Log the answer in a database
  console.log(convertCompleteSentence(answer));
  rl.prompt();
}).on('close', function(){
  console.log('out');
  rl.close();
})
