console.log("HAWAIYU!");

// ==================================================================================================================================================================== //

//TODO: BASIC GAME LOGIC
//- When the user cliks on the cookie, the total count of cookies goes up by 1
//- When the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

//WHAT ELEMENTS DO WE NEED?
//- We will need functions to contain the game logic
//- We will get the shop upgrade data from the API provided as part of the assignment: https://cookie-upgrade-api.vercel.app/api/upgrades
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
// let totalCookieCount = 0;
// let cps = 0;

// or save the variables in an object
// ** --> my preference, I think, since it is all-encompasing & you can use array index to pick the bits you need at a given time**
let userStats = {
  cookieCount: 0,
  cpsCount: 0,
};

console.log(userStats);

const stringifiedStats = JSON.stringify(userStats);
localStorage.setItem("user stats", stringifiedStats);

//- if there is data already in local storage, update stats with this data, so the user picks it up where they left off
//- trigger this with a save button OR make it automatic (autosave)

// ==================================================================================================================================================================== //

//SECTION 2: SHOP UPGRADES
//- you need to fetch the upgrades from the API
//- you need to create multiple DOM elements to contain the upgrades (do this with a loop)

async function getData(url) {
  // fetch() will get data from a specific API url
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

getData("https://cookie-upgrade-api.vercel.app/api/upgrades");

//TODO: Create DOM elements for the shop upgrades
//- create the element

//- assign the value to its property (textContent)
//- append it to the DOM (appendChild)

//- after you complete this task, you should see the upgrades in your shop container!

// ** Create the function to create each upgrade in the shop **
// I am selecting the shop container and storing it in a variable
function createUpgrades() {
  const shopContainer = document.getElementById("shop-container");

  //for each item (upgrade) in the shop, I need the function to create a div + repeat a number of actions (loop):
  const shopItem = document.createElement("div");

  // I need it to create p-elements for each of its properties
  for (let i = 0; i < data.length; i++) {
    const upgradeName = document.createElement("p");
    const upgradeCost = document.createElement("p");
    const upgradeIncrease = document.createElement("p");
    // I need it to update the textContent using the API data

    upgradeName.textContext = data[i].name;
    upgradeCost.textContext = data[i].cost;
    upgradeIncrease.textContext = data[i].increase;
    // I need it to assign a class name

    upgradeName.className = "upgrade-name";
    upgradeCost.className = "upgrade-cost";
    upgradeIncrease.className = "upgrade-increase";
    shopItem.className = "shop-item";
    // I need it to append the name, cost and increase to the div in question

    shopItem.appendChild(upgradeName);
    shopItem.appendChild(upgradeCost);
    shopItem.appendChild(upgradeIncrease);
    // I need to append each shop item container to the shop container for easier styling

    shopContainer.appendChild(shopItem);
  }
}
//then I call the function
createUpgrades();

//TODO: Create function(s) to handle the purchase action
//- the user needs a BUTTON to buy the item
//- when the user clicks the button, two things need to happen:
//(1) subtract the cost of the upgrade from totalCookieCount
//(2) add increase value to cps
//- you could also save new values in local storage

// ==================================================================================================================================================================== //

//SECTION 3: THE INTERVAL

// setInterval(function () {
//   totalCookieCount += cps; //totalCookieCount = totalCookieCount + cps
//   update the DOM to reflect the changes in the values
//   save the values in local storage
// }, 1000)
