const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

// const trueName = ['civic', 'anna', 'aziza', 'ata', 'apa']
// const falseName = ['tesla', 'zeekr', 'bmw', 'merscedes']

// const [a, b, c] = trueName;
// console.log(trueName);

// const [tes, zek, ux]= falseName
// console.log(falseName);
    
let del = ''
input.onchange=()=> {
    const trueName = ['civic', 'anna', 'aziza', 'ata', 'apa']
const falseName = ['tesla', 'zeekr', 'bmw', 'merscedes']

const res = 'Бул соз туура'

const res2 = 'Бул соз туура эмес'
const res3 = 'Мындай соз жок'
// const [a, b, c] = trueName;
// console.log(trueName);

// const [tes, zek, ux]= falseName
// console.log(falseName);

    if (trueName.includes(input.value)) {
        h1.innerHTML=input.value
        h2.innerText=res
        return trueName
    } if (falseName.includes(input.value)) {
        h1.innerHTML=input.value
        h2.innerText=res2
        return falseName
    } else {
        h2.innerHTML=res3;
        
    }
    


}
