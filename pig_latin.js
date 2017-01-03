"use strict"

//use readline to fix this challenge
const readline = require('readline');

function toPigLatin(word) {
  var kata = word.split('')
  var pig = 'ay'
  var temp = ''
  var vowel = ['a','i','u','e','o']
    if (vowel.indexOf(kata[0])!=-1) {
      return word
    }else {
      temp = word.slice(1, kata.length)
      return temp + (word.slice(0,1) + pig)
    }
}
// console.log(toPigLatin('Hello'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

})

rl.question('Input the word: ', (answer) => {
  console.log(toPigLatin(answer));

  rl.close()
})
