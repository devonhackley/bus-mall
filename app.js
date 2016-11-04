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
  var random = Math.floor(Math.random() * productArray.length);
  return random;

}

for (var i = 0; i < products.length; i++) {
  new imgProducts(products[i]);
}

var oldIdx = [];

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

// Utility function for seeing what's been shown and what's been clicked
function productsShown(){
  for (var i = 0; i < productArray.length; i++) {
    console.log(productArray[i].name + ' shown ' + allProducts[i].numOfDisplays + ' times.');
    console.log(productArray[i].name + ' clicked ' + allProducts[i].numOfClicks + ' times.');
  }
}
