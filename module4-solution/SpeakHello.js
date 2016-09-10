
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
	// STEP 3: Create an object, called 'helloSpeaker'
	var helloSpeaker = {};

	var speakWord = "Hello";

	// STEP 4: Rewrite the 'speak' function
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	  document.write("<br/>"+ speakWord + " " + name + "<br/>" );
	}
	// STEP 5: Expose the 'helloSpeaker' object to the global scope.
 	window.helloSpeaker = helloSpeaker;

})(window);


