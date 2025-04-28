const numbers=[1,2,3,4,5];
const squares=numbers.map(function(element){
    return Math.pow(element,2);
});

const oddNums=numbers.filter(function(element){
    return element%2!== 0;
});

const total=numbers.reduce(function(accumulator,element){
    return accumulator+element;
});

console.log(squares);
console.log(oddNums);
console.log(total);