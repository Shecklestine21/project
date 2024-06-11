//canvas - fishing scene

//canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;

//varibles to move the plane
planeX = 350;
planeY = 100;
sunX = 100;
sunY = 50;

goat1X = 550;
goat1Y = 400;
goat2X = 90;
goat2Y = 90;
goat3X = 250;
goat3Y = 760;

//sky
let skyR = 173;
let skyG = 216;
let skyB = 230;

//clouds
cloud1X = 800;
cloud1Y = 200;

cloud2X = 750;
cloud2Y = 200;

cloud3X = 775;
cloud3Y = 175;

cloud4X = 220;
cloud4Y = 350;

cloud5X = 165;
cloud5Y = 350;

cloud6X = 190;
cloud6Y = 315;


document.addEventListener("keypress", keyBoardHandler)
function keyBoardHandler(event) {
console.log(event.code);
}
requestAnimationFrame(draw)
function draw() {
   //sky
ctx.fillStyle = `rgb(${skyR},${skyG},${skyB})`;
ctx.fillRect(0, 0, 1000, 1000)

//ground
ctx.fillStyle = `green`;
ctx.fillRect(0, 850, 1000, 1000)

//mountain
ctx.fillStyle = "grey"
ctx.beginPath();
ctx.moveTo(1000,850);
ctx.lineTo(650,390);
ctx.lineTo(650,380);
ctx.lineTo(200,850);
ctx.fill();

//snow on the mountain
ctx.fillStyle = "white"
ctx.beginPath();
ctx.moveTo(650,385);
ctx.lineTo(475,550);
ctx.lineTo(715,475);
ctx.lineTo(650,385);
ctx.fill();

//cabin
ctx.fillStyle = "brown";
ctx.fillRect(100,750,120,100);
//windows
ctx.fillStyle = "lightblue";
ctx.fillRect(120,790,25,25);
ctx.fillRect(180,790,25,25);
//cabin roof
ctx.fillStyle = "black"
ctx.beginPath();
ctx.moveTo(100,120);
ctx.lineTo(100,750);
ctx.lineTo(220,750);
ctx.lineTo(100,700);
ctx.fill();

//sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(sunX, sunY, 50, 0, 2*Math.PI);
ctx.fill();


//clouds
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(cloud1X, cloud1Y, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(cloud2X, cloud2Y, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(cloud3X, cloud3Y, 40, 0, 2*Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(cloud4X, cloud4Y, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(cloud5X, cloud5Y, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(cloud6X, cloud6Y, 40, 0, 2*Math.PI);
ctx.fill();

//text
ctx.font = "25px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Riley Hodder", 750, 950)

//goat img
var goatImg = document.getElementById("goatEl");
ctx.drawImage(goatImg, goat1X, goat1Y, 90, 90 );
ctx.drawImage(goatImg, 650, 600, goat2X, goat2Y );
ctx.drawImage(goatImg, goat3X, goat3Y, 90, 90 );

//plane
var planeImg = document.getElementById("planeEl");
ctx.drawImage(planeImg, planeX, planeY, 90, 90 );
requestAnimationFrame(draw);

cloud1X = cloud1X + 2.5; 
if (cloud1X >= 1000) {
   cloud1X = -75;
   cloud1Y = Math.random() * 150;
 }

 cloud2X = cloud2X + 2.5; 
if (cloud2X >= 1000) {
   cloud2X = -75;
   cloud2Y = Math.random() * 150;
 }

 cloud3X = cloud3X + 2.5; 
if (cloud3X >= 1000) {
   cloud3X = -75;
   cloud3Y = Math.random() * 150;
 }

 cloud4X = cloud4X + 2.5; 
if (cloud4X >= 1000) {
   cloud4X = -75;
   cloud4Y = Math.random() * 150;
 }

 cloud5X = cloud5X + 2.5; 
if (cloud5X >= 1000) {
   cloud5X = -75;
   cloud5Y = Math.random() * 150;
 }
 
 cloud6X = cloud6X + 2.5; 
if (cloud6X >= 1000) {
   cloud6X = -75;
   cloud6Y = Math.random() * 150;
 }

planeX = planeX + 2.5; 
if (planeX >= 1000) {
   planeX = -75;
   planeY = Math.random() * 150;
 }

 sunX = sunX + 0.1; 
if (sunX >= 1000) {
   sunX = -75;
   sunY = Math.random() * 150;
 }

 goat2Y = goat2X + 10; 
if (goat2X >= 1000) {
   goat2X = +100;
   goat2Y = Math.random() * 150;
 }

 goat1X = goat1X + 1;      // yess the goat is supposed to be flying it just a special goat 
if (goat1X >= 1000) {
   goat1X = -75;
   goat1Y = Math.random() * 150;
 }

 goat3X = goat3X + 1; 
 if (goat3X >= 1000) {
    goat3X = -100;
  }

  if (skyR <= 255) {
   skyR+= 0.02;
 }

 if (skyG >= 165) {
   skyG-= 0.02;
 }

 if (skyB >= 0) {
   skyB-= 0.02;
 }

 


//markings for cords
//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(475, 550, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(715, 475, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(650, 385, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(163, 700, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(220, 750, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(105, 750, 20, 0, 2*Math.PI);
//ctx.fill();




//EXAMPLE   
//ctx.fillStyle = `brown`;
//ctx.fillRect(0, 200, 250, 25)
}
