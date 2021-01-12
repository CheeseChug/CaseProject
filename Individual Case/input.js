"use strict";

// global variables
var profile = {};
var lodging = [];
var objectString;
var arrayString;

// add lodging to profile
function registerLodging(event) {
   if (event === undefined) { // get caller element in IE8
      event = window.event;
   }
   var callerElement = event.target || event.srcElement;
   var lodgingName = callerElement.value;
   if (callerElement.checked) { // if box has just been checked
// replace with statement to add checkbox value to lodging array

      // add checkbox value to list in profile section
      var newLodging = document.createElement("li");
      newLodging.innerHTML = lodgingName;
      document.getElementById("profileLodgings").appendChild(newLodging);
      // make profile section and lodging section visible
      document.getElementById("profile").style.display = "block";
      document.getElementById("lodgingsSection").style.display = "block";
   } else { // if box has just been unchecked
      var listItems = document.querySelectorAll("#profileLodgings li");
      for (var i = 0; i < listItems.length; i++) {
         if (listItems[i].innerHTML === lodgingName) {
// replace with statement to remove element at index i from array

            // remove lodging from profile list
            listItems[i].parentNode.removeChild(listItems[i]);
            break;
         }
      }
   }
}

function createEventListeners() {   
   var lodgings = document.getElementsByName("lodgings");
   if (lodgings[0].addEventListener) {
      for (var i = 0; i < lodgings.length; i++) {
         lodgings[i].addEventListener("change", registerLodging, false);
      }
   } else if (lodgings[0].attachEvent) {
      for (var i = 0; i < lodgings.length; i++) {
         lodgings[i].attachEvent("onchange", registerLodging);
      }
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}