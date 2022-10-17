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
  let secretName;

  if (members.length == 0) {
      return false;
  }
  else {
      let membersClean = members.filter((key) =>
      typeof key == 'string' && key !== ''
      ).sort();

      secretName = membersClean.reduce((prevLet, nextLet) =>
      prevLet + nextLet[0], '');
  }
  return secretName;
}

module.exports = {
  createDreamTeam
};
