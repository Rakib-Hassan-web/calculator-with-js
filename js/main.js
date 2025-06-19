// -----------------dom part st-----------------

let classs = document.getElementById('classs')

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')

let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')

let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')

let doubleZero = document.getElementById('doubleZero')
let singlezero = document.getElementById('singlezero')


// -----------------dom part end-----------------


// --------------First row buton part st----------

let clearbtn = () => {
    classs.value = ''
}



let dot = () => {
    classs.value += '.'
}

let slash = () => {
    classs.value += '/'
}

// --------------First row buton part st----------


// --------------(num 1 To 10 click) part st--------------
one.addEventListener('click', () => {
    classs.value += 1
})

two.addEventListener('click', () => {
    classs.value += 2
})

three.addEventListener('click', () => {
    classs.value += 3
})

four.addEventListener('click', () => {
    classs.value += 4
})

five.addEventListener('click', () => {
    classs.value += 5
})

six.addEventListener('click', () => {
    classs.value += 6
})

seven.addEventListener('click', () => {
    classs.value += 7
})

eight.addEventListener('click', () => {
    classs.value += 8
})

nine.addEventListener('click', () => {
    classs.value += 9
})

// --------------(num 1 To 10 click) part end--------------


// -------(+,-,* button work) part st----------

let soman=()=>{
    classs.value=classs.value = eval(classs.value)  
}

let plus=()=>{
    classs.value=classs.value += '+'  
}
let minas=()=>{
    classs.value=classs.value += '-'  
}

let multiply=()=>{
    classs.value=classs.value += '*' 
}

// -------(+,-,* button work) part end----------


// ------- 00 and 0 buton work part st----------


doubleZero.addEventListener('click', () => {
    classs.value += '00'
})

singlezero.addEventListener('click', () => {
    classs.value += 0
})




// ------- 00 and 0 buton work part st----------


// ------------remove last num part st------------

let removeLastChar = () => {
    let input = document.getElementById("classs");
    classs.value = classs.value.slice(0, -1);
}

// ------------remove last num part st------------