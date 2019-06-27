var startknop = document.querySelector(".start");
var venster = document.querySelector(".pop-up1");
var aardbol = document.querySelector(".aarde");
var kruiseen = document.querySelector(".kruis");
var kruistwee = document.querySelector(".kruis1");
var kruisdrie = document.querySelector(".kruis2");
var kruisvier = document.querySelector(".kruis3");
var kruisvijf = document.querySelector(".kruis4");
var kruiszes = document.querySelector(".kruis5");

startknop.addEventListener('click', function() {
  venster.classList.add("popupsluiten");
  aardbol.classList.add("aardbolzichtbaar");
  kruiseen.classList.add("kruiszichtbaar");
  kruistwee.classList.add("kruis1zichtbaar");
  kruisdrie.classList.add("kruis2zichtbaar");
  kruisvier.classList.add("kruis3zichtbaar");
  kruisvijf.classList.add("kruis4zichtbaar");
  kruiszes.classList.add("kruis5zichtbaar");
})
