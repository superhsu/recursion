// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// inputs are anytype of data and the output would be a string version of the input. 

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
  	return '' + obj; 
  }

  else if (typeof obj === '')
};
