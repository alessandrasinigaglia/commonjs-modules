const names = require('./names');
const hobbies = require('./hobbies');

//FUNCTION
function person() {
    const fullNames = names("Alessandra", "Sinigaglia")
    const allHobbies = hobbies("cooking", "sport", "videogames")
    return {fullNames, allHobbies}
}
person()

const person = require("./people");
const infoPerson = person()
console.log(person)