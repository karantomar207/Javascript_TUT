let a = Math.round(Math.random() *100)
console.log(a)
let usernumber = prompt("Enter a number")
if (a == usernumber) {
  console.log("Number is matched", a)
} else if (a > usernumber) {
  console.log("Random number is greater than user input number")
} else if (a < usernumber) {
  console.log("Random number is less than user input number ")
}