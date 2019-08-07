class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age

    }

    getGreeting(){
        return `Hi Iam ${this.name}`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Students extends Person{
    constructor(name, age, major = 'Computer Science'){
        super(name, age)
        this.major = major
    }
}

const me = new Person('Maros Silva',40);
const student = new Students ('Marcos', 40, 'Software Dev')

console.log(student)