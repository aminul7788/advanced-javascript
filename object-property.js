const student = [
    {id: 10, name: "Nushrat"},
    {id: 15, name: "Bidya"},
    {id: 17, name: "Mahiya"},
    {id: 19, name: "Moon"}
];
const names = student.map( s => s.name);
const ids = student.map( s => s.id);
const bigger = student.filter( s => s.id >15);
const biggerOne = student.find( s => s.id > 15);
// console.log(names);
// console.log(ids);
// console.log(bigger);
console.log(biggerOne);