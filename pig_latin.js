"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.setPrompt('Masukan kata untuk di convert ke Pig Latin: ')
rl.prompt()
rl.on('line' , (answer) => {
	// if (answer == 'exit') {
	// 	rl.close()
	// } 
	if (completeSentence(answer)) {
		let splitAns = answer.split(' ')
		let str = "";
		console.log("input: " + answer)
		for (let i = 0; i < splitAns.length;i++) {
			str += " " + pigLatin(splitAns[i]);
		}
		console.log("output: " + str)
	}
	else {
		console.log("input: " + answer);
		console.log("output: " + pigLatin(answer));
		
	}
	rl.prompt()
})

function pigLatin(answer) {

	if (isVowel (answer[0])) {
		return answer
	} else {
		let tempStr = "";
		for (var i = 0; i < answer.length; i++) {
			if (!isVowel(answer[i])){
				tempStr += answer[i]
			} else {
				break;
				
			}
		}
		return answer.substring(i, answer.length)+ "-" + tempStr + "ay"
	}
	
}

function completeSentence(answer) {
	if (answer.split(' ').length > 1) {
		return true
	}
	return false
}

function isVowel(c) {
	let vowel = ["a", "i", "u", "e" ,"o"]
	for (let i = 0; i < vowel.length; i++) {
		if (c == vowel[i]) {
			return true
		}
	}
	return false
}

