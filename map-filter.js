console.log("-----Array-----");
//----map-----[return array]
const numbers = [4,6,8,1,9,0,2];

const result = numbers.map(number => number * number);
console.log(result);

let bigger = numbers.map(number => number>5);
console.log(bigger);

//----filter-----[return array]
bigger = numbers.filter(number => number>5);
console.log(bigger);

//----find---[return one element]
bigger = numbers.find(number => number>5);
console.log(bigger);
//["find" first element matches the condition]

 console.log("----- Array of objects-----");
//----map-----[return array]
const students = [
    { id: 21, name: 'Jony'},
    { id: 81, name: 'Rony'},
    { id: 90, name: 'Pony'},
    { id: 23, name: 'Sony'}
];

const names = students.map(student => student.name);
const ids = students.map(student => student.id);
console.log(names);
console.log(ids);

//----filter-----[return array]
const idBiggerThan30 = students.filter(student => student.id > 30);
console.log(idBiggerThan30);

//----find---[return one element]
const idBiggerThan30Find = students.find(student => student.id > 30);
console.log(idBiggerThan30Find);
