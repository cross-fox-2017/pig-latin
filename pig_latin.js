"use strict"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pig_latin (input){
	var vowel = ['a','i','u','e','o'];
	var temp ;
	var temp2 ;
	if(vowel.indexOf(input[0]) >= 0){	
		return input;		
	}	
	else {
		var find = false;
		var j = 0;
		while(find == false ){
			if (vowel.includes(input[j]) === false){
				j++;
			}
			else{
				temp = j;
				find = true;
			}
		}
		temp = input.substring(0, j);
		temp2 = input.substring(j, input.length);
		return temp2 + temp + 'ay';
	}	
}


rl.question('Input your words : ', (answer) => {
  //console.log(pig_latin(answer));
  var arrAnswer = answer.split(' ');
	if(arrAnswer.length == 1){
		console.log(pig_latin(answer));
	}
	else{
		var tampung =[];
		for(var i=0; i< arrAnswer.length; i++){
			tampung.push(pig_latin(arrAnswer[i]));
		}
		console.log(tampung.join(' '));
	}
  rl.close();
});

