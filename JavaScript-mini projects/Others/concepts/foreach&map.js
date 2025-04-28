const numbers=[1,2,3,4,5];

//Map - returns a new array (Preserves the original array)
const squares=numbers.map(square);
console.log(squares);
function square(element){
   return Math.pow(element,2);
}

//Foreach - iterate over and apply specified function to each element
const triple=numbers.forEach(cube);
function cube(element,index,array){//correct order of the three arguments
   const result= array[index]=Math.pow(element,3);
   console.log(result);
} 