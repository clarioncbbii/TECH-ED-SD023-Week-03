console.log("HAWAIYU!");

// ==================================================================================================================================================================== //

//TODO: BASIC GAME LOGIC
//- When the user cliks on the cookie, the total count of cookies goes up by 1
//- When the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

//WHAT ELEMENTS DO WE NEED?
//- We will need functions to contain the game logic
//- We will get the shop upgrade data from the API provided as part of the assignment
//- To create the logic for the shop upgrades, we have two options:
//OPTION 1: You could have a function to handle each upgrade
//OPTION 2:You could have a reusable function that works for ALL upgraded
// ** --> Option 2 is my preference I think, if I can figure it out; Possibly a function that takes values from an array of objects that contains the all the values required for the shop to work? **

//TIP ON LOCAL STORAGE:
//- make sure the local storage values are updated after the user buys an upgrade AND when the user clicks on the cookie
//- these are two seperate things that need to be done
//- send data to local storage as frequently as you can

// ==================================================================================================================================================================== //

//SECTION 1: DATA STORAGE
//- variables in global scope
let totalCookieCount = 0;
let cps = 0;

// or save the variables in an object --> my preference, I think, since it is all-encompasing & you can use array index to pick the bits you need
// let stats = {
// cookieCount: 0,
// cps: 0,
// };

//- if there is data already in local storage, update stats with this data, so the user picks it up where they left off
//- trigger this with a save button OR make it automatic (autosave)

// ==================================================================================================================================================================== //

//SECTION 2: SHOP UPGRADES
//- you need to fetch the upgrades from the API
//- you need to create multiple DOM elements to contain the upgrades (do this with a loop)

//TODO: Create DOM elements for the shop upgrades
//- creae the element
//- assign the value to its property (textContent)
//- append it to the DOM (appendChild)

//- after you complete this task, you should see the upgrades in your shop container!

//TODO: Create function(s) to handle the purchase action
//- the user needs a BUTTON to buy the item
//- when the user clicks the button, two things need to happen:
//(1) subtract the cost of the upgrade from totalCookieCount
//(2) add increase value to cps
//- you could also save new values in local storage

// ==================================================================================================================================================================== //

//SECTION 3: THE INTERVAL

setInterval(function () {
  totalCookieCount += cps; //totalCookieCount = totalCookieCount + cps
  //update the DOM to reflect the changes in the values
  //save the values in local storage
}, 1000);
