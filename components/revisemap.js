
//double an array

const array = [10,20,30,40,50,60]
const doubleArray = array.map((item, position) => {
    
return `double item at position ${position} is ${item * 2}`

})
console.log(doubleArray)


//map an object
const lecturersDB = [
    {
        name: "tinah",
        role: "Lecturer calculus",
        tscNo: "a002032",
        NoofYearsinService: 20,
        SubjectsTraining: "Maths, Business",
        gamesCoaching: "shikashika"
    },
    {
        name: "Lesley",
        role: "lecturer medicine",
        tscNo: "a002034",
        NoofYearsinService: 10,
        SubjectsTraining: "Maths, Biology",
        gamesCoaching: "netball"
    },
    {
        name: "Leaky",
        role: "lecturer automotive engineering",
        tscNo: "a002093",
        NoofYearsinService: 15,
        SubjectsTraining: "Automative engneriing",
        gamesCoaching: "handball"
    },
    {
        name: "jersley",
        role: "lecturer agronomy",
        tscNo: "a002034",
        NoofYearsinService: 2,
        SubjectsTraining: "horticulture, crop protection",
        gamesCoaching: "basketball"
    }
]

const revisedLecturersDB = lecturersDB.map((lecturer, position) => {

    return `${lecturer.name} at position ${position} coaches ${lecturer.gamesCoaching} and he/she has experience of ${lecturer.NoofYearsinService} in teaching and research` 
})
console.log(revisedLecturersDB)