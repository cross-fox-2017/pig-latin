
      function pig_latin(word){
        console.log(word)
        var vowels = /[aieou]/gi;
        var result = '';
        var vowelsx = ['a','i','u','e','o'];
        //console.log(word[0]);
        var count = 1;
        if(vowelsx.indexOf(word[0]) === -1 && count !== 0 ){
            for(var i = 0; i < word.length-1; i++) { //find vowel in word

                if(word[i] === 'a' ||word[i] === 'e' ||word[i] === 'i' ||word[i] === 'u' ||word[i] === 'o') {
                    for(var x = i; x < word.length; x++){ //mengambil dri awal smpai
                        result += word[x];
                    }
                    for(var n = 0; n < i; n++){
                        result += word[n];
                    }
                    return result += "ay"; count =0;
                }
            }


            //console.log(result);
          } else { result += word;}
            return result;


    //rl.close();
  }
  console.log(pig_latin("hehehehe"))
