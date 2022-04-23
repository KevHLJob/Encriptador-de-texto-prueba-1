

function encriptar (){
    //create a var save value of txt word.
var frase = document.getElementById("word").value;
const mapWord = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
};
frase = frase.replace(/(?:a|e|i|o|u)/g, matched => mapWord[matched].toLowerCase() );

var lbnew = document.getElementById('text-encript');
lbnew.innerHTML=`${frase}`;
console.log(frase);

}


