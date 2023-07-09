
const h1 = document.querySelector('h1')
const input = document.getElementById('calculo') 
const input2 = document.getElementById('calculo2')
const p = document.getElementById('resultado')
const btn = document.getElementById('btnCalcular')


btn.addEventListener('click', btnClic)


function btnClic(){
    res = parseInt(input.value) + parseInt(input2.value)
    p.innerHTML = res
}
