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
  cookieCount: 100,
  cpsCount: 0,
};

console.log(userStats);

//- if there is data already in local storage, update stats with this data, so the user picks it up where they left off
const userData = localStorage.getItem("userStats");

const parsedUserData = JSON.parse(userData);
userStats = parsedUserData;

console.log(userData);

// ==================================================================================================================================================================== //

//SECTION 2: SHOP UPGRADES
//- you need to fetch the upgrades from the API
//- you need to create multiple DOM elements to contain the upgrades (do this with a loop)

async function getData() {
  // fetch() will get data from a specific API url
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

//ARRAY OF IMAGES (ICONS) FOR SHOP UPGRADES
const images = [
  "../TECH-ED-SD023-Week-03/assets/automatic.png", //automatic clicker
  "../TECH-ED-SD023-Week-03/assets/oven.png", //enhanced oven
  "../TECH-ED-SD023-Week-03/assets/cookie-farm.png", //cookie farm
  "../TECH-ED-SD023-Week-03/assets/robot.png", //robot baker
  "../TECH-ED-SD023-Week-03/assets/factory.png", //cookie factory
  "../TECH-ED-SD023-Week-03/assets/flour.png", //magic flour
  "../TECH-ED-SD023-Week-03/assets/time-machine.png", //time machine
  "../TECH-ED-SD023-Week-03/assets/quantum.png", //quantum oven
  "../TECH-ED-SD023-Week-03/assets/alien.png", //alien technology
  "../TECH-ED-SD023-Week-03/assets/interdimensional.png", //interdimensional baker
];

//TODO: Create DOM elements for the shop upgrades
//- create the element

//- assign the value to its property (textContent)
//- append it to the DOM (appendChild)

//- after you complete this task, you should see the upgrades in your shop container!

// ** Create the function to create each upgrade in the shop **
// I am selecting the shop container and storing it in a variable
async function createUpgrades() {
  const itemData = await getData();
  const shopContainer = document.getElementById("shop-container");

  //for each item (upgrade) in the shop, I need the function to create a div + repeat a number of actions (loop):

  // I need it to create elements for each of its properties
  for (let i = 0; i < itemData.length; i++) {
    const shopItems = document.createElement("div");
    const upgradeName = document.createElement("h3");
    const upgradeCost = document.createElement("p");
    const upgradeIncrease = document.createElement("p");
    const buyButton = document.createElement("button");
    const itemImage = document.createElement("img");

    // I need it to update the textContent using the API data
    upgradeName.textContent = itemData[i].name;
    upgradeCost.textContent = `Cost: ${itemData[i].cost}`;
    upgradeIncrease.textContent = `CPS Increase: ${itemData[i].increase}`;
    buyButton.textContent = `BUY ME`;
    itemImage.src = images[i];

    // I need it to assign a class name
    upgradeName.className = "upgrade-name";
    upgradeCost.className = "upgrade-cost";
    upgradeIncrease.className = "upgrade-increase";
    shopItems.className = "shop-item";
    buyButton.className = "buy-button";
    itemImage.className = "item-image";

    // I need it to append the name, cost and increase to the div in question
    shopItems.appendChild(upgradeName);
    shopItems.appendChild(upgradeCost);
    shopItems.appendChild(upgradeIncrease);
    shopItems.appendChild(buyButton);
    shopItems.appendChild(itemImage);

    // I need to append each shop item container to the shop container for easier styling
    shopContainer.appendChild(shopItems);

    console.log(itemData[i]);

    //BECAUSE I WANT THIS TO HAPPEN ON CLICK OF BUTTON, I NEED AN EVENT LISTENER
    buyButton.addEventListener("click", function () {
      buyMe(itemData[i]);
    });
  }
}
//then I call the function:
createUpgrades();

//TODO: Create function(s) to handle the purchase action
//- the user needs a BUTTON to buy the item; create the button above in loop

//- when the user clicks the button, two things need to happen:
//(1) subtract the cost of the upgrade from totalCookieCount
//(2) add increase value to cps

//THIS IS THE EVENT  - THE BUYING FUNCTION
function buyMe(currentItemData) {
  //If user has enough cookies; we want to buy upgrade
  //buying: reduces total cookies by item cost & increases CPS by item CPS
  if (userStats.cookieCount >= currentItemData.cost) {
    userStats.cookieCount -= currentItemData.cost;
    userStats.cpsCount += currentItemData.increase;
    //update the DOM to reflect new values - TEXT CONTENT OF GAME STATS

    //if user does not have enough cookies, alert user
  } else {
    alert("Uh-oh! You're gonna needs more treats than that!");
  }
}

//TODO: EXTRA?
// When kitty image is clicked, total cookie count increases by 1?

const cookieDisplay = document.getElementById("cookie-count");
const kittyImage = document.getElementById("cat-image");

kittyImage.addEventListener("click", increment);

function increment() {
  userStats.cookieCount++;
  cookieDisplay.innerText = `Total cookie count: ${userStats.cookieCount}`; // Update the display
}

// ==================================================================================================================================================================== //

//SECTION 3: THE INTERVAL TO UPDATE LOCAL STORAGE
//- make it automatic (autosave)

//TODO: Create interval function
const cpsDisplay = document.getElementById("cps-count");

setInterval(function () {
  userStats.cookieCount += userStats.cpsCount; //totalCookieCount = totalCookieCount + cps

  //update the DOM to reflect the changes in the values
  cookieDisplay.innerText = `Total cookie count: ${userStats.cookieCount}`; // Update the display
  cpsDisplay.innerText = `Cookies per second (CPS): ${userStats.cpsCount}`; // Update the display

  //save the values in local storage
  const stringifiedStats = JSON.stringify(userStats);
  localStorage.setItem("userStats", stringifiedStats);
}, 1000);
