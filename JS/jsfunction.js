// function hello(user ='Guest'){
//    console.log(`hello ${user}`);//backticks
// }

// hello("riya");


// hello();



// function sum(a, b) {
//    console.log('before return');
//    return (a + b);
//    console.log('after return');//unreachable
// }
// console.log(sum(23, 34));
// console.log(sum());//NaN
// // console.log(sum(1));


// const hey=()=>console.log('hello')//function expression := anonymous expression
// hey();

const add=(a,b)=>a+b
console.log(add(34,2));

//IIFEE

// ()();
// (function(){
//    console.log("hello ria")
// })();


function hello(user,callback){
   console.log(`hello ${user}`);
   callback();
}

hello('riya',function(){
   console.log(add(5,5))});
   
hello('riya',()=>{
   console.log(add(4,5))});


