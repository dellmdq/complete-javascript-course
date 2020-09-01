/******************************************
* Variables and datatypes
*/

/*
var firstName = 'Erik';
console.log('firstName');

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//variable naming rules
var _3years = 3;
var johnMark = 'John and mark';
var if = 23; 

*/

/***************************
* Variable mutation and type coertion
*/


/*



var firstName = 'Erik';

var age = 28;

//TYPE COERTION
//Javascript transforms from one type to another as needed 
console.log(firstName + ' ' + age);//age is converted to a string (type coertion process)

var job, isMarried; //declaring various variables in one line
job = 'teacher';//the you can define them
isMarried = false;

console.log(firstName + ' '+ age + ' year old ' + job 
+ '. Is he married? ' + isMarried );


//Variable mutation
age  = 'twenty eight'; //JS changes type automatically
job = 'driver';

alert(firstName + ' '+ age + ' year old ' + job 
+ '. Is he married? ' + isMarried );

//alert('Flor es muy bonita.');

//prompt('Matar al knitchiten?')

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


*/

/***************************
 * CODING CHALLENGE
 */

 /*
var markMass = prompt('Mark. Please enter your body mass');
alert(markMass);
var johnMass = prompt('John. Please enter your body mass');
alert(johnMass);

var markHeight = prompt('Mark. Please enter your height');
alert(markHeight);
var johnHeight = prompt('John. Please enter your height');
alert(johnHeight);

var markBMI = markMass / (markHeight*markHeight);
var johnBMI = johnMass / (johnHeight*johnHeight);

var isMarkHigher = markHeight > johnHeight;
alert(isMarkHigher);
var isMarkBMIHigher = markBMI > johnBMI;
console.log(markBMI, johnBMI);


console.log('Is mark\'s BMI higher than john\'s????' + ' ' + isMarkBMIHigher);

var a = markHeight*markHeight;
var b = markHeight**2;
console.log(a,b);
*/

/*
var johnTeamPointAverage = (89 + 103 + 111) / 3;
console.log(johnTeamPointAverage);
var mikeTeamPointAverage = (120 + 78 + 105) / 3;
console.log(mikeTeamPointAverage);
*/
/*
if(johnTeamPointAverage > mikeTeamPointAverage){
    console.log('John team is the winner with ' + johnTeamPointAverage + ' points.' );
}else if(johnTeamPointAverage < mikeTeamPointAverage){
    console.log('Mike team is the winner with ' + mikeTeamPointAverage + ' points.' );
}
else{
    console.log('The result is a draw. ' + mikeTeamPointAverage + ' - ' + johnTeamPointAverage );
}
*/

/*
var maryTeamPointAverage = (97 + 134 + 105) / 3;
console.log(maryTeamPointAverage);
*/
/* is better to code with a else if structure
var winner = maryTeamPointAverage > johnTeamPointAverage && maryTeamPointAverage > mikeTeamPointAverage ? 'Mary' : null;
if(winner) console.log('The winner is Mary.');
winner = johnTeamPointAverage > maryTeamPointAverage && johnTeamPointAverage > mikeTeamPointAverage ? 'John' : null;
if(winner) console.log('The winner is John');
winner = mikeTeamPointAverage > maryTeamPointAverage && mikeTeamPointAverage > johnTeamPointAverage ? 'Mike' : null;
if(winner) console.log('The winner is Mike');
if(!winner) console.log('There\'s no winner');
draw*/


/*
var bills = [124, 48, 268];

function tipCalculator(bill){
    if(bill <= 50)
        return bill * 20 / 100;
    else if(50 < bill <=250)
        return bill * 15 / 100; 
    else if(bill > 250)
        return bill * 10 /100
    }
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];

console.log('Tips : ' + tips);

var paidAmounts = [ tips[0] + bills[0], 
                    tips[1] + bills[1], 
                    tips[2] + bills[2] ];
                    
console.log('PaidAmounts : ' + paidAmounts);

/*
/************************
 * objects and properties
 */
/*
//creating objects (literal)
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job : 'teacher',
    isMarried: false
};
//Variables access;
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

//Variable change
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//another way to create objects. 
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


/************************** *
* OBJECTS AND METHODS
***********/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job : 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        return 2020 - this.birthYear;
    }
};


console.log(john.calcAge());
*/

/**************************
 * coding challenge 4
 **************************/

 var mark = {
     firstName: 'Mark',
     mass: 90,
     height: 1.88,
     //BMI: null,
     calcBMI: function(){
        this.BMI = this.mass / (this.height*this.height);
        return this.BMI;
     }       
 };

 var john = {
    firstName: 'John',
    mass: 65,
    height: 1.74,
    //BMI: null,
    calcBMI: function(){
       this.BMI = this.mass / this.height**2;
       return this.BMI;
    }       
};

function whoWins(person1, person2){ 
   //console.log(person1 , person2);
    if(person1.BMI > person2.BMI){
        console.log(person1.firstName + ' is the winner with ' + person1.BMI + ' body index.');
    }
    else if(person2.BMI > person1.BMI){
            console.log(person2.firstName + ' is the winner with ' + person2.BMI + ' body index.');
    }
    else{
        console.log('There is a draw.');
    }
}

john.calcBMI();
mark.calcBMI();
console.log(mark);
console.log(john);
whoWins(john,mark);