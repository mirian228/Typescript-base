"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "mirian",
    email: "m@gmail.com",
    isActive: true
};
function createUser({ name: string, isPaid: boolean }) {
}
createUser({ name: "Mirian", isPaid: false });
function createCourse() {
    return { name: "angular", price: 20 };
}
function createUser1(user) {
}
createUser1({ name: "Mirian", email: "m@mail.com", isActive: true });
let myUser2 = {
    _id: "1234",
    name: "m",
    email: "m@gmail.com",
    isActive: false
};
myUser2.email = "h@gmail.com";
