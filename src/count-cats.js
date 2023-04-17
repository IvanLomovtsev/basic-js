const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let numberOfCats = 0;
    console.log(matrix)
    matrix.forEach(element => {
        console.log(element)
      element.forEach (el =>{
        console.log(el)
        if(el==="^^"){
          numberOfCats++;
        }
      } )
    });
    return numberOfCats;
  }

module.exports = {
  countCats
};
