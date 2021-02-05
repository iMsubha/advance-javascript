console.log("-----------Undefined---------");
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

console.log("----------Null-------------");
//null
const nullNumber= null;
console.log("null:",nullNumber);
console.log("type of null:", typeof null);

console.log("null === undefined:", null === undefined);
console.log("null == undefined:", null == undefined);
console.log("!null:",!null);

console.log("------------Not a number(NaN)---------");
console.log("isNaN=true, !Nan = Number/ isNaN = false");
console.log("typeof NaN:",typeof NaN);
console.log("isNaN(null)",isNaN(null)); // think as, null=0
console.log("isNaN(NaN):",isNaN(NaN));
console.log("isNaN(!NaN):",isNaN(!NaN)); 
console.log("isNaN(1 + null):", isNaN(0 + null));
