increase = document.getElementById("increase")
decrease = document.getElementById("decrease")
reset = document.getElementById("reset")

number = parseFloat(document.getElementById("display-number").innerHTML)


console.log(number)

increase.addEventListener("click", add =>{
    number = number + 1
    document.getElementById("display-number").innerHTML = number 
    console.log(number)

})
decrease.addEventListener("click", add =>{
    number = number - 1
    document.getElementById("display-number").innerHTML = number 

})
reset.addEventListener("click", add =>{
    number = 0
    document.getElementById("display-number").innerHTML = number 
})
