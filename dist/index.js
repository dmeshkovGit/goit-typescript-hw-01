import { concatenation } from "./concatenation";
function add(num1, num2) {
    return num1 + num2;
}
add(1, 1);
function greet(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
let user = { firstName: 'Bob', lastName: 'Jankins' };
// console.log(greet(user));
const btn = document.querySelector('button');
const input = document.querySelector('input');
if (btn && input) {
    btn.addEventListener('click', () => {
        concatenation(input.value, 'hello !');
    });
}
//# sourceMappingURL=index.js.map