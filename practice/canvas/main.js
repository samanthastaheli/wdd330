var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(350, 275, 100, 100);
c.fillRect(600, 500, 100, 100);
c.fillRect(100, 450, 100, 100);
c.fillRect(750, 200, 100, 100);