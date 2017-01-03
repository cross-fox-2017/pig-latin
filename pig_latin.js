"use strict"

//use readline to fix this challenge
const readline = require('readline');

let rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.pigLatin('What do you think of Node.js? ', (word) => {

      var array = word.split(" ");
      var vowels = /[aieou]/gi;
      var result = '';
      var sentence ="";
      // console.log(array);
      // console.log(word);

      for(j=0; j< array.length-1;j++){
          for(var i = 0; i < array.length[j]; i++) { //find vowel in word
              if(word[i] === 'a' ||
                word[i] === 'e' ||
                word[i] === 'i' ||
                word[i] === 'u' ||
                word[i] === 'o'

            ) {
                  for(var x = i; x < array.length[j]; x++){ //mengambil dri awal smpai
                      result += word[x];
                  }
                  for(var n = 0; n < i; n++){
                      result += word[n];
                  }
                 result + "ay";
              }
          }
          return sentence += result ;
        }


//  console.log(pigLatin("duck happy"));

  rl.close();

});
