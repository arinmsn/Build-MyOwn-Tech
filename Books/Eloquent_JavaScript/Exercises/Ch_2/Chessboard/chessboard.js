/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to
separate lines. At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern,
define a binding size = 8 and change the program so
that it works for any size, outputting a grid of the
given width and height.
*/
function chessboard(grid_size) {
  let chessboard = "";

  // Each row
  for (let row = 0; row < grid_size; row++) {
    let rowPattern = "";

    for (let col = 0; col < grid_size; col++) {
      if ((row + col) % 2 === 0) {
        rowPattern += " ";
      } else {
        rowPattern += "#";
      }
    }
    chessboard += rowPattern + "\n";
  }
  return chessboard;
}

console.log(chessboard(8));

module.exports = chessboard;
