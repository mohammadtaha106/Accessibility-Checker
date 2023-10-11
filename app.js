// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code goes here
    
    // Example: Get an element by its ID and manipulate it
    var myElement = document.getElementById("myElement");
    myElement.innerHTML = "Hello, World!";
    
    // Example: Add an event listener to a button
    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
      alert("Button clicked!");
    });
    
    // More JavaScript code can be added below
  });
  