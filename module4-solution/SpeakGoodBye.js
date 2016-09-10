
// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
	// STEP 7: Create an object, called 'byeSpeaker' 
	var byeSpeaker = {};

	var speakWord = "Good Bye";

	// STEP 8: Rewrite the 'speak' function 
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	  document.write( "<b>"+ "<br/>" + speakWord + " " + name.bold() + "<br/>" +"</b>");
	}
	// STEP 9: Expose the 'byeSpeaker' object to the global scope.
 	window.byeSpeaker = byeSpeaker;

})(window);
