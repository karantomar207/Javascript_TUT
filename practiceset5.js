// push value through user input

let array=[43,5,6,7,5,34];
let a =prompt("Enter a number")
array.push(a)
// console.log(array)


// fillter the value divide by 10

let array7=[43,20,5,6,7,5,10];
const newarray=array7.filter((value)=>{
    return value%10==0;
})
console.log(newarray)

const squarearray=array7.map((x)=>{
    return x*x
})
console.log(squarearray)

