// let removeLastChar=()=>{
//        let input = document.getElementById("input");
//     input.value = input.value.slice(0, -1);
// }

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


let clearbtn=()=>{
    classs.value=''
}


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