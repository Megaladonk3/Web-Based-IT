//1st: Simple counter (Increase/decrease)
let counter = 0;

function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

//2nd: Simple for loop
function runForLoop() {
    let result = "";
    
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    
    document.getElementById("forLoopResult").textContent = result;
}

//3rd: Repetition with condition
function showOddNumbers() {
    let result = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {  
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result;
}

//4th: Arrays
function addMultiplesToArray() {
    let multiples = [];

    for (let i = 5; i <= counter; i += 5) {
        multiples.unshift(i); 
    }

    console.log(multiples); 
}

//5th: Object and Form Fields
function printCarObject() {
    let car = {
        type: document.getElementById("carType").value,
        mpg: document.getElementById("carMPG").value,
        color: document.getElementById("carColor").value
    };

    console.log(car);
}

//6th: Object and Form Fields pt.2
function loadCar(num) {
    let selectedCar;

    if (num === 1) selectedCar = carObject1;
    if (num === 2) selectedCar = carObject2;
    if (num === 3) selectedCar = carObject3;

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

//7th: Changing styles
function changeColor(num) {
    let paragraph = document.getElementById("styleParagraph");

    if (num === 1) paragraph.style.color = "red";
    if (num === 2) paragraph.style.color = "green";
    if (num === 3) paragraph.style.color = "blue";
}
