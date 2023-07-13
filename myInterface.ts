interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string

    startTrail(): string

}


const mirian: User = {
    dbId: 1,
    email: "Mir",
    userId: 1,
    startTrail: () => {
        return "hi"
    }
}


export {}