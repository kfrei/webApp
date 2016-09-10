// ******************************* 

// STEP 1: 
// Wrap the entire contents of script.js inside of an IIFE

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"

for (var i = 0; i < names.length; i++) {

  // STEP 11:
  // Retrieve the first letter of the current name in the loop.

  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
