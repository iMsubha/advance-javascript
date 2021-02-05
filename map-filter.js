//array
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