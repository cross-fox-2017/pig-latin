"use strict"

//use readline to fix this challenge
const readline = require('readline');


function perWord(word){
  var output='';
  var arr=[];
  arr= word.split('');
  var x='';

    if(word[0]==='a'||word[0]==='i'||word[0]==='u'||word[0]==='e'||word[0]==='o'||word[0]==='A'||word[0]==='I'||word[0]==='U'||word[0]==='E'||word[0]==='O'){
      output= word;
    }
    else{

      arr.splice(0,1);
      output= arr.join('')+word[0]+'ay';
    }

  if(output[0]==='a'||output[0]==='i'||output[0]==='u'||output[0]==='e'||output[0]==='o'||output[0]==='A'||output[0]==='I'||output[0]==='U'||output[0]==='E'||output[0]==='O'){

    return output;
  }
  else{
   var d = output.replace('ay','')
  return pigLatin(d);
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
