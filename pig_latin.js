"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'input the word/sentences ? '
});

rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`the pig latin version is: '${pigLatin(line)}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

function perWord(word){
  var word = word.toLowerCase();
  var output='';
  var arr=[];
  arr= word.split('');
  var x='';

    if(word[0]==='a'||word[0]==='i'||word[0]==='u'||word[0]==='e'||word[0]==='o'){
      output= word;
    }
    else{
      arr.splice(0,1);
      output= arr.join('')+word[0]+'ay';
    }

  if(output[0]==='a'||output[0]==='i'||output[0]==='u'||output[0]==='e'||output[0]==='o'){

    return output;
  }
  else{
   var hasil = output.replace('ay','')
  return pigLatin(hasil);
  }
  //}
}
function pigLatin(sentence){
  var arr=sentence.split(' ');
  var res=[];
  for(var i=0; i<arr.length;i++){

    res.push(perWord(arr[i]));
  }
  return res.join(" ");
}
