'use strict';

var productArray = [];
var userClicks = 0;
var userLimit = 25;

function imgProducts (path) {
  this.path = 'img/' + path;
  this.name = '';
  this.numOfDisplays = 0;
  this.numOfClicks = 0;
  this.generateName = function(){
    var splitname = path.split('.')[0];
    var splitdash = splitname.split('-');
    for (var i = 0; i < splitdash.length; i++){
      var letters = splitdash[i].split('');
      letters[0] = letters[0].toUpperCase();
      splitdash[i] = letters.join('');
    }
    this.name = splitdash.join(' ');
  };
  this.generateName();
  productArray.push(this);
};

function randomNumGen () {
  var random = Math.floor((Math.random() * productArray.length));
  return random;

}

for (var i = 0; i < products.length; i++) {
  new imgProducts(products[i]);
}

var oldInx = [];

function randomImg(event) {
  userClicks++;
  if (event) {
    var clickedProdIdx = parseInt(event.target.alt);
    productArray[clickedProdIdx].numOfClicks++;
  }
  var imgTags = document.getElementsByClassName('clickable');
  var indices = [];

  for (var i = 0; i < imgTags.length; i++) {
    var idx = randomNumGen();
    //duplicates
    while (indices.indexOf(idx) !== -1 || oldInx.indexOf(idx) !== -1) {
      idx = randomNumGen();
    }
    indices[i] = idx;
  }

  oldInx = indices;

  var productsToBeSeen = [];

  for (var i = 0; i < indices.length; i++){
    var thisIdx = indices[i];
    productsToBeSeen[i] = productArray[thisIdx];
    productArray[thisIdx].numOfDisplays++;
  }

  for (var i = 0; i < imgTags.length; i++){
    imgTags[i].setAttribute('src', productsToBeSeen[i].path);
    imgTags[i].setAttribute('alt', indices[i]);
  }

  if (userClicks >= userLimit) {
    for (var i = 0; i < imgTags.length; i++) {
      imgTags[i].removeEventListener('click', randomImg);
    }
    // genResults();
    showResults();
  }
};

function genResults () {
  for (var i = 0; i < productArray.length; i++){
    var thisProduct = productArray[i];
    if (thisProduct.numOfDisplays === 0) {
      thisProduct.clickRate = 0;
    } else {
      thisProduct.clickRate = (thisProduct.numOfClicks / thisProduct.numOfDisplays * 100);
    }
  }
};
randomImg();
userClicks--;

var imgTags = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTags.length; i++){
  imgTags[i].addEventListener('click', randomImg);
}
//
// function productsShown(){
//   for (var i = 0; i < productArray.length; i++) {
//     console.log(productArray[i].name + ' shown ' + productArray[i].numOfDisplays + ' times.');
//     console.log(productArray[i].name + ' clicked ' + productArray[i].numOfClicks + ' times.');
//   }
// }

function showResults () {

  var clickedResults = [];
  for (var i = 0; i < productArray.length; i++){
    clickedResults.push(productArray[i].numOfClicks);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag' , 'banana' , 'bathroom' , 'boots' , 'breakfast' , 'bubblegum' ,'chair' , 'cthulhu' , 'dog duck' , 'pen' , 'pet sweep' , 'scissors' , 'shark' , 'sweep' , 'tauntaun' , 'unicorn' , 'usb' , 'water can' , 'wine glass'],
      datasets: [{
        label: 'Results',
        data: clickedResults,
        backgroundColor: ['#ff33bb'],
        borderColor: ['#0000FF'
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
}
