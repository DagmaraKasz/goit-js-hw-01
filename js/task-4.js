'use strict';

// Kod w trybie ścisłym
function getShippingCost(country) {
    let price = 170;
    switch (country) {
        case 'Australia':
        // let price = 170;
            break;
        case 'China':
        // let price = 100;
            break;
        case 'Chile':
        // let price = 250;
            break;
        case 'Jamaica':
            // let price = 120;
            break;
            return `Shipping to ${country} will cost ${price} credits`;
        default:
            return "Sorry, there is no delivery to your country";
    }


}

// Sprawdzenie skryptu:
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"