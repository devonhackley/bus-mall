'use strict';

var imgArray = [];
var userClicks = 0;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

function imgProducts (name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.numOfDisplays = 0;
  this.numOfClicks = 0;
  this.repeat = false;
  imgArray.push(this);
};

function randomNumGen () {
  var random = Math.floor((Math.random() * imgArray.length));
  return random;

}

var bag = new Product('bag');
var banana = new Product('banana');
var bathroom = new Product('bathroom');
var boots = new Product('boots');
var breakfast = new Product('breafkast');
var bubblegum = new Product('bubblegum');
var chair = new Product('chair');
var cthulhu = new Product('cthulhu');
var dogDuck = new Product('dog-duck');
var dragon = new Product('dragon');
var pen = new Product('pen');
var petSweep = new Product('pet-sweep');
var scissors = new Product('scissors');
var shark = new Product('shark');
var baby = new Product('baby-sweep');
var tauntaun = new Product('tauntaun');
var unicorn = new Product('unicorn');
var usb = new Product('usb');
var waterCan = new Product('water-can');
var wineGlass = new Product('wine-glass');
