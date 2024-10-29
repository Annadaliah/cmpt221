/****************************************************************************************************************/
/* In-Class Exercises                                                                                           */
/****************************************************************************************************************/
/* 1. create an array called "fruits" and assign the values "Strawberry", "Raspberry", and "Apple" to it         */
// add code here
let fruits = [];
fruits = ["Strawberry", "Raspberry", "Apple"];
console.log(fruits)
/* 2. add two more fruits to the "fruits" array using the correct array method                                   */
// add code here
fruits.push("Banana", "Mango");
console.log(fruits)
/* 3. sort the fruits array alphabetically using the correct array method                                        */
// add code here
console.log(fruits.sort());
/* 4. create a function called printFruit that prints each item in the fruits array to the console              */
/*    and call the printFruit function                                                                          */
// add code here
function printFruit() {
    for (let index in fruits) {
        console.log(fruits[index]);
    }
}

printFruit();
/* 5. create a fruit class that has three properties: name, color, and season and one method: printFruit()      */
/*    that prints all three properties of the fruit to the console. Then, create 3 fruit objects and print      */
/*    them using the printFruit() method                                                                        */
// add code here
class Fruit {
    constructor(name, color, season) {
        this.name = fruitName;
        this.color = fruitColor;
        this.season = fruitSeason;
    }
    printFruit() {
        console.log("Fruit Name: " + this.name + " , " + "Fruit Color" + this.color + " , " + "Fruit Season: " + this.season);
    }
}

const banana = new Fruit("Banana", "Yellow","Summer");
const strawberry = new Fruit("Strawberry", "Red", "Summer");
const mango = new Fruit("Mango", "Orange", "Summer");

banana.printFruit();
strawberry.printFruit();
mango.printFruit(); 

/****************************************************************************************************************/
/* In-Class Lab                                                                                                 */
/****************************************************************************************************************/
/* 1. Write a function that asks the user if they want to say hi. If the user selects "Okay" (true), then       */
/*    display a welcome message. If the user selects "Cancel" (false), then display a different message         */
function areYouSure() {
    let text = "Do you want to say hi?";
    if (confirm(text) === true) {
        text = "Welcome to my Lab 8!";
    } else {
        text = "If only everyone was nice!"
    }
    document.getElementById("example").innerHTML = text;
}

/* 2. Write a function to change 3 styles on the webpage                                                        */
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function changeBackgroundColor() {
    document.getElementById("header").style.backgroundColor = "red";
}
function changeFontColor(element, color) {
    element.style.color =  color;
}

window.onclick = changeBackgroundColor();
document.getElementById("myButton").onclick = function() {dropDown()};
window.onclick = changeFontColor(this,'red');
