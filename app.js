
// Set name
let myName = "Jake Evesque";

//Define constants
const STATE_COUNT = 50;

// Add two numbers
let sumOf5And4 = 5 + 4;

// Disrespect names which start with 'L'
if (myName.substring(0,1).toLowerCase === "l") {
    alert("Back of the line!");
} else {
    alert("Next!");
}

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name, age) {
    if (age < 21){
        alert("Sorry " + name + ", you are not old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby",27);
checkAge("James", 18);
checkAge("John", 17);

let favVeggies = ["Corn", "Potatoes", "Carrots"];

for(let veggie of favVeggies){
    console.log(veggie);
}

let friends = [{
    name: "Britain",
    age: 35},{
        name: "Ryan",
        age: 33
    },
    {
        name: "Ashley",
        age: 20
    }, {
        name: "Kody",
        age: 21
    },{
        name: "Annie",
        age: 7
    }
];

for(let friend of friends){
    checkAge(friend.name, friend.age);
}

function getLength(text) {
    return text.length;
}

let strLength = getLength('Hello World!');

if (strLength % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!')
}
