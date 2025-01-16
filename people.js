const names = require('./names.js');
const hobbies = require('./hobbies.js');

//FUNCTION
function person() {
    const fullNames = names("Alessandra", "Sinigaglia")
    const allHobbies = hobbies("cooking", "sport", "videogames")
    return {fullNames, allHobbies}
}
person()
const infoPerson = person()
console.log(infoPerson)