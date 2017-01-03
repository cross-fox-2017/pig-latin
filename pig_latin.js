"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

var convert = function (input) {

  var konsonan = ["a", "i", "u", "e", "o"];
  var toString = input.split("");
  var tam = 10;
  var index = [];
  var res = [], res2 = [];

  for (var i = 0; i < konsonan.length; i++) {
    if (toString[0] == konsonan[i]) {
      return input;
    }
    else {
      if (toString.indexOf(konsonan[i]) !== -1) {
        index.push(toString.indexOf(konsonan[i]));
        // Bisa pake sort
        for (var j = 0; j < index.length; j++) {
          if (index[j] < tam) {
            tam = index[j];
          }
        }
      }
    }
  }
  for (var k = 0; k < tam; k++) {
    res.push(toString[k]);
  }
  for (var l = tam; l < toString.length; l++) {
    res2.push(toString[l]);
  }
  var resAkhir = res2.join('') + res.join('') + 'ay.';
  return resAkhir;
}

var convertSentence = function (word) {
  var spliting = word.split(" ");
  var res3 = [], res4 = [];
  var resAkhir2 = [];

  for (var m = 0; m < spliting.length; m++) {
    res4 = convert(spliting[m]);
    res3.push(res4);
    resAkhir2 = res3.join(" ");
  }
  return resAkhir2;
}

//console.log(convertSentence("llllaz kkkeyuy pppiyey"));

rl.setPrompt('Masukan Input: ');
rl.prompt()
rl.on("line", (answer) => {
  if (answer.toLowerCase() == "keluar") {
    rl.close();
  }
  else {
    console.log(convertSentence(answer));
    rl.prompt();
  }
});
