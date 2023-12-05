console.log("hello thsis is lecture 5");

console.log("\n welcome to our club , only 18 and above are allowed");

let age="18";
if(age >= 18 ){//be careful we can't have a strict comparison
    console.log("you are an adult you should be responsible and not drink");
}else if(age===18){
    console.log("welocome you just turned 18 and you have the right to drink but i suggest the reverse ");
}else{
    console.log("you are just a kiddie , growup and then come ");
}

//here we are not doing strict comparison , the only strict comparison operator in js is equality (===) , to do strict comparison do this 
if(typeof age === typeof 18 && age>18)
console.log("good strict comparison");
else{
    console.log("strict inequality");
}


//loops 
//while loops 
let a =0;
while(a<10){
    console.log(a);
    a++;
}

//for loop 
console.log("we are using for loop");
for(let b=1 ; b<=10 ; b*=3){
    console.log(b);
}


