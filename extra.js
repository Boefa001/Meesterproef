var antwoorddrie = document.querySelector(".antwoord3");
var popp = document.querySelector(".pop-up2");
var weg = document.querySelector(".tekstweg");

antwoorddrie.addEventListener('click', function(){
  popp.classList.toggle("popupopenen");
  weg.classList.toggle("wegtekst");
})

var antwoordeen = document.querySelector(".antwoord1");
var popp = document.querySelector(".pop-up2");
var weg = document.querySelector(".tekstweg");

antwoordeen.addEventListener('click', function(){
  popp.classList.toggle("popupopenen");
  weg.classList.toggle("wegtekst");
})
