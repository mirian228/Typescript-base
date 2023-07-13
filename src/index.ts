class User {
    private readonly id: number
    private email: string
    private name: string
    private city: string

    constructor(id:number, email: string, name: string, city: string) {
        this.id = id,
        this.email = email,
        this.name = name,
        this.city = city
    }

   
    drive(): string {
        return "driving..."
    }

    get getId(): number {
        return this.id;
    }

    get getEmail(): string {
        return this.email;
    }

    set setEmail(email: string) {
        this.email = email;
    } 

}


const Mirian = new User(1, "m@mail.com", "mirian", "batumi")


export {}