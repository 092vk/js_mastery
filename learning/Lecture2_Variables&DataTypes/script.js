
//js is a dynamically typed language which means that we don't need to tell the data type of variable when we are declaring the variable unlike in c and c++ and like in python 


var variable_name="we will be learing about variables and data types today";

console.log(variable_name);

let variable2="vivek1";
console.log(variable2);
variable2="let is the prefered keyword to declare a variable in the modern js , because it is block scope based ";
console.log(variable2);
variable2="did'nt i told you , let is overwritable and so do var , but not const , ";
console.log(variable2);


const variable3="vaivek3";
console.log(variable3);
// variable3="but this time since we are using const we can't change the value of variable3 ";


//rules for variable naming 
//1.only $, _, and alphabet are allowed as the first letter of the name of a variable 
//2.other than numbers , alphabets , underscore and $ , nothing else is allowed in a variable name 
//3. no varible name can be redeclared and no keywords can be used as a variable name .


//data type in js 
//there are two type of data types in js 
//1.primitive data types - string, numbers, null , undefined ,bool etc
//2.complex data type - objects 

//primitive data types 


//1.string - we write strings in js in 3 ways , single commas , double commas they both are called simple string and are same , the other type of string is called complex string and it is sorrunded by backticks 

let str1='i am single comma string ';
console.log(str1);
let str2="i am a simple double comma string , i am same as a single comma string";
console.log(str2);

let str3=`ok , so i am a complex string , and i can contain variables inside me by using $ inside me `;
console.log(str3);

let crush="ms p";
console.log(`hello ${crush} how are you`);

let value=`${2+8}`;
console.log(value);



//sizeof
console.log(typeof value);


//2.Numbers :
let num1=555;
let num2=100;
console.log(num1);
console.log(num2);

let result =num1/num2;
console.log(result);

let var1="hello";
let var2=100;
let result1 = var1/var2;
console.log(result1);
//we are getting output for result1 as NAN , which is a number  which indicates that a mathematical computational error has occured 

console.log(typeof result1);
//we are getting number which indicates that NAN itself is a number which indicates ab error 


//3.boolean - true , false 
let iscool=true;
console.log(iscool);
console.log(20>30);//will give false 
if(iscool)console.log("hey man you are cool ");
else console.log("you need to take a chill pill");

//4.null - it is a value that is assigned , when we dont know the value currently , remember it is a assignable value 
let a=null;
console.log(a);
console.log(typeof a );
//we get the data type of null as a object , which is not correct and it should be null, becuz null is a datatype of its own , this is a bug in js ,but it is left there as changing it can cause more damage 


//5.undefined- 
let a1;
console.log(a1);
console.log(typeof a1);







