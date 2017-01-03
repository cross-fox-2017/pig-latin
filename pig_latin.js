
//use readline to fix this challenge
const readline = require('readline');
const prompt = require('prompt');

let rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});


rl.prompt();
//rl.setPrompt(prompt,length)
rl.on('PigLatin ', (word) => {

  var pigLatin = function(word) {
  //    var array = word.toString();
      var vowels = /[aieou]/gi;
      var result = '';

          for(var i = 0; i < word.length-1; i++) { //find vowel in word
              if(word[i] === 'a' ||
                word[i] === 'e' ||
                word[i] === 'i' ||
                word[i] === 'u' ||
                word[i] === 'o'

            ) {
                  for(var x = i; x < word.length; x++){ //mengambil dri awal smpai
                      result += word[x];
                  }
                  for(var n = 0; n < i; n++){
                      result += word[n];
                  }
                  return result + "ay";
              }
          }
  }

  console.log(result);


  }



  rl.close();

});
