"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.setPrompt("insert sentence : ")
rl.prompt()
rl.on("line", (answer) => {
	let sentences = answer.split(" ")
	
	if(sentences.length > 1){
		let r = ""
		for(let i = 0 ; i < sentences.length ; i++){
			r += convertPiglatin(sentences[i])+" " 
		}
		console.log(r);
	} else {
		console.log(convertPiglatin(answer));
	}
  	
	rl.prompt();
});

function convertPiglatin(input){
  var huruf = input.toString().toLowerCase().split("");
  var kalimat = [];
    
  if(huruf[0] == "a" || huruf[0] == "i" || huruf[0] == "u" || huruf[0] == "e" || huruf[0] == "o"){
    return input;
  }else{
    for(var i = 0; i < huruf.length;i++){
      if(huruf[i] == "a" || huruf[i] == "i" || huruf[i] == "u" || huruf[i] == "e" || huruf[i] == "o"){
         kalimat.push(input.substr(i));
         kalimat.push(input.substr(0,i));
         kalimat.push("ay");
         
         return kalimat.join("");
       }
          
    }  
  }
}
