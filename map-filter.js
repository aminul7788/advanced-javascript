// const numbers = [2, 3, 6, 5, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const numbers = [2, 3, 6, 5, 8];
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

const numbers = [2, 3, 6, 5, 8];
const result = numbers.filter(x => x >3);
console.log(result);