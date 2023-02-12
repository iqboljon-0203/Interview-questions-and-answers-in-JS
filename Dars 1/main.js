///Interview questions
// let 
// var
// const
// a=10;
// let b=120;
// var c=20;
// let d;
// /////reserved keywords
// // let new="salom";
////
// var => global;
// var age=20;
// var age=30;
// age=40;
// console.log(age);
//// let => scope
// let age=20;
// age=30;
// // let age=40;
///const=o'zgarmas
// const age=10;

// console.log(age);


///Scope
// var=> function scope
// var age=20;
// console.log(window);
// function get(){
//     var age=20;
// }
// get();
// console.log(window);
// {let age=20;}
// console.log(age);
// console.log(window);
// function get(){
//     let age=20;
// }

// console.log(age);
// #const
// for(let i=0;i<10;i++){
//     const age=20;
// }
// console.log(age);

////for
// let i;
// for(i=0;i<10;i++){
//     // console.log(i);
// }
// console.log(i);
///primitive=>number,string,boolean,bigInt,symbol,null,undefined
///non-primitive=> obeject(function,array,object)

////NaN=>not a Number
// console.log("asd1"-12);

////
// console.log(Number("1234a"))
// console.log(Number.parseInt("12h34.2323dasjhhdsajk"))
// console.log(Number.parseFloat("12.3h34.2323dasjhhdsajk"))
/////log
// console.log(Boolean(undefined));
// false=>null,undefined,0,"",false
// ====

// let a=20;
// console.log(a);

// console.log("12a"==12);=>return boolean
// console.log("12"===12);=> first check data type
/// && || !

// console.log(false||false);
// console.log(!true);

child.onclick=(event)=>{
    console.log(event);
    event.stopPropogation();
}