'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)');

// const interface = 'Audio';//strict reserva palabras para futuras release de js
// const private = 123; //private también esta reservada

function logger() {
    console.log('My name is Erik! Hello js world!');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
//direct use of return in log
console.log(fruitProcessor(5,2));

const appleOrangeJuice = fruitProcessor(5,3);
console.log(appleOrangeJuice);

const number = Number('2');
console.log('string to number '+ number);

//lesson 34
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
*/

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgKoalas, avgDolphins) {
    if(avgDolphins >= avgKoalas*2) {
        console.log(`Dolpinhs wins with ${avgDolphins} points average`);
    } else if (avgDolphins*2 <= avgKoalas) {
        console.log(`Koalas wins with ${avgKoalas} points average`);
    }
}

const averageDolphins1 = calcAverage(44, 23, 71);
const averageKoalas1 = calcAverage(65, 54, 49);

checkWinner(averageKoalas1, averageDolphins1)

//TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const averageDolphins2 = calcAverage(85, 54, 41);
const averageKoalas2 = calcAverage(23, 34, 27);

checkWinner(averageKoalas2, averageDolphins2);

//Objects

// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ` + jonas.friends.length + ' friends and his best friend is called ' + jonas.friends[0]);
*/

/*CHALLENGE #2

Steven wants you to improve his tip calculator, using the same rules as before —
tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
    Write a function calcTip that takes any bill value as an input and returns the corresponding tip,
     calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to).
     Use the function type you like the most. Test the function using a bill value of 100.
    And now let's use arrays! So, create an array called bills containing the test data below.
    Create an array called tips containing the tip value for each bill, calculated from the function you created before.
    BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

 */

//bill = 100
function calcTip(bill) {
    if (50 <= bill <= 300) {
        console.log(`Bill is ${bill}, the tip is 15%`)
        return bill * 0.15;
    } else {
        console.log(`Bill is ${bill}, the tip is 20%`)
        return bill * 0.20;
    }
}//se puede hacer con ternario para hacerlo más simple en una linea

console.log(`The tip amount is ${calcTip(100)}`);
const bills = [125, 555, 44]
//array tips
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log('array tips: ' + tips)
//array total
const total = [tips[0] + bills[0], tips[1] + bills[1], +tips[2] + 2]
console.log('array total: ' + total)

//objects methods
// Solo se pueden usar function expressions para crear metodos
// dentro de los objetos. Las funciones dentro de los objetos
//son tratados como un property en js.

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //metodo function expression
    // calcAge: function () {
    //     console.log(this);//the whole jonas object
    //     return 2037 - this.birthYear
    // }

    //crear una nueva propiedad desde un method
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        console.log(
            `${this.firstName} is a ${this.age}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : null} driver's license`);
    }
}

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 46-year old teacher, and he has a/null driver's license"
jonas.getSummary();

/*
CHALLENGE #3

Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

    For each of them, create an object with properties for their
    full name,
    mass, and
    height (Mark Miller and John Smith).
    Name these objects as mark and john, and their properties exactly as fullName, mass and height.

    Create a calcBMI method on each object to calculate the BMI (the same method on both objects).
    Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

    Log to the console who has the higher BMI, together with the full name and the respective BMI.
    Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


👋 OPTIONAL: You can watch my solution in video format in the next lecture


IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
 */
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(`mark bmi is ${mark.calcBMI()}`);

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(`john bmi is ${john.calcBMI()}`);

if(mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName} has a higher BMI ${mark.calcBMI()} than ${john.fullName} ${john.calcBMI()}`)
} else if(mark.calcBMI() < john.calcBMI()) {
    console.log(`${john.fullName} has a higher BMI ${john.calcBMI()} than ${mark.fullName} ${mark.calcBMI()}`)
}