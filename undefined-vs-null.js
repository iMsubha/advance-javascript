//variable
let fun = undefined;
console.log("Variable:", fun);

//not used return in a function
function add(num1, num2){
    console.log(num1 + num2);
}
console.log("In a function:",add(12, 3));

//call a property which is not in a object

const student ={name:"subha", phone: 1234478};
console.log("In an object:",student.id);

//array
const num = [34,67,9];
console.log("In an array:",num[15]);