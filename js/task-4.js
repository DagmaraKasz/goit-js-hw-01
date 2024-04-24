'use strict';

// Kod w trybie ścisłym
function getShippingCost(country) {
    // let country = 'Australia';
    switch (country) {
        case 'Australia':
            console.log(`Shipping to ${country} will cost <price> credits`);
            
            
        case 'China':
            console.log(`Shipping to ${country} will cost <price> credits`);
            
           
        case 'Chile':
            console.log(`Shipping to ${country} will cost <price> credits`);
            
            
        case 'Jamaica':
            console.log(`Shipping to ${country} will cost <price> credits`);
            break;
            return `Shipping to ${country} will cost <price> credits`;
        default:
            return "Sorry, there is no delivery to your country";
            console.log("Sorry, there is no delivery to your country");
    }
}

function makeMessage(name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`
}
    
    function getSubstring(string, length) {
        if (const string = "Hello world") {
        return string.slice(0, string.length);
        }
     
  }
  


// Sprawdzenie skryptu:
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"