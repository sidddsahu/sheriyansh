const slider = document.querySelector("#slider")
const content = document.querySelector(".content-1")


slider.addEventListener("click", function(){
    content.style.transform = "translateX(-50%)"

})


const rider = document.querySelector(".slider")
const filter = document.querySelector(".content-1")


rider.addEventListener("click", function(){
    filter.style.transform = "translateX(0%)"

})





var overlay = document.querySelector(".overlay")
var menu = document.querySelector(".menu")


menu.addEventListener("click",function(){
    overlay.style.transform ="translate(0%)"
})

var cross = document.querySelector(".cross")
var overlay = document.querySelector(".overlay")

cross.addEventListener("click",function(){
    overlay.style.transform = "translateX(100%)"
})


// var swipe = document.querySelector(".swipe")
// var kite = document.querySelector(".card-1")


// swipe.addEventListener("click",function(){
//     kite.scrollTo(-100, 0)
// })



function scrolll() {
    var left = document.querySelector(".card-1")
    left.scrollTo(-100, 0)
}

function scrollr() {
    var right = document.querySelector(".wanted")
    right.scrollTo(100, 0)
}
