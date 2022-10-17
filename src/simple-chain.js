const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [0,0,0],
  chainStr: '',

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (!value) {
            this.chain.push(" ");
        }
        else {
            this.chain.push(value);
        }
        return this;
  },
  removeLink(position) {
    if ((typeof position !== 'number') || (position == null || undefined)) {
            return "You can't remove incorrect link!";
        }
        else if (position < 0 || position > this.getLength()) {
            console.log( "You can't remove incorrect link!");
            return "You can't remove incorrect link!";
        }
        else {
            this.chain.splice(position, 1);
        }
        //console.log(this.chain.length);
        return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    for (let i = 0; i < this.chain.length; i++) {
            this.chain[i] = "( " + this.chain[i].toString() + " )"
        };
        this.chainStr =  this.chain.join("~~");
        this.chain = [];
        return this.chainStr;
  }
};

module.exports = {
  chainMaker
};
