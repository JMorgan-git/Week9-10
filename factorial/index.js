const express = require('express');
const morgan = require('morgan');

function fac(fact) {
    let res = 1;
    console.log(`The factorial of ${fact}! is... `);
    for (let i = 1 ; i <= fact ; i++ ){
        res = res*i;
    };
    console.log(res);
    return res;
};

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
    };
};

function doggo(x){
    let s1 = "st";
    let s2 = "nd";
    let s3 = "rd";
    let s4 = "th";
    const array = [];
    for(let i = 1; i <= 100; i++){
        if (i == x){
            i++;
        };
        if(i == 1 || i == 21 || i ==  31 || i ==  41 || i ==  51 || i ==  61 || i ==  71 || i ==  81 || i ==  91){
            array.push(`${i}${s1}`);
        }else if(i == 2 || i == 22 || i ==32 || i == 42 || i == 52 || i == 62|| i == 72 || i == 82 || i == 92){
            array.push(`${i}${s2}`);
        }else if(i == 3 || i ==23 || i == 33 || i == 43 || i == 53 || i == 63 || i == 73 || i == 83 || i == 93){
            array.push(`${i}${s3}`);
        }else{
            array.push(`${i}${s4}`);
        };
    };
    for(i = 0; i < array.length; i++){
        console.log(array[i]);
    };
    return array[x-1];
};

module.exports = {
    fac,
    facrev,
    doggo
};