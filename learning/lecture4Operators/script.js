console.log("today we will learn about operators in js ");

//comparison opeartors=> always gives a boolean value 
let a =10;
let b=9;
console.log(a<b);
console.log(a>=b);

//equality
console.log(a==b);
console.log('\n');

//strict equality
console.log(a===b);
//strict inequality
console.log(a!==b);

//strict and loose equality
//strict equality - it checks both VALUE and DATA TYPES
//it returns true only when both are true 
console.log(20 === '20');//false strict equality
console.log(20 == '20');//true due to simple equality
console.log(20 !== "20");//true : data type is not same
console.log(20 != "20"); //false they are equal , according to loose or simple equality

//TIPs: 
//The Good Twins : === and !==
//The Evil Twins : == and !=

console.log("" == "0");//false
console.log("" == 0);//true 
//this is a bug in js and because of this we should avoid using == or != and instead use === and !==
console.log(false == "false")//false
console.log(false == "0")//true 

console.log(true == 1); //true 
console.log(true == '1');//true
console.log(true === 1);//false


//logical operators - AND(&&) , OR(||) , NOT(!)
let bali = true && !false && true;
console.log(`we can insert more than two operators in a single logical operators - bali: ${bali}`);

//TRUE or FALSE are not keyword 

