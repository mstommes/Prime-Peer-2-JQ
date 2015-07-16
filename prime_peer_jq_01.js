
$(document).ready(function() {
	$("#Button").on('click', function(event){
		var person = new Person();
	$("#newPerson").prepend('<p>' + person.age + " " + person.sex + " " + person.weight + '</p>');	
	});
});
		

function Person(){
	this.age = randomNumber(1, 100);
	var random = 0;
	random = randomNumber(0, 1);
	if (random == 0){
		this.sex = "Male";
	}
	else {
		this.sex ="Female";
	}
	this.weight = randomNumber(1,100);
	
};




//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


