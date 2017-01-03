"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`Silahkan masukkan kata atau kalimat anda disini \n`)
rl.prompt()
rl.on('line', (word) => {
    piglatinplus(word);
})

function piglatin (kata){
  var vokal = ["a", "i", "u", "e", "o"];
  for (var i = 0; i < vokal.length; i++){
    for (var j = 0; j < vokal.length; j++){
      if (kata[0] == vokal[i]){
        return kata
      } else if (kata[i] == vokal[j]){
        var dephay = kata.substring(0, i)
        var belakhay = kata.substring(i)
        var pig =  belakhay + dephay + "ay"
        return pig
      }
    }
  }
}

function piglatinplus (kalimat){
  kalimat = kalimat.split(" ")
  var hasil = []
  for (var i = 0; i < kalimat.length; i++){
    hasil.push(piglatin(kalimat[i]))
  }
  return hasil.join(" ")
}

// console.log(piglatinplus("siapa nama aku yang sebenarnya"))
