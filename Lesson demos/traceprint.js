
function foo (){
    console.log("foo");
    bar();
}

function bar(){
    console.log("bar");
    other();
}

function other(){
    console.trace();
}

foo();
console.log();

//Stacks
//LIFO
//push() add
//pop() remove
//peek() mvoe to top

class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }
    pop(){
        this.items.pop();
    }
    peek(){
        return this.items[this.items.length -1];
    }
}

myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(3);

console.log(myStack.items);

myStack.pop();
console.log(myStack.items);

let items = myStack.peek();
console.log(items);
console.log(myStack.items);