/*No futuro fazer a mudança de tema funcionar corretamente com o slide do tipo range, mudando entre essas body, body.dark-blue, body.pink, body.dark-pink */

function rangeSlide(value) {
  /*var element = document.body;
  element.classList.toggle("dark-blue");*/
  document.getElementById('rangeValue').innerHTML = value;
  if (value === '0') {
    var element = document.body;
    element.classList.replace("dark-blue", "blue");
  } if (value === '1'){
    var element = document.body;
    element.classList.replace("blue","dark-blue");
  } if (value === '2'){
    var element = document.body;
    element.classList.replace("dark-blue", "pink");
  } if (value === '3'){
    var element = document.body;
    element.classList.replace("pink", "dark-pink");
  }  else {
    var element = document.body;
    element.classList.replace("dark-pink", "blue");
  }
}

