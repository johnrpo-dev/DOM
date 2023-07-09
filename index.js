
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const pc = document.getElementsByClassName('pc')
const pi = document.getElementById('pi')
const input = document.querySelector('input')

console.log({
    h1,
    p,
    pc,
    pi,
    input
});

h1.innerHTML = 'Manipulacion del <br> DOM'

input.value = '@'
pi.innerHTML = ''

const img = document.createElement('img')
img.setAttribute('src', 'https://img1.wallspic.com/crops/4/7/7/9/3/139774/139774-cabeza-el_modelado_en_3d-ilustracion-humanos-quijada-3840x2160.jpg')

console.log(img);

pi.append(img)
