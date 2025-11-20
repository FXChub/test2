var numbers = [1, 2, 3, 4, 5]

for i = 0; i < numbers.length; i++ {
    if(numbers[i] => 3) {
    console.log("Number is: " + numbers[i])
    else
    console.log("Too small!")
    }
}

function addNumbers(a, b) {
    return a + b;
}

var result = addNumbers(4, "5")
console.log("Result:" + result)

let myObject = {
    name: "Alex",
    age: "25",
    greet: function() {
    console.log("Hello, my name is " + name)
    }
}

myObject.greet();

if ((result < 5)  (result > 10)) {
    print("Big number");
else {
    print("Small number");
}
