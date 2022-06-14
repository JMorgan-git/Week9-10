const express = require('express');
const morgan = require('morgan');

function fac(fact) {
    let res = 1;
    console.log(`The factorial of ${fact}! is... `);
    for (let i = 1 ; i <= fact ; i++ ){
        res = res*i;
        if(fact==1){
            console.log(`${i}!`);
            return i;
            break;
        };
    };
    console.log(res);
}

function facrev(fact){
    console.log(`The factorial of ${fact} is... `);
    for(let j = 2 ; 1 <= fact ; j++){
        fact = fact/j;       
        if(fact<1){
            console.log('there is NONE, you picked a horrible number');
            break;
        }else if(fact==1){
            console.log(`${j}!`);
            return j;
            break;
        };
    }
}
fac(5);
facrev(120);