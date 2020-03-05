const bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}
const output = sum(5, 10);
console.log(output);
console.log(bonus);
