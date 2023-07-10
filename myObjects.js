"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "mirian",
    email: "m@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Mirian", isPaid: false });
function createCourse() {
    return { name: "angular", price: 20 };
}
function createUser1(user) {
}
createUser1({ name: "Mirian", email: "m@mail.com", isActive: true });
var myUser2 = {
    _id: "1234",
    name: "m",
    email: "m@gmail.com",
    isActive: false
};
myUser2.email = "h@gmail.com";
