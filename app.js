var trafficSignal = document.getElementById("traffic_signal")

function turnOnRedLight() {
    var redLight = document.getElementById('red_light');
    redLight.style.backgroundColor='red';
    var gif = document.getElementById('car_img')
    gif.src = 'images/red.png'
}
function turnOffRedLight() {
    var redLight = document.getElementById('red_light');
    redLight.style.backgroundColor='rgb(45,47,49)';
    var gif = document.getElementById('car_img')
    gif.src = 'images/yellow.gif'
}

function turnOnYellowLight() {
    var yellowLight = document.getElementById('yellow_light');
    yellowLight.style.backgroundColor='yellow';
    var gif = document.getElementById('car_img')
    gif.src = 'images/yellow.gif'
}
function turnOffYellowLight() {
    var yellowLight = document.getElementById('yellow_light');
    yellowLight.style.backgroundColor='rgb(45,47,49)';
    var gif = document.getElementById('car_img')
    gif.src = 'images/green.gif'
}

function turnOnGreenLight() {
    var greenLight = document.getElementById('green_light');
    greenLight.style.backgroundColor='green';
    var gif = document.getElementById('car_img')
    gif.src = 'images/green.gif'
}
function turnOffGreenLight() {
    var greenLight = document.getElementById('green_light');
    greenLight.style.backgroundColor='rgb(45,47,49)';
    var gif = document.getElementById('car_img')
    gif.src = 'images/green.gif'
}