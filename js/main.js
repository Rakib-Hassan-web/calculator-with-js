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

// -----------------dom part end-----------------


// --------------First row buton part st----------

let clearbtn = () => {
    classs.value = ''
}

let singledel = () => {
    classs.value.toString().slice(0, -1)
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




let soman=()=>{
    classs.value=classs.value = eval(classs.value)  
}








// ------------remove last num part st------------

let removeLastChar = () => {
    let input = document.getElementById("classs");
    classs.value = classs.value.slice(0, -1);
}

// ------------remove last num part st------------