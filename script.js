

var i = 0;
var speed = 50;
var headerName = document.getElementById("name");
var textName = headerName.innerHTML;
headerName.innerHTML = "";

function typeName(callback) {
    if (i < textName.length) {
      headerName.innerHTML += textName.charAt(i);
      i++;
      setTimeout(() => typeName(callback), speed);
    } else if (callback) {
        callback();
    }
  }

var j = 0;
speedPhrase = 40;
var headerPhrase = document.getElementById("phrase");
var textPhrase = headerPhrase.innerHTML;
headerPhrase.innerHTML = "";


function typePhrase() {
    if (j < textPhrase.length) {
      headerPhrase.innerHTML += textPhrase.charAt(j);
      j++;
      setTimeout(typePhrase, speedPhrase);
    } 
}



window.onload = function() {

  setTimeout(function() {
    typeName(typePhrase); 
  }, 500);
    
  };