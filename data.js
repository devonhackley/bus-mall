'use strict';

var products = [
  'bag.jpg', 'boots.jpg', 'chair.jpg', 'dragon.jpg', 'scissors.jpg', 'tauntaun.jpg', 'water-can.jpg', 'banana.jpg', 'breakfast.jpg', 'cthulhu.jpg', 'pen.jpg', 'shark.jpg', 'unicorn.jpg', 'wine-glass.jpg', 'bathroom.jpg', 'bubblegum.jpg', 'dog-duck.jpg', 'pet-sweep.jpg', 'sweep.png', 'usb.gif'
];

var newChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['bag' , 'banana' , 'bathroom' , 'boots' , 'breakfast' , 'bubblegum' ,'chair' , 'cthulhu' , 'dog duck' , 'dragon' , 'pen' , 'pet sweep' , 'scissors' , 'shark' , 'sweep' , 'tauntaun' , 'unicorn' , 'usb' , 'water can' , 'wine glass'],
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
