// Q-1 What the Following Print->

let str="Har\""                      //  \" is escape sequence char   and count as a single character0

console.log(str.length);



// Q-2 Use of Includes Function

const sen="this is my friend"
const word="friend"

console.log(sen.includes(word))


//Q-3 convert string into Lowercase

const sen1="this is my friend"
console.log(sen1.toLocaleUpperCase())


// Q-4 tell Amount  in given string

const value ="Give me 200"
console.log(value.slice("Give me ".length))
console.log(typeof Number.parseInt(value.slice("Give me ".length)))     
   


// Thoda Gyan 

// To convert String to Number

// Call Function  "Number.parseInt"

// Q-5 Try to change the character at Given String

let fr="Hello my friend"

// As String are Immmutable so we can not change existing String