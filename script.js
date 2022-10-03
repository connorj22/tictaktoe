let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let reset = document.querySelector(".reset")
let i = 0

function colorChange(square) {
  if (square.style.backgroundColor != "red" && square.style.backgroundColor != "blue") { 
    if (i % 2 == 0) {
      square.style.backgroundColor = "red"
      i++
      console.log("red")
    } else {
      square.style.backgroundColor = "blue"
      i++
      console.log("blue")
    }
  } else {
    alert("Sorry that Square is taken")
  }
}

reset.addEventListener("click", () => {
  window.location.reload();
})

one.addEventListener("click", () => {
  colorChange(one)
  win()
})

two.addEventListener("click", () => {
  colorChange(two)
  win()
})

three.addEventListener("click", () => {
  colorChange(three)
  win()
})

four.addEventListener("click", () => {
  colorChange(four)
  win()
})

five.addEventListener("click", () => {
  colorChange(five)
  win()
})

six.addEventListener("click", () => {
  colorChange(six)
  win()
})

seven.addEventListener("click", () => {
  colorChange(seven)
  win()
})

eight.addEventListener("click", () => {
  colorChange(eight)
  win()
})

nine.addEventListener("click", () => {
  colorChange(nine)
  win()
})

function win() {
  if ((one.style.backgroundColor == "blue" && two.style.backgroundColor == "blue" && three.style.backgroundColor == "blue") || 
    (four.style.backgroundColor == "blue" && five.style.backgroundColor == "blue" && six.style.backgroundColor == "blue") ||
    (seven.style.backgroundColor == "blue" && eight.style.backgroundColor == "blue" && nine.style.backgroundColor == "blue") || 
    (one.style.backgroundColor == "blue" && four.style.backgroundColor == "blue" && seven.style.backgroundColor == "blue") || 
    (two.style.backgroundColor == "blue" && five.style.backgroundColor == "blue" && eight.style.backgroundColor == "blue") || 
    (three.style.backgroundColor == "blue" && six.style.backgroundColor == "blue" && nine.style.backgroundColor == "blue") || 
    (one.style.backgroundColor == "blue" && five.style.backgroundColor == "blue" && nine.style.backgroundColor == "blue"))
  {
    alert("blue Wins")
    window.location.reload()

  } else if ((one.style.backgroundColor == "red" && two.style.backgroundColor == "red" && three.style.backgroundColor == "red") || 
  (four.style.backgroundColor == "red" && five.style.backgroundColor == "red" && six.style.backgroundColor == "red") ||
  (seven.style.backgroundColor == "red" && eight.style.backgroundColor == "red" && nine.style.backgroundColor == "red") || 
  (one.style.backgroundColor == "red" && four.style.backgroundColor == "red" && seven.style.backgroundColor == "red") || 
  (two.style.backgroundColor == "red" && five.style.backgroundColor == "red" && eight.style.backgroundColor == "red") || 
  (three.style.backgroundColor == "red" && six.style.backgroundColor == "red" && nine.style.backgroundColor == "red") || 
  (one.style.backgroundColor == "red" && five.style.backgroundColor == "red" && nine.style.backgroundColor == "red"))
{
  alert("Red Wins")
    window.location.reload()
    
  } else if ((one.style.backgroundColor == "red" || one.style.backgroundColor == "blue") && 
    (two.style.backgroundColor == "red" || two.style.backgroundColor == "blue") &&
    (three.style.backgroundColor == "red" || three.style.backgroundColor == "blue") &&
    (four.style.backgroundColor == "red" || four.style.backgroundColor == "blue") &&
    (five.style.backgroundColor == "red" || five.style.backgroundColor == "blue") &&
    (six.style.backgroundColor == "red" || six.style.backgroundColor == "blue") &&
    (seven.style.backgroundColor == "red" || seven.style.backgroundColor == "blue") &&
    (eight.style.backgroundColor == "red" || eight.style.backgroundColor == "blue") &&
    (nine.style.backgroundColor == "red" || nine.style.backgroundColor == "blue"))
  {
    alert("tie") 
    window.location.reload()  
}

}