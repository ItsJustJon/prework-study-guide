// Change the values and operators below to test your algorithm meets all conditions
const x = 50;
const expression1 = (x < 25);
const expression2 = (x > 50);

// Write Your JavaScript Code Here

if (expression1 && expression2) {
    console.log(`True ✅ True ✅`);
  } else if (expression1) {
    console.log(`True ✅ False ❌`)
} else if (expression2) {
    console.log(`False ❌ True ✅`)
} else if (!(expression1 && expression2)) {
    console.log(`False ❌ False ❌`)
}

let eval10 = ""
if (expression1) {
    eval10 = eval10 + "1"
} else {
    eval10 = eval10 + "0"
}
if (expression2) {
    eval10 = eval10 + "1"
} else {
    eval10 = eval10 + "0"
}
// console.log(eval10)

switch (eval10) {
    case 11:
        console.log(`True ✅ True ✅`);
    case 10:
        console.log(`True ✅ False ❌`);
    case 01:
        console.log(`False ❌ True ✅`);
    default:
        console.log(`False ❌ False ❌`)
}





