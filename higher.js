


//hazard elert. tells location and how many times. 
//input: 
//concept: closure. 
function hazardWarningCreator(typeOfWarning){
let warningCounter =0;

return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`)
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today`);
    return warningCounter;
}
}

const rocksWarning = hazardWarningCreator('rocks on the road');
const WindWarning = hazardWarningCreator('high wind');
const HeatWarning = hazardWarningCreator('high heat');

HeatWarning('New Jersey');
HeatWarning('Texas');
function repeat (fn,n){
    for (let i = 0; i < n; i++){
        fn();
    }
}
function hello(){
    console.log("Hello world!");
}
function goodbye(){
    console.log("Goodbye world!");
}

repeat(hello, 5);
repeat(goodbye, 5)

function filter(arr,fn) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i]) === true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
    // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
