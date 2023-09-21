// Object.enter(person) create a new object which has old properties
// Object.entries(person) return an array include elements [kay, value]
// Object.assign(object store, first object stored, second object stored,..,last object stored) return a new object
// Object.keys(object) return an array contain keys of object
// Object.values(object) return an array contain values of object

var person = {
    name: "Gumball",
    age: 18,
    sex: "Boy"
}

var teacher = new Object;

var student = Object.create(person);
student.grade = 3;

var child = Object.assign(teacher, student, person);

for(var property in child) console.log(property + " " + child[property]);

console.log("-----Display Keys:------");
var arrayOfKeys = Object.keys(child);
console.log(arrayOfKeys);
for(var key of arrayOfKeys) console.log(key);

console.log("-----Display Values:-----");
var arrayOfValues = Object.values(child);
console.log(arrayOfValues);
for(var value of arrayOfValues) console.log(value);

// Array
// callback is a function to check condition to per element in array
// Array.every(callback) return a boolean value, return true if all of elements in array is true else return false if array has a element is false.
// Array.some(callback) return a boolean value, return true if array has at least one element is true else return false if array does not have any elements is true.
// Array.filter(callback) return a new array include elements has true value and elements has false value which will not add in the new array
// Array.find(callback) return a first element which has true value, but if array doesn't have any elements which has true value, so return undefined;
// Array.findIndex(callback) return a first index that the element has the true value, but if the array doesn't have any elements which has true value, so return -1;
// Array.includes(valueFind) return a value is true or false, return true if array has valueFind else return false when array doesn't have valueFind;
// Array.lastIndexOf(valueFind, positionEnd) return index of last element, if array doesn't have any elements, so return -1, positionEnd is position to end to find; if positionELement negative number, positionEnd will start from last Array;
// Array.indexOf(valueFind, positionStart) return index of element , if array doesn't have ant elements, so return -1, positionStart is position to start to find; if positionStart is negative number, positionStart will start from last Array;
// Array.join(string) return a new string by join elements of array  with string;
// Array.map(callback) return a new array, after elements go through callback;
// Array.shift() delete element which has first position of array, return the deleted element;
// Array.unshift(elements) add elements which has first position of array, return the new length of array;  
// Array.push(elements) add elements which has last position of array, return the new length of array;
// Array.pop() delete element which has last position of array, return the deleted element;
// Array.reverse() return a new array which has element reversed;


var arrayOfOddNumbers = new Array(1,3,5,7,9);
var arrayOfEvenNumbers = [2,4,6,8,10];

var isEvenNumber = arrayOfEvenNumbers.every(function (element){
    return element%2==0;
})

var isOddNumber = arrayOfOddNumbers.some(function(element){
    return element%2==0;
})


var isGreaterFifteen = arrayOfEvenNumbers.findIndex(function (element){
    return element > 15;
})

var isGreaterTwenty = arrayOfOddNumbers.find(function (element){
    return element > 20;
})

var isPrimesNumber = arrayOfOddNumbers.forEach(function(element){
    var check = false;
    for(let i=2; i<= Math.sqrt(element);i++){
        if(element %i == 0) {
            check = true;
            break;
        }
    }

    if(element == 1) check = true;
    if(check) console.log("Not is primes Number");
    else console.log(element);   
    
})

var checkFiveNumber = arrayOfOddNumbers.includes(5);

var arrayNumbers = [3,4,5,3,5,7,3,6];
var indexOfElement = arrayNumbers.indexOf(3,-3);
var indexOfLastElement = arrayNumbers.lastIndexOf(3,2);

console.log(indexOfElement, indexOfLastElement);

var joinString = arrayNumbers.join("- -");
console.log(joinString);

var arrayDoubleElements = arrayNumbers.map(function (element){
    element *= 2;
    return element;
}) 
console.log(arrayDoubleElements);

var deleteFirstElement  = arrayNumbers.shift();
var lengthOfNewArray = arrayNumbers.unshift(10);
console.log(deleteFirstElement, lengthOfNewArray);
console.log(arrayNumbers);

var deleteLastElement = arrayNumbers.pop();
lengthOfNew = arrayNumbers.push(10,11);
console.log(deleteLastElement, lengthOfNewArray);
console.log(arrayNumbers);

var reverseArray = arrayNumbers.reverse()
console.log(reverseArray);

console.log(arrayNumbers.sort(function(a, b){
    if(a<b) return -1;
    else if(a>b) return 1;
    return 0;
}))
console.log(isEvenNumber, isOddNumber, isGreaterFifteen, isGreaterTwenty, checkFiveNumber);

// Section  String

String.prototype.is_true = function(element){
    element += this;
    if(element.length > 5) return "true";
    else return "false";
}

var str = "i'm bao gumball";
console.log(str.is_true("i live in the city"));

console.log(str.substring(1,2))

//string.slice(startNumber, endNumber) return a new string from the old string;
//string.concat(firstString, secondString....lastString) return a new string which connected together;


while(str.search(" ") != -1){
    var indexOfSpace = str.search(" ");
    var firstString = str.slice(0, indexOfSpace);
    var lastString =str.slice(indexOfSpace+1, str.length);
    var firstLetter = firstString.charAt(0);
    var secondLetter = lastString.charAt(0);

    firstString = firstString.replace(firstLetter, firstLetter.toUpperCase());
    lastString = lastString.replace(secondLetter, secondLetter.toUpperCase());
    str = firstString.concat("-" + lastString);

    console.log(str);
}
for(let x of str){
    if(x == "-") str = str.replace("-", " ");
}

console.log(str);





