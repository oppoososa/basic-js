function countCats(matrix) {
  var count = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === "^^") count++;
    }
  }
  return count;
}

module.exports = {
  countCats,
};
