"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, email, name, city) {
        this.id = id,
            this.email = email,
            this.name = name,
            this.city = city;
    }
    drive() {
        return "driving...";
    }
    get getId() {
        return this.id;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
}
const Mirian = new User(1, "m@mail.com", "mirian", "batumi");
