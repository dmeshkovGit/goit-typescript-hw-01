import { concatenation } from "./concatenation";


type User = {
    firstName: string;
    lastName: string;
}

function add(num1: number, num2: number) {
    return num1 + num2;
}

add(1, 1)

function greet(person: User) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Bob', lastName: 'Jankins' };

// console.log(greet(user));


const btn = document.querySelector('button');
const input = document.querySelector('input');

if (btn && input) {
    btn.addEventListener('click', () => {
        concatenation(input.value, 'hello !');
    } )
}