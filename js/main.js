// let removeLastChar=()=>{
//        let input = document.getElementById("input");
//     input.value = input.value.slice(0, -1);
// }


let classs = document.getElementById('classs')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')


seven.addEventListener('click', () => {
    classs.value += 7
    
})

eight.addEventListener('click', () => {
    classs.value += 8
    
})

nine.addEventListener('click', () => {
    classs.value += 9
    
})