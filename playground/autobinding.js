const obj = {
	name: 'Andrew',
	printName: function() {
		console.log('this is the printName method');
	}
}

obj.printName();
setTimeout(obj.printName.bind({
	name: 'Mike'
}), 1000);
