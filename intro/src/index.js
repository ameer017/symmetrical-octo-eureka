var firstmessage = "Hello Typescript fam!";
console.log(firstmessage);
var hero;
function getHero() {
    return "Anate";
}
hero = getHero();
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("anate");
var signUpUser = function (userName, email, isPaid) {
    if (userName !== "ameer" || !email) {
        console.log("Details not provided");
    }
};
function loginUser(userName, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUpUser("ameer98", "ameer@yahoomail.org", true);
loginUser("ameer", "ameer@yahoomail.org");
