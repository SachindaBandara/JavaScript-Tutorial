// arithmetic operators = operands ( values, variables, etc)
//                        operators ( + - * /)
//                        ex: a = x + 5;

let students = 30;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;
students = students % 2;

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

 students++; // increment operator
 students--; // decrement operator
 ++students;
 --students;

 console.log(students);

//------------------------------------------------------------

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication and division and module
    4. addition and subtraction

*/

let result = 3 + 4 ** 2 + 8 / 3 - 8;
console.log(result);

let result1 = (9 ** 2) + 8 * 3 - 9;
console.log(result1);