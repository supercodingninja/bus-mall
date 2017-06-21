'use strict';

var userChoice = function renderOption() {

  var clickTotal = 0
  var option = []

  // for(var i = 0; i < allOptions.length; i++) {
  // allOptions[i].render(3); NO-NO-NO-NO-N0! DO SOMETHING DANGEROUS: THINK!!! //
  var container = document.getElementById('option');

  container.addEventListener('click', handleClick);

  function handleClick(event) {
    console.log(event.target.id);

    if(event.target.id === 'option') {
      alert('Thank you.  Please make your next choice.' )
    }
  }

// ref. 'Returning a random new initialized object in JavaScript'
// https://stackoverflow.com/
// https://stackoverflow.com/questions/24029767/returning-a-random-new-initialized-object-in-javascript
  var A = document.getElementById('A');
  var B = document.getElementById('B');
  var C = document.getElementById('C');
  var Skip = document.getElementById('Skip');

  if A = function A() {
    this.option = "A";
    }
    option.console.log();

    else if (false) {
      B = function B() {
      this.option = "B";
      }
    }
    option.console.log();

    else if (false) {
    C = function C() {
    this.option = "C";
      }
    }

  // need to look up how to connect to folder of images. //
  new option('img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast-1.jpg');
  new option('img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg');
  new option('img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg');
  new option('img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg');
  new option('img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg');
  new option('img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg');
  new option('img/wine-glass.jpg');

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
}
renderOption(getRandomOptions());
log(getRandomOptions());
