// Creating a auto marking javascript code   SHORT METHOD


// trying to generate 4 Random alphabets to 10 numbers
const rand = "abcd"

const answer = rand[Math.floor(Math.random() * rand.length)]

let results = [ ]

// Creating input for user

const a = prompt("how many questioned answered")

for(i = 1; i <  a ; i++){
  var b =  prompt("Input answer in questions accordingly starting from 1- " +a)
  answer == b ? results.push("true") : results.push("false")
}

// answer == b ? results.push("true") : results.push("false")

console.log(results)

results.forEach(element => {
  console.log(element)
});
 

//Creating a auto marking javascript code LONG METHOD ....................

// const one = answer
// const two = answer
// const three = answer
// const four = answer
// const five = answer
// const six = answer
// const seven = answer
// const eight = answer
// const nine = answer
// const ten = answer


// let userOne = prompt("Guess the 1st alphabet am thinking off now from range of A-D")
// let userTwo = prompt("Guess the 2nd alphabet am thinking off now from range of A-D")
// let userThree = prompt("Guess the 3rd alphabet am thinking off now from range of A-D")
// let userFour = prompt("Guess the 4th alphabet am thinking off now from range of A-D")
// let userFive = prompt("Guess the 5th alphabet am thinking off now from range of A-D")
// let userSix = prompt("Guess the 6th alphabet am thinking off now from range of A-D")
// let userSeven = prompt("Guess the 7th alphabet am thinking off now from range of A-D")
// let userEight = prompt("Guess the 8th alphabet am thinking off now from range of A-D")
// let userNine = prompt("Guess the 9th alphabet am thinking off now from range of A-D")
// let userTen = prompt("Guess the 10nt alphabet am thinking off now from range of A-D")





// one == b ? results.push(true) : results.push(false)
// two == b ? results.push(true) : results.push(false)
// three == b ? results.push(true) : results.push(false)
// four == b ? results.push(true) : results.push(false)
// five == b ? results.push(true) : results.push(false)
// six == b? results.push(true) : results.push(false)
// seven == b ? results.push(true) : results.push(false)
// eight == b ? results.push(true) : results.push(false)
// nine == b ? results.push(true) : results.push(false)
// ten == b? results.push(true) : results.push(false)


// console.log(results)
