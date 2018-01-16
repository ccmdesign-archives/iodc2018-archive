$(document).ready(function () {
  
  // 399 elements

  function GenerateRandomNumber() {
    var min = 1, max = 399;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;   

    // If random number is undesirable, generate a new number, else return
    return (random < 4 && random > -4) ? GenerateRandomNumber() : random;
  }

  var number = GenerateRandomNumber();

  var map = $('.map svg path');

  console.log(number);


}); // doc.ready
