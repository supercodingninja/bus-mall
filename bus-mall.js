'use strict';

// look up how to connect to folder of images. //
var option = [];

// ref. https://stackoverflow.com/questions/24029767/returning-a-random-new-initialized-object-in-javascript //
function A() {
  this.option = "A";
}

function B() {
  this.option = "B";
}

function C() {
  this.option = "C";
}

var allOptions = [A, B, C];

function render([A, B, C];) {
  for(var i = 0; i < allOptions.length; i++) {
    allOptions[i].render(3);
  }

new option('img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast-1.jpg');
new option('img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg');
new option('img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg');
new option('img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg');
new option('img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg');
new option('img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg');
new option('img/wine-glass.jpg');


};

function getRandomOptions() {
  var rand = Math.floor(Math.random() * allOptions.length);
  return new option[rand]();
}

log(getRandomOptions());
log(getRandomOptions());
log(getRandomOptions());
log(getRandomOptions());
