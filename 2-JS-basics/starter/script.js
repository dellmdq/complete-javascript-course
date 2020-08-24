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

alert('Flor es muy bonita.');

prompt('Matar al knitchiten?')
