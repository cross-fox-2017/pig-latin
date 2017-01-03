
//use readline to fix this challenge
const readline = require('readline');
const prompt = require('prompt');

let rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.question('konversi : ', (wordx) => {

    let array = wordx.split(" ");
    let temp = "";
    for(let i = 0 ; i<array.length ;i++){
      temp += " "+ pig_latin(array[i]);
    //console.log(temp);
    }


    function pig_latin(word){
      var vowels = /[aieou]/gi;
      var result = '';

          for(var i = 0; i < word.length-1; i++) { //find vowel in word
              if(word[i] === 'a' ||
                word[i] === 'e' ||
                word[i] === 'i' ||
                word[i] === 'u' ||
                word[i] === 'o') {
                  for(var x = i; x < word.length; x++){ //mengambil dri awal smpai
                      result += word[x];
                  }
                  for(var n = 0; n < i; n++){
                      result += word[n];
                  }
                   result += "ay";
              }
          }

          //console.log(result);
          return result;

  rl.close();
}

console.log(temp);
});
