let firstmessage: string = "Hello Typescript fam!"

console.log(firstmessage)

let hero;

function getHero() {
    return "Anate"
}

hero = getHero()


function addTwo(num: number) {
    return num + 2
}

addTwo(5)

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("anate");

const signUpUser = (
    userName: string,
    email: string,
    isPaid: boolean
) => { 
    if(userName !== "ameer" || !email) {
        console.log("Details not provided")
    }
}

function loginUser(userName: string, email: string, isPaid: boolean = false) { }

signUpUser("ameer98", "ameer@yahoomail.org", true)
loginUser("ameer", "ameer@yahoomail.org")