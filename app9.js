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

// var str = `it was the the thing`;
// var str = `it was the the thing thing`;
var str = `<b>Bold</b><i>italics</i>`

// var regex = /(the)\s?(?=\1)/g;
// var regex = /(\w+)\s?(?=\1)/g;
var regex = /<(\w+)>(.*)<\/\1>/g;

console.log(str.replace(regex, '$2\n'));

var output = function(str, regex, target) {
  target.innerHTML = str.replace(regex, function(str) {
    return `<span>${str}</span>`;
  });
};

output(str, regex, document.querySelector('pre'));
