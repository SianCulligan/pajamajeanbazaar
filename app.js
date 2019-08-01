var nameNow = prompt('What is your name? I sure hope its Brian.');
var greeting;

if (nameNow = Brian) {
    greeting = 'What up Cozy Pants?!';
} else if (nameNow = Sian) {
    greeting = 'Hi Sian, thanks for writing this JS';
} else if (nameNow = " ") {
    greeting = 'No name? ok, thats cool';
} else {
    greeting = 'Who even are you?'
}

alert(greeting + ' I sure hope this code works');

// this will update the HTML
document.write('<h2>' + greeting + '</h2>');
