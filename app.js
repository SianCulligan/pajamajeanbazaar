var getName = prompt('What is your name? I sure hope it\'s Brian!');
var greeting;

if (getName === 'Brian' || getName === 'brian') {
    greeting = 'What up Cozy Pants?!';
} else if (getName === 'Sian') {
    greeting = 'Hi Sian thanks for writing this JS';
} else if (getName === ' ') {
    greeting = 'No name, ok, that\'s cool';
} else {
    greeting = 'Who even are you?'
}

alert(greeting + ' I sure hope this code works');

document.write('<h2>' + greeting + '</h2>');
