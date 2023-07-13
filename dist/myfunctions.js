"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return;
}
let loginUser = (name, email, isPaid = true) => {
};
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
const heros = ["thor", "spiderman", "ironman"];
heros.map(hero => {
    return `hero is ${hero}`;
});
const getHello = (num) => {
    return num;
};
function consoleError(errorMessage) {
    console.log(errorMessage);
}
console.log(addTwo(5));
console.log(getUpper("hi"));
signUpUser("mirian", "m@gmail.com", true);
loginUser("h", "h@h.com");
