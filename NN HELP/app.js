console.log("HAWAIYU!");

// Each section of tasks is separated with a lot of tips to help you along - do not skip  steps and read well - happy coding!

// ============================================================================================================================================================= //

//TODO: BASIC GAME LOGIC
//- When the user cliks on the cookie, the total count of cookies goes up by 1
//- When the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

//WHAT ELEMENTS DO WE NEED?
//- We will need functions to contain the game logic
//- We will get the shop upgrade data from the API provided as part of the assignment: https://cookie-upgrade-api.vercel.app/api/upgrades
//- To create the logic for the shop upgrades, we have two options:
//OPTION 1: You could have a function to handle each upgrade
//OPTION 2:You could have a reusable function that works for ALL upgrades
// ** --> Option 2 is my personal preference I think; think along the lines of a function that takes values from an array of objects that contains the all the values required for the shop to work? **

//TIP ON LOCAL STORAGE:
//- make sure the local storage values are updated after the user buys an upgrade AND when the user clicks on the cookie
//- these are two seperate things that need to be done
//- send data to local storage as frequently as you can

// ================================================================================================================================================================== //

//SECTION 1: DATA STORAGE
//- variables in global scope
// let totalCookieCount = 0;
// let cps = 0;

// or save the variables in an object
// ** --> This is what I chose since it is easier b/c it is all-encompasing & you can use array index to pick the bits you need at a given time**
let userStats = {
  cookieCount: 0,
  cpsCount: 0,
};

console.log(userStats);

//- if there is data already in local storage, update stats with this data, so the user picks it up where they left off
//console.log the user data so you can see it for yourself

// ================================================================================================================================================================== //

//SECTION 2: SHOP UPGRADES
//- you need to fetch the upgrades from the API
//- you need to create multiple DOM elements to contain the upgrades (do this with a loop)

async function getData() {
  // fetch() needed to get data from a specific API url
}

//TODO: Create DOM elements for the shop upgrades
//- create the element

//- assign the value to its property (textContent)
//- append it to the DOM (appendChild)
//- after you complete this task, you should see the upgrades in your shop container!

// ** Write the function to create each upgrade in the shop **
// I am selecting the shop container and storing it in a variable

//for each item (upgrade) in the shop, I need the function to create a div + repeat a number of actions (loop):

//break it down in steps:
// I need it to create elements for each of its properties
// I need it to update the textContent using the API datA
// I need it to assign a class name
// I need it to append the name, cost and increase to the div in question
// I need to append each shop item container to the shop container for easier styling

//BECAUSE I WANT THE ABOVE TASKS TO HAPPEN ON CLICK OF BUTTON, I NEED AN EVENT LISTENER FOR THE BUY BUTTON!
//then I call the function:

//TODO: Create function(s) to handle the purchase action
//- the user needs a BUTTON to buy the item; check that you have created the button above in loop

//- when the user clicks the button, two things need to happen:
//(1) subtract the cost of the upgrade from totalCookieCount
//(2) add increase value to cps

//THIS IS THE EVENT  - THE BUYING FUNCTION
//If user has enough cookies; we want to buy upgrade
//buying: reduces total cookies by item cost & increases CPS by item CPS
//update the DOM to reflect new values - TEXT CONTENT OF GAME STATS

//if user does not have enough cookies, the purchase should not happen
// for a smooth user experience, we should let them know using an alert

//TODO: TIP FROM BERTIE
// When button image is clicked, total cookie count increases by 1
//this requires an event listener also

// ================================================================================================================================================================== //

//SECTION 3: THE INTERVAL TO UPDATE LOCAL STORAGE

//TODO: Create interval function
//you need to select your cps display first

setInterval(function () {
  totalCookieCount += cps;
  //totalCookieCount = totalCookieCount + cps
  //update the DOM to reflect the changes in the values
  //you need to use DOM manipulation to do this

  // save the values in local storage
  // automatic (autosave every second - timer)
}, 1000);
