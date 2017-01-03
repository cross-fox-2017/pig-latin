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
    piglatin(word);
})
rl.close

function piglatin (kata){
  rl.close
  return kata
}
