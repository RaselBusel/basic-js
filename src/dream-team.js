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
  let membersClean;

  //console.log(Boolean([0,2]));

  if (((members == 0 || null || undefined || 'boolean') ||
     (typeof members == 'number')) &&
     (!Array.isArray(members)))
  {
      console.log('false');
      return false;
  }
  else {
      membersClean = members.filter((key) =>
      typeof key == 'string' && key !== ''
      );

      for (let i = 0; i < membersClean.length; i++) {
          membersClean[i] = membersClean[i].trim();
          membersClean[i] = membersClean[i].toUpperCase();
      }

      membersClean.sort();

      secretName = membersClean.reduce((prevLet, nextLet) =>
      prevLet + nextLet[0], '');



      console.log(secretName);
  }
  return secretName.toUpperCase();
}

module.exports = {
  createDreamTeam
};
