function one (name, location) {
	console.log(name, location);
}

function two () {
	console.log('Args', arguments);
	one.apply(undefined, ['jen', 'john']);
}

two('Andrew', 'New York');

const add = (a, b) => a + b;
const square = (a) =>  a * a;

const callAndLog = (func) => {
	return function () {
		const result = func.apply(undefined, arguments);
		console.log('Result is ' + result);
		return result;
	}
}

console.log(add(99, 1));

const addAndLog = callAndLog(add);
console.log(addAndLog(44, -3));

const squareAndLog = callAndLog(square);
squareAndLog(3);

