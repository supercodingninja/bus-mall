'use strict';

var imageArray = [];

// Container //
var ulEl = document.getElementById('images');

// Object Constructor //
function Image(name, filepath) {

  // Properties //
  // property.value //
  this.name = name;
  this.filepath = filepath;
  this.clicked = 0;
  this.givenImage = 0;
  imageArray.push(this);
}

// Object Instances //
var bag = new Image('bag', 'img/bag.jpg');
var banana = new Image('banana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast1 = new Image('breakfast-1', 'img/breakfast-1.jpg');
var breakfast = new Image('breakfast', 'img/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg');
var chair = new Image('chair', 'img/chair.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Image('dog-duck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var petSweep = new Image('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'img/unicorn.jpg');
var usb = new Image('usb', 'img/usb.gif');
var waterCan = new Image('water-can', 'img/water-can.jpg');
var wineGlass = new Image('wine-glass', 'img/wine-glass.jpg');

// WORK ON PROBLEMS //
// Problem 1: work on display images // // This is where you append to HTML //
function renderImage() {
  //create for loop i < 3
  for (var i = 0; i < 3; i++) {
    function getRandomImages() {
      var rand = Math.floor(Math.random() * allImages.length);
      return new image[rand](); {
      // console.log(i);
      allImages[i].clicked += 1;
    }
  }
  var liEl = document.createElement('li');
  var imgEl = document.createElement('img');
  imgEl.src = 'some string';
  imgEl.appendChild(liEl);
  liEl.appendChild(ulEl);

}
  //somewhere you are going to call this function

//GO ON FROM HERE
//DON'T FORGET TO INCLUDE LOCAL STORAGE ASSIGNMENT FROM DAY 13

// var userChoice = function renderOption() {
//
//   // I want to have the following variables (unsure if I want this many Global Variables: because there are already a lot of Global Variables built in; and when working with people, there may be a whole lot of teams with JS, and naming conflicts can emerge.):
//   // 1. clickTotal
//   // 2. option
//   // 3. lastOption
//   // 4. newOption
//   // 5. Options
//   // 6. getOption
//   // 7. render
//   // 8. clickEvent (for the event listener)
//   var clickTotal = 0;
//   var option = [];
//   var lastOption;
//   var newOption;
//
//   // for(var i = 0; i < allOptions.length; i++) {
//   // allOptions[i].render(3); NO-NO-NO-NO-N0! DO SOMETHING DANGEROUS: THINK!!! //
//   var container = document.getElementById('option');
//
//   container.addEventListener('click', clickEvent);
//
//   function clickEvent(event) {
//     console.log(event.target.id);
//
//     if(event.target.id === 'option') {
//       alert('Thank you.  Please make your next choice.')
//
// // ref. 'Returning a random new initialized object in JavaScript'
// // https://stackoverflow.com/
// // https://stackoverflow.com/questions/24029767/returning-a-random-new-initialized-object-in-javascript
//       var A = document.getElementById('A');
//       var B = document.getElementById('B');
//       var C = document.getElementById('C');
//       var Skip = document.getElementById('Skip');
//
//       if A = function A(B !== && !== C) {
//         this.option = "A";
//         }
//         option.console.log();
//
//         else if (false) {
//           B = function B(A !== && !== C) {
//           this.option = "B";
//           }
//         }
//         option.console.log();
//
//         else if (false) {
//         C = function C(A !== && !== B) {
//         this.option = "C";
//           }
//         }
//
//       // need to look up how to connect to folder of images. //
//       new option('img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast-1.jpg');
//       new option('img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg');
//       new option('img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg');
//       new option('img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg');
//       new option('img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg');
//       new option('img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg');
//       new option('img/wine-glass.jpg');
//
//       option.prototype.render = function() {
//        this.allOptions();
//        var trEl = document.createElement('tr');
//        tdEl = document.createElement('td');
//        tdEl.textContent = this.option;
//        trEl.appendChild(tdEl);
//
//         }
//       }
//     }
//   }
//
// }
// renderOption(getRandomOptions());
// log(getRandomOptions());

//KEEP FROM HERE DOWN
// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
