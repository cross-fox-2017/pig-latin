"use strict"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});


function pig_latin(input){
    var vowel = ['a','i','u','e','o']
    var firstword = input.slice(0,1);
    var lastword = input.slice(1,input.length)
    if(vowel.indexOf(firstword)!= -1){
      return input
    }else{
      return lastword+firstword+"ay"
    }
}

function pig_latin_sentences(input){
  var hasil = ""
  var tampung = input.split(" ")
  for (var i = 0; i < tampung.length; i++) {
    hasil += pig_latin(tampung[i])+" "
  }
  return hasil
}

rl.setPrompt('Masukkan kata / Kalimat : \n');
rl.prompt();
rl.on('line', (input) =>{
  console.log(`Your Input "${input}" Converted Pig Latin`);
  console.log(pig_latin_sentences(input));
  console.log(`ReInput or CTRL+C to exit`);
})
