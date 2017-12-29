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

  //set recursion here 
  search(className, document.body.childNodes, output); 

  return output; 
};

var search = function (className, childNodes, output) {
	if (childNodes.length === 0) {
		return; 
	}

	else {
		for (var i = 0; i < childNodes.length; i++) { 
			var currentNode = childNodes[i]; 

			if ((currentNode !== undefined && currentNode.classList !== undefined) && (currentNode.classList.contains(className))) {
				output.push (currentNode); 
			}  

			search(className, currentNode.childNodes, output); 
		}
		return; 
	}
}
