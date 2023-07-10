function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    return
}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {

}

function getValue(myVal: number) {
    if(myVal > 5) {
        return true;
    }
    return "200 OK";
}

const heros = ["thor", "spiderman", "ironman"];

heros.map(hero => { 
    return `hero is ${hero}`;
})

const getHello = (num: number): number => {
    return  num;
}


function consoleError(errorMessage: string): void {
    console.log(errorMessage);
}


console.log(addTwo(5));
console.log(getUpper("hi"));
signUpUser("mirian", "m@gmail.com", true);
loginUser("h", "h@h.com");
export {}