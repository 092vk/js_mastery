console.log("hello tricky parts ");

//global scope
const arr=2;

const func=()=>{
    console.log(arr);
}
func();
console.log(`arr is accessible inside function and outside function-${arr}`);


//local scope or function scope 
const sum1=()=>{
    const a=1;
    const b=2;
    const sum2=()=>{
        console.log(`the value of a and b are accessible inside this function becuz it is inside = a+b = ${a+b}`);
    }
    sum2();
    return a+b;
}
let result = sum1();
console.log(result);
// console.log(`a=${a} and b=${b}`);
//the above code is giving error as a and b are function or local scoped 


//block scope
//block scope is similar to function scope but here we have blocks - if , else statements , functions , loops , you cant access varibales inside them , out of the block 

if(true){
    var a=10;
    let b=11;
    const c=12;
    console.log(a,b,c);
}
console.log(a);//we cant print b,c
// const sum3 = () => {
//     var a=10;
//     console.log(a);
// }

console.log(a);
// console.log(b,c)error




//hoisting in javascript
//hoisting is a feature in programing languages where all of the declarations made in a block moves at top of the block and it is then initialised with value where they were initially declared 

//this only works for var and does not work for let and const , so it is advised to use let and const instead of var 


//clousers in js 
const closerOuter=()=>{
    const nama ="vievk";
    console.log(nama);
    const closerInner=()=>{
        console.log(nama);
    }
    return closerInner;
}
// closerInner(); we can't call closerinner as we have to call outer function first;
const chunky = closerOuter();
chunky();
