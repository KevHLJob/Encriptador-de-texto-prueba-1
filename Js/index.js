//function encriptar
function encriptar (){
    //create a var save value of txt word.
    var frase = document.getElementById("word").value;

    //array for vocals with correct words.
const mapWord = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
};
 frase= frase.replace(/(?:a|e|i|o|u)/g, matched => mapWord[matched].toLowerCase() );

var lbnew = document.getElementById('text-encript');
lbnew.innerHTML=`${frase}`;
var lbtext=document.getElementById('info');
lbtext.innerHTML="Texto encriptado.";
formulario.reset();
}


//function desencriptar, 
function desencriptar(){
  var txtfrase= document.getElementById("word").value;

const oWords = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u"
};
 txtfrase= txtfrase.replace(/(?:ai|enter|imes|ober|ufat)/g, matched => oWords[matched].toLowerCase() );
 
 var lbDesencriptyn=document.getElementById('text-encript');
 lbDesencriptyn.innerHTML=`${txtfrase}`;
 var lbtext=document.getElementById('info');
lbtext.innerHTML="Texto desencriptado.";
 formulario.reset();
}

//function copiar por medio del id del elemento
function copiarAlPortapapeles(id_elemento) {
  alert("Texto copiado");
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  text-encriptar.reset();
  
}

