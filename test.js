// Asks the user for two numbers
// If both numbers are the same, display the text "BINGO"
// If the first number is greater than the second, display the text "OSCAR"
// If the first number is lesser than the second, display the text "MUMBLE"
// (LO4: Able to write a program that involves manipulation of variables, usage of programming techniques including function calls, branching and loops)


const prompt = require("prompt-sync")();

function App() {
    let running = true;
    while (running) {
        showMenu();
    }
    
    getUserInput();
}

function showMenu() {
    console.log("Press 'q' to exit.")
}

function getUserInput() {
    let x = parseInt(prompt("Give me the first number: "));
    let y = parseInt(prompt("Give me the second number: "));

    if (x == y) {
        console.log("BINGO")
    } else if (x > y) {
        console.log("OSCAR");
    } else {
        console.log("MUMBLE");
};
};


App()

