// prompt the user for froyo flavors
const flavorInput = prompt(`Enter a list of froyo flavors separated by comma:`)

// split the input into an array of flavor
const flavorArray = flavorInput.split(',');

//Initialize an object to track the count of each flavor
const flavorCount ={};

// Iterate through the array of flavors and update the object
for (let i = 0; i< flavorArray.length; i++){
  const flavor = flavorArray[i];
  if (flavorCount[flavor]) {
    flavorCount[flavor] ++;
  }
    else {
      flavorCount[flavor] = 1;
    }
  }

  console.log(flavorCount);