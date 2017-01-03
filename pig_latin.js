"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Masukan Kata untuk Dikonversi ke Latin > ');

rl.on("line", (answer) => {
  console.log('Input : '+answer);
  console.log('Output : '+pigLatin(answer));
  rl.prompt();
})


function pigLatin(word){

  if(isVowel(word[0])){
    return word;
  }else{
     let temp = "";
     for(var i = 0; i < word.length ;i++){
        if(!isVowel(word[i]))
        {
          temp += word[i];
        }else{
          break;
        }
    }
    return word.substring(i,word.length)+"-"+temp+"ay";
  }
}

function competeSentence(word){

    if(word.split(" ").length > 1)
    {
      return true;
    }
      return false;

}


function isVowel(c){
  var vowel = ["a","e","i","o","u","y"];

  for(var count = 0; count < vowel.length; count++) {
    if(c == vowel[count]){
      return true;
    }
  }
  return false;
}
