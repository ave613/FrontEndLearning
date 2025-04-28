// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

//Spread operator = ... allows an iterable such as an array or string 
//                      to be expanded into seperate elements
//                       (unpacks the elements)
let fruits=["apple","orange","banana"];
let vegetables=["carrots","lettuce","potatoes"];

let groceries=[...fruits, ...vegetables, "eggs","milk"];
console.log(groceries); 

// Rest parameters = (...rest) allow a function work with a variable
//                    number of arguments by bundling them into an array

function openFridge(...foods){
    console.log(...foods); //used spread -> show as single values
}

function getFood(...foods){
    return foods;
}
const food1="pizza";
const food2="sushi";
const food3="tacos";
const food4="burger";

openFridge(food1,food2,food3,food4);
const foods = getFood(food1,food2,food3,food4);
console.log(foods); // show as array

//Example 1
function getAverage(...numbers){
    let result=0;
    for(number of numbers){
        result+=number;
    }
    return result/numbers.length;
}
let average = getAverage(63,75,90,85);
console.log(`Average = ${average}`);

//Example 2
function combineString(...strings){
    return strings.join(" ");
}
const fullName = combineString("Mr.","Spongebob","Squarepants","III");
console.log(fullName);
