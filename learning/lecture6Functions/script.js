console.log("hello functions");

console.log("today we will be learning about functions ");

function square(number){
    return number*number;
}
let a =10;
console.log(`a is ${a} and square(a): ${square(a)}`);

//different types of finction declaration 
let number = 10;

function cube1(number){
    return Math.pow(number,3);
    //writing functions this way allows us to use the .this keyword 
}
console.log(cube1(number));

//this is called as a function statement
const cube2= function(number){
    return Math.pow(number,3);
}
console.log(cube2(number));

//arrow function
const cube3 =(number)=>{
    return Math.pow(number,3);
    //arrow functions are the most preferred way to write functions in js 
}
console.log(cube3(number));


//whenever a function in js doent return anything , it return undefined by default , 
const func = function(){
    console.log("hello i am inside a function");
}
func();
console.log(func());//function will run and then we will get the output as undefined 

//arrow functions practice
let naam = "vivek";
const myname = (nama) => {
    console.log(`good morning ${nama}`);
}
myname(naam);


//different versions of arrow functions 
// -- no parameter bracket , no return 

const double = num => num*num;
let result = double(5);
console.log(result);




