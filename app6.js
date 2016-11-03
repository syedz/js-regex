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

// var str = `foo
// foobar
// foobaz
// fooboo`;

var str = `800-456-7890
(555) 456-7890
4564567890`;

// var regex = /foo(bar)/g; // get foo or foobar
// var regex = /foo(bar|boo)?/g; // get foo followed by 0 or 1 instances of bar or foo
// var regex = /foo(bar|boo)/g;
// console.log(str.replace(regex, '**$1**'));

// var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
var regex = /\(?(?:\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
console.log(str.replace(regex, 'area code: $1'));

var output = function(str, regex, target) {
  target.innerHTML = str.replace(regex, function(str) {
    return `<span>${str}</span>`;
  });
};

output(str, regex, document.querySelector('pre'));
