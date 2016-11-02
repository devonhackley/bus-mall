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

    var userResults = document.getElementById('user-results');

    var ul = document.createElement('ul');
    userResults.appendChild(ul);

    for (var i = 0; i < productArray.length; i++){
      var thisProduct = productArray[i];
      var li = document.createElement('li');
      var fillerInfo = '';
      fillerInfo += thisProduct.name;
      if (thisProduct.numOfDisplays === 0) {
        fillerInfo += ' | Click Rate: 0%';
      } else {
        fillerInfo += ' | Click Rate: ' + (thisProduct.numOfClicks / thisProduct.numOfDisplays * 100) + '%';
      }
      li.innerText = fillerInfo;
      ul.appendChild(li);
    }
  }
};

randomImg();
userClicks--;

var imgTags = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTags.length; i++){
  imgTags[i].addEventListener('click', randomImg);
}

function productsShown(){
  for (var i = 0; i < productArray.length; i++) {
    console.log(productArray[i].name + ' shown ' + productArray[i].numOfDisplays + ' times.');
    console.log(productArray[i].name + ' clicked ' + productArray[i].numOfClicks + ' times.');
  }
}

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['bag' , 'banana' , 'bathroom' , 'boots' , 'breakfast' , 'bubblegum' ,'chair' , 'cthulhu' , 'dog duck' , 'pen' , 'pet sweep' , 'scissors' , 'shark' , 'sweep' , 'tauntaun' , 'unicorn' , 'usb' , 'water can' , 'wine glass'],
    datasets: [{
      label: 'Results',
      data: [],
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
