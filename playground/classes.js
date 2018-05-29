class Person {
	constructor (name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi, I'm, ${this.name}`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old`;
	}
	toString(){
		return JSON.stringify(this);
	}
}

class Child extends Person {
	constructor(name, age, like) {
		super(name, age);
		this.like = like;
	}
	getGreeting() {
		return `Hiiiiii! My name is ${this.name} and I like ${this.like}`;
	}
}

const Me = new Person('Andrew', 25);
console.log(Me.getDescription());

const Anonymous = new Child('Mike', 4, 'Cars');
console.log(Anonymous.getDescription());
console.log(Anonymous.getGreeting());

export default Person;
