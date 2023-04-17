const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr=[];
  members.forEach(el=>{
    if (typeof(el)==='string') {
      let letter = el.trim().slice(0, 1).toUpperCase();
      arr.push(letter);
    }
  })
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};
