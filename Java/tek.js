function toBinary(number) { 

  return number.toString(2).padStart(8, "0") 

} 

 

const ch = "Simeon"

const asciiCode = ch.charCodeAt(0) 

const binary = toBinary(asciiCode) 
let binaryNum = "01111000 01111001 01111010 "

let desimaltall = parseInt(binaryNum.replace(/ /g, ""), 2)
console.log("Binærtall: ", binaryNum, " tilsvarer desimaltall: ", desimaltall)

console.log("Tegn:", ch) 

console.log("ASCII:", asciiCode) 

console.log("Binært:", binary) 

const text = "ABC" 

const code0 = text.charCodeAt(0) 

const code1 = text.charCodeAt(1) 

const code2 = text.charCodeAt(2) 

const text = "Cedrick";
const shift = 3; // Antall plasser å flytte (f.eks. +3)
let encrypted = "";

for (let i = 0; i < text.length; i++) {
  const code = text.charCodeAt(i);    // Hent tegnkoden til bokstaven
  const shifted = code + shift;       // Øk tegnkoden med "shift"
  encrypted += String.fromCharCode(shifted); // Lag ny bokstav og legg til
}

console.log(encrypted);
const binary0 = toBinary(code0) 

const binary1 = toBinary(code1)

const binary2 = toBinary(code2)
console.log("Tegn:", text) 

console.log("ASCII:", code0, code1, code2) 

console.log("Binært:", binary0, binary1, binary2)
