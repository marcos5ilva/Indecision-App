class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
        
    }

    getGreeting(){
        //return  'Hi, '+this.name +' !';
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'Computer Science'){
        super(name, age);//Calling the parent constructor function
        this.major = major;
    }

    hasMajor(){
        return !!this.major;

    }

    getDescription(){
        let description = super.getDescription();
        return  description + 'his major is ' + this.major;
    }
}

const me = new Person('Marcos Silva');

const student = new Student();

console.log(me.getDescription());
console.log(student.getDescription());
