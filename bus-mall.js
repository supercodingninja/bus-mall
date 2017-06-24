'use strict';

var allImages = [];

// Object Constructor //
function Images(name, filePath) {

  // Properties //
  // property.value //
  this.name = name;
  this.filePath = filePath;
  this.clicked = 0;
  this.givenImage = 0;
  allImages.push(this);
  catalogallImages.push(this.name);
}

// Object Instances //
var bag = new Image('bag', 'img/bag.jpg');
var banana = new Image('banana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
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

function renderallImages() {
  while (allImages.length < 3) {
    var select = Math.floor(Math.random() * (images.length));
    allImages.push(images[select]);
  }
    const randomImage = randomizedImages.pop();
    imgEl.setAttribute("src", randomImage.filePath);
}

// A better way to calculate conversion rate //
function calcConversion() {
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].givenImage === 0) {
      allImages[i].conversion = 'images';
    } else {
      allImages[i].conversion = allImages[i].clicked / allImages[i].givenImage;
    }
  }
}

function newImage() {
  while (images.firstChild) {
    images.removeChild(images.firstChild);
  }
}

function render() {
  randomImage();
  for (var i = 0; i < newRenderImage.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newRenderImage[i].filePath;
    imgEl.id = newRenderImage[i].name;
    webImage.appendChild(imgEl);
    newRenderImage[i].givenImage++;
  }
}

function handleClick(event) {
  for (var i = 0; i < newRenderImage.length; i++) {
    if (event.target.id === newRenderImage[i].name) {
      newRenderImage[i].clicked++;
      clickTotal++;
    }
  }
  if (clickTotal === 25) {
    webImage.removeEventListener('clicked', handleClick);
    newImage();
    libraryChart();
  } else {
    newImage();
    randomImage();
    renderImage();
  }
}

function libraryChart() {
  var chartHeaders = [];
  var chartInfo = [];
  for (var i = 0; i < allImages.length; i++){
    chartInfo.push(allImages[i].clicked);
    chartHeaders.push(allImages[i].name);
  }
}

var ctx = document.getElementById('libraryChart').getContext('2d');
var libraryChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
