let score: number | string = 33
score = "55"

type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let mirian: User | Admin = {
    name: "mirian",
    id: 555
}

mirian = {
    username: "mm",
    id: 555
} 


function getDbId(id: number | string) {
    console.log(`Db id is: ${id}`);
}

getDbId(3)
getDbId("3")


// array

const data5: string[] | number[] = [1, 2, 3]