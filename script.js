// 1. Declare a new variable “myGrade” and assign a number value from 0-100 to it.

let myGrade = 68;

/* 2. Write an if/else-if/else statement that displays the letter grade using console.log(...) (A for 90+, B for 80-89, C for 70-79, D for 60-69, F for 59 and below)
    Modify the value inside of “myGrade” to test your code.
    What should go in your else statement?*/

if(myGrade >= 90) {
    console.log("You got an A!");
}
else if(myGrade >= 80 && myGrade <= 90) {
    console.log("You got a B.");
}
else if(myGrade >= 70 && myGrade <= 80) {
    console.log("You got a C.");
}
else if(myGrade >= 60 && myGrade <= 70) {
    console.log("You got a D.");
}
else if(myGrade <= 50) {
    console.log("You got a F.");
}
else{
    console.log("Error please try again.");
}

/* 3. Write a switch statement that does the same thing as the if/else-if/else statement above. 
    Which do you prefer? Why?
    Which version of the code looks cleaner/easier to understand to you? Why?*/

switch (true) {
    case (myGrade >= 90):
        console.log("You got an A!");
        break;
    case (myGrade >= 80 && myGrade <= 90):
        console.log("You got a B.");
        break;
    case (myGrade >= 70 && myGrade <= 80):
        console.log("You got a C.");
        break;
    case (myGrade >= 60 && myGrade <= 70):
        console.log("You got a D.");
        break;
    case (myGrade <= 50):
        console.log("You got a F.");
    default:
        console.log("Unknown number please try again.");
        break;
}

// 4. Write a for loop that prints all value from 1 to 100

let i = 1;
while(i <= 100) {
    console.log(i);
    i++;
}

// 5. Modify your for loop to make it output an exclamation point for all odd numbers instead of the number.


