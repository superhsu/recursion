// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = []; 

  if (document.body.classList.contains(className)) {
  	output.push(document.body);
  }

  //use recursion to find childnode elements that have the givin class name 
  search(className, document.body.childNodes, output); 

  return output; 
};

var search = function (className, childNodes, output) {
	if (childNodes.length === 0) {
		return; 
	}

	else {
		for (var i = 0; i < childNodes.length; i++) { 

		}
	}
}
