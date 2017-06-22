'use strict';

// KEEP THIS
// var Object = {
//   name: 'bag',
//   filepath: 'img/bag.jpg',
//   clicked: 0,
//   shown: 0
// };

var imageArray = [];
  //container
var ulEl = document.getElementById('images');

//object constructor
function Image(name, filepath) {
  /*properties*/
  this.name = name; //value
  this.filepath = filepath;
  this.clicked = 0;
  this.givenImage = 0;
  imageArray.push(this);
}

//object instances
var bag = new Image('bag', 'img/bag.jpg'); //do this for the rest

//WORK ON PROBLEMS

//Problem 1: work on display images //this is where you append to HTML
function renderImage() {
  //create for loop i < 3
  var liEl = document.createElement('li');
  var imgEl = document.createElement('img');
  imgEl.src = 'some string';
  //first, append img to li
  //then, append li to ul

  //markup from js.what I am appending
} //this function renders 3 images
//somewhere you are going to call this function

function getRandomOptions() {
  var rand = Math.floor(Math.random() * allOptions.length);
  return new option[rand]();
}

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
