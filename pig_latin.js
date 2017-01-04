"use strict"

const readline = require('readline');

const pig_latin = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

function Pig_Latin_Words(words){

  if(/[aiueo]/i.test(words[0]) === true){
    return words;
  }
  else {
    var consonant = /[^aiueo]+/i.test(words);
    var get_consonant = RegExp.lastMatch;
    var pig_latin_word = words.replace(get_consonant,"") + get_consonant + "ay";
    return pig_latin_word;
  }
}

pig_latin.question('Insert any word: ', (words) => {
    var arr_words = words.split(" ");
//
    if(arr_words.length === 1){
     console.log(Pig_Latin_Words(words));
    }
    else{
      words = [];
      for(var i=0; i<arr_words.length; i++){
        words.push(Pig_Latin_Words(arr_words[i]));
      }
      console.log(words.join(" "));
    }

  pig_latin.close();
  process.stdin.destroy();
 });
