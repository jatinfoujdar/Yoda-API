var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var serurl = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text){
    return serurl + "?" + "text=" + text;
}

function clickHandler(){
 //  outputDiv.innerText = "alls" +txtInput.value;
 var inputText = txtInput.value;
 
 fetch(getTranslationURL(inputText))
 .then (response => response.json())
 .then(jaja =>{
   var translatedText = jaja.contents.translated;
    outputDiv.innerText = translatedText;
 } )
}


btnTranslate.addEventListener('click' , clickHandler)