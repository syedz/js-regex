'use strict';
/*
  Global flag will find multiple across the string
  . will find all of the strings following that
  . alone will search for any character excluding line breaks
  a{4} will search for 4 a's in a row
  a{5,} searches for at least 5 a's up to infinite
  a{5,6} searches for at least 5 a's up to 6
  a{0,} matches all of the empty strings
  a{1,} matches 1 character up to infinite (a+ does the same thing)
  a? means that a is optional
*/

var str = `12/1/16
12-16-13
11/12/16
12-12-2016`;
// var regex = /^12/gm; // m is multi line flag, ^ outside of a character means line beginning operator
var regex = /^12.+16$/gm; // $ is endline operator

console.log(regex.exec(str));

var output = function(str, regex, target) {
  target.innerHTML = str.replace(regex, function(str) {
    return `<span>${str}</span>`;
  });
};

output(str, regex, document.querySelector('pre'));
