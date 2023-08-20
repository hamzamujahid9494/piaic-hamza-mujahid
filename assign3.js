"use strict";
function convertdaytoweek(days) {
    const weeks = Math.floor(days / 7);
    const remainingDys = days % 7;
    return ` ${days} days=${weeks} weeks and ${remainingDys} days`;
}
const numberofdays = 17;
const result = convertdaytoweek(numberofdays);
console.log(result);
//function3 
function calculateDiscount(price) {
    if (price > 100) {
        return price * 0.1;
    }
    else {
        return price * 0.05;
    }
    const orginialprice = 120;
    const discountamount = calculateDiscount(orginialprice);
    const discountedprice = orginialprice - discountamount;
    console.log(` orginal price:$${orginialprice}`);
    console.log(`discountedamount:$${discountamount}`);
    console.log(`discountamount:$${discountamount}`);
    //function
    function determineAge(age) {
        if (age >= 0 && age <= 12) {
            return "child";
        }
        else if (age >= 13 && age <= 19)
            return "teenager";
    }
    {
        "adult";
    }
}
const userAge = 25;
const agecategory = determineAge(userAge);
console.log(`age: ${userAge}`);
console.log(`category:${agecategory}`);
