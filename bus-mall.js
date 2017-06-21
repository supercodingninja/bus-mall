'use strict';

// ref. 'Returning a random new initialized object in JavaScript'
// https://stackoverflow.com/
// https://stackoverflow.com/questions/24029767/returning-a-random-new-initialized-object-in-javascript
var userChoice = function renderOption() {

  var clickTotal = 0
  var option = []
  var newOption

  for(var i = 0; i < allOptions.length; i++) {
    allOptions[i].render(3);

// need to look up how to connect to folder of images. //
  var A = [0];
  var B = [1];
  var C = [2];

  if option = function A() {
    this.option = "A";
    }
    option.console.log();

    else if (false) {
      option = function B() {
      this.option = "B";
      }
    }
    option.console.log();

    else if (false) {
    option = function C() {
    this.option = "C";
      }
    }

  new option('img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast-1.jpg');
  new option('img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg');
  new option('img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg');
  new option('img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg');
  new option('img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg');
  new option('img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg');
  new option('img/wine-glass.jpg');

}

  option.prototype.render = function() {
   this.allOptions();
   var trEl = document.createElement('tr');
   tdEl = document.createElement('td');
   tdEl.textContent = this.option;
   trEl.appendChild(tdEl);

  function getRandomOptions() {
    var rand = Math.floor(Math.random() * allOptions.length);
    return new option[rand]();
  }
}

renderOption(getRandomOptions());
log(getRandomOptions());
