function pig_latin(kata) {
  var vowel = ["a","i","u","e","o"],
      pisah = kata.split(""),
      tampung = "",
      tampung_vowel = "",
      tampung_non_vowel = "";
  if (kata[0] != "a" && kata[0] != "i" && kata[0] != "u" && kata[0] != "e" && kata[0] != "o") {
    tampung_non_vowel += "-";
  }

  while (pisah.length > 0) {
    // panjang kata & isi kata
    // jika kata pertama adalah huruf vokal
    // ini sudah clear
    if (pisah[0] == "a" || pisah[0] == "i" || pisah[0] == "u" || pisah[0] == "e" || pisah[0] == "o") {
      tampung = pisah.join("");
      pisah = [];
      // rekursif selesai!!!!!!!!
    }
    // jika kata pertama, bukan huruf vokal
    else {
      tampung_non_vowel += pisah[0];

    }
    pisah.shift();
  }
  // rekursif berakhir

  if (kata[0] != "a" && kata[0] != "i" && kata[0] != "u" && kata[0] != "e" && kata[0] != "o") {
    tampung_non_vowel += "ay";
  }
  return tampung +  tampung_non_vowel;
}

function complete_stence(kata) {
  var result = [];
  if ( kata.split(" ").length > 1 ) {
    var arr = kata.split(" ");
    // kode 2 kata masuk disini
    for (var i = 0; i < arr.length; i++) {
      result.push(pig_latin(arr[i]));
    }
    return result;

  } else {
    console.log(pig_latin(kata));;
  }
}

console.log(complete_stence("babi babi ayam"));
