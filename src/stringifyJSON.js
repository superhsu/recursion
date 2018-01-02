// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/* inputs are anytype of data and the output would be a string version of the input. 
   use if else statements to return string version of inputs that dont need loops 
   use loop and recursion to iterate through object and array type inputs to return a string version*/ 


var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined' || typeof obj === 'function') {
  	return undefined; 
  }

  else if (typeof obj === 'number') {
  	return '' + obj; 
  }

  else if (typeof obj === 'null') {
  	return '' + obj; 
  }

  else if (typeof obj === 'boolean') {
  	return '' + obj; 
  }

  else if (typeof obj === 'string') {
  	return '\"' + obj + '\"';
  }

  else if (typeof obj === 'object' && Array.isArray(obj) === true) {
    var arrStart = '['; 
  	var arrEnd = ']';
  	for (var i = 0; i < obj.length; i++) { 
  	  arrStart += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
      	arrStart += ','; 
      }
      else {
      	arrStart += arrEnd; 
      }
  	}
  	return arrStart; 
  }



};
