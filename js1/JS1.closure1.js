// Run .js files at terminal/command prompt using: node JS1.closure1.js 
const hello3x = () => {
    let counter = 0
    return () => {
      if (counter === 3) {
        return ""
      }
      counter = counter + 1
      console.log("hello3x: counter = ", counter);
          return "hello"
    }
  }
console.log("hello3x = ", hello3x);

const threeF = hello3x(); console.log("threeF = ", threeF);
let b = threeF(); console.log("global: b = ", b); // b is "hello"
b = threeF(); console.log("global: b = ",b);     // b is "hello"
b = threeF(); console.log("global: b = ",b);     // b is "hello"
b = threeF(); console.log("global: b = ",b);     // b is ""
b = threeF(); console.log("global: b = ",b); // b will always be "" for all subsequent b = threeF() executions

  