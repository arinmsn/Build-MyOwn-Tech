/*
Looping a Triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function looping_a_triangle(char, n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += char;
    console.log(str);
  }
}

// looping_a_triangle("#", 7);

module.exports = looping_a_triangle;
