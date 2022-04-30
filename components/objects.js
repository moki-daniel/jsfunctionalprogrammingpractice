

const user = {
    name: 'moki',
    email: 'devmoki@gmail.com', 
    login() {
        console.log('user logged in')
    },
    logout() {
        console.log('user logged out')
            },
    // blogs: ['I am a winner', 'coding like a hero', 'code and mental health'],
    blogs: [
        {title: "I am a winner", likes: 100, comments: 20},
        {title: "Javascript For Beginners", likes: 150, comments: 120}
    ],

    logBlogs() {
        console.log('The user has writted the following blogs:')
        this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes, blog.comments)
    })
}
};
user.logBlogs();


//implement getters

const car = {
    model: "audi",
    color: "blue",
    fuel_type: "Diesel",
    get fuel() {
        return this.fuel_type
    }
}
console.log(car.fuel_type)


//implement setters

const carNumberTwo = {
    model: "volks Walgen",
    color: "blue",
    fuel_type: "",
    set fuel_type(fuel) {
        this.fuel_type = fuel
    }
}
carNumberTwo.fuel = "petrol"
console.log(carNumberTwo.fuel)
