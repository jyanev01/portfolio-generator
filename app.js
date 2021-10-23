// var message = 'Hello Node!';
// var sum = 5 +3;



// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++){
//     console.log(profileDataArr[i]);
//     }
// };

// printProfileData(profileDataArgs);

// Using function expression syntax
// const adNums = function(numOne, numTwo) {
//     return numOne + numTwo;
// };

// // Using the new arro funciton syntax
// const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
// };

// const addNums = (numOne, numTwo) => numOne + numTwo;

// const sum = addNums(5,3); 
// // sum should be 8
// console.log(sum);

// const addNums = (numOne, numTwo) => {
//     console.log(numOne, numTwo);
//     return numOne + numTwo;
// };

// const message = 'Hello Node';

// if (true === true) {
//     const message = 'Hello ES6!';
//     let sum = 5;
//     sum += 10;
//     console.log(message);
//     console.log(sum);
// }

// console.log(message);
// console.log(sum);

// var is function-scoped, so redeclaring it in a block will casuse its value outside the block to change as well:

// var one ='one: declare outside the block';

// if (true === true) {
//     var one = 'one:declared inside the block'; // notice we redeclare 'one' here
//     console.log(one); // prints 'one: declare inside the block'
// }

// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. the outer 'var' variable was threfore replaced by inner variable.

// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable witht he same name whose scope is inside the block:

// let two = 'two: declared outside the block';

// if (true === true) {
//     let two = "two: decalred inside the block";
//     console.log(two); // prints 'two: declared inside the block'
// }

// console.log(two); // prints 'two: declared outside the block', because two declared is a separate variable. The 'let' variable are unrelated and threfore are unaffected by each other.

const printProfileData = profileDataArr => {
    // This ...
    for ( let i= 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log ('================');

    // Is the same as this...
    profileDataArr.forEach((profileItem => console.log(profileItem)));
};