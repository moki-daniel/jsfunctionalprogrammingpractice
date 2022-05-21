const todos = [
    {
        id: 1,
        task: "complete zuri assignment",
        complete: false
    },
    {
        id: 2,
        task: "Read the hustle book",
        complete: true
    },
    {
        id: 3,
        task: "take hackerank questions",
        complete: true
    },
    {
        id: 4,
        task: "study the bible",
        complete: false
    }
]
//destructure task in object two

console.log(todos[1].task)

// format into Json

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//refresh for loop
 for(let i = 0; i <= 20; i++) {
     console.log(`For loop: ${i}`)
 }


//refresh while loop
let i = 0;
while(i < 20) {
    console.log(`while loop: ${i}`)
    i++
}

//loop through the todos array
for(todo of todos){
    console.log(todo)
}

//refresh forEach
todos.forEach((todo) => {
    console.log(todo.id)
})

//refresh map
const todosTask = todos.map((todo) => {
return todo.task
})
console.log(todosTask)

//refresh filter, get complete status = true
const taskComplete = todos.filter((todo) => {
    return todo.complete === true;
    }).map((todo) => {
        return todo.task
    })
    console.log(taskComplete)
    