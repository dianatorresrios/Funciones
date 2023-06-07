// Seleccionamos los elementos del DOM que representan las luces del semáforo
const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

// La función que cambia la luz del semáforo
function changeLight() {
  if (redLight.classList.contains('on')) { // Si la luz roja está encendida
    redLight.classList.remove('on');
    yellowLight.classList.add('on');
  } else if (yellowLight.classList.contains('on')) { // Si la luz amarilla está encendida
    yellowLight.classList.remove('on');
    greenLight.classList.add('on');
  } else { // Si la luz verde está encendida
    greenLight.classList.remove('on');
    redLight.classList.add('on');
  }
}