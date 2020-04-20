let count = 100;
function add() {
  count++;
}

module.exports = {
  get count() {
    return count
  },
  add
};
