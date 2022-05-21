
//to destructure is to upack objects and arrays into small elements or variables

let teacher1 = {
    name: "kiamba",
    subject: "chemistry",
    carModel: "larmboghini",
    classRepresenting: "3w",
    age: 29,
    gameCoaching: "basketball"
}

let teacher2 = {
    name: "Kateke",
    subject: "Mathematics",
    carModel: "Benz",
    classRepresenting: "4e",
    age: 24,
    gameCoaching: "rugby"
}

const {name, subject, ...rest} = teacher;
console.log(subject)
console.log(name)
console.log(rest)
const teacher3 = {...teacher1, teacher2}
console.log(teacher3)
