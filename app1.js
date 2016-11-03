'use strict';

var output = function(str, regex, target) {
  target.innerHTML = str.replace(regex, function(str) {
    return `<span>${str}</span>`;
  });
};

var str = `Is this This?`;

// var regex = new RegExp("it", "gi");
var regex = /is/gi;

output(str, regex, document.querySelector('pre'));

// console.log(regex.test(str)); // test() always returns true or false
// console.log(regex.exec(str)); // exec() returns more information
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));

// console.log(str.match(regex)); // match() returns an array of the matches

// console.log(str.replace(regex, function() {
//   return "XX"
// }));

// console.log(str.search(regex)); // returns index of the first pattern found
