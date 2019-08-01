var getName = prompt('What is your name? I sure hope its Brian.');
var greeting;

if (getName = Brian) {
    greeting = 'What up Cozy Pants?!';
} else if (getName = Sian) {
    greeting = 'Hi Sian, thanks for writing this JS';
} else if (getName = " ") {
    greeting = 'No name? ok, thats cool';
} else {
    greeting = 'Who even are you?'
}

alert(greeting + ' I sure hope this code works');

// this will update the HTML
document.write('<h2>' + greeting + '</h2>');
