

let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let img = document.querySelector(".img")


btn.addEventListener("click", function(){

    let inputValue = input.value
    img .src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

})