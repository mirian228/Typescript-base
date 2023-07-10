const User = {
    name: "mirian",
    email: "m@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {

}

createUser({name: "Mirian", isPaid: false});

function createCourse():{name: string, price: number}
{
return {name: "angular", price: 20};
}



type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser1(user: User) {
    
}

createUser1({name: "Mirian", email: "m@mail.com", isActive: true})


type User2 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}
 
let myUser2: User2 = {
    _id: "1234",
    name: "m",
    email: "m@gmail.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser2.email = "h@gmail.com";



export {}