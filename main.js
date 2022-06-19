// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = (num) => {
  return num.toString()
}


// Write a JavaScript program to convert a string to the number.
const string2Num = (str) => {
  return parseInt(str)

}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const checkDataType = (datatype) => {
    return typeof datatype;
  }
// console.log(checkDataType("str"))
// console.log(checkDataType(5))
// console.log(checkDataType(false))
// console.log(checkDataType(null))
// console.log(checkDataType(undefined))
// console.log(checkDataType(NaN))

// Write a JavaScript program that adds 2 numbers together.
const sum = (num1, num2) => {
  return num1 + num2;
}


// Write a JavaScript program that runs only when 2 things are true.
const checkAgeAndHeight = (age, height) => {
  if (age >= 10 && height >= 108) {
    return 'You may ride the rollercoaster'
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const checkForAgeOrHeight = (age, height) => {
  if (age >= 10 || height >= 108) {
    return 'You may ride the rollercoaster'
  }
}


// Write a JavaScript program that runs when both things are not true. 

// === This is the example you gave us in class ===
const notAgeAndHeight = (age, height) => {
  if (age >= 10 && height >= 108) {
    return 'You may ride the rollercoaster'
  } else {
    return 'Both things are false'
  }
}
// === I came up with another that fit the instruction a little better
const neitherANorB = (a, b) => {
  if (a === false && b === false) {
    return 'Both A and B are false.'
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
