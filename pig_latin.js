"use strict"

const convertSingleWord = (str) => {
  let arr=[];
  let vowel = ['a','i','u','e','o'];
  for(let i=0; i<vowel.length; i++){
      if(str[0]===vowel[i]){
          return str;
      }
  }
  let posisi = str.replace(/[^a|i|u|e|o]/g,'');
  let x = str.indexOf(posisi[0]);
  for(let i=x; i<str.length; i++){
      arr.push(str[i]);
  }
  for(let i=0; i<x; i++){
      arr.push(str[i]);
  }
  arr.push('ay.');
  return arr.join('');
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
