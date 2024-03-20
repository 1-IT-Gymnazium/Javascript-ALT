//single line comment
/* multi line comment
*
*
*
*
 */

//wrong way to do it
let User = new Object(); // don't use this
console.log(User);

//correct way to do it
//1. explanation of the object
//2. explanation of the properties

/**
 * returns x to the power of y
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} x to the power of y
 * @example power(2,3) //8
 *
 */

function power(x, y) {
    return x ** y;
}
