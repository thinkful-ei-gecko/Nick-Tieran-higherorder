const turtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
const result = turtleMove.filter(posMove => posMove[0] >= 0 && posMove[1] >= 0);
const resultMap = result.map(posMove => posMove[0] + posMove[1]);
const stepsTaken = resultMap.forEach((posMove , m = 1) =>
console.log(`Movement #${m += 1}: ${posMove}`))


let myString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let newArr = myString.split(' ');

function reducer(accumulator,word){
    if(word.length === 3){
        return accumulator += ' ';
    } else  {
        return accumulator += word[word.length - 1].toUpperCase(); 
    }
};
let finalDecod = newArr.reduce(reducer,' ');

console.log(finalDecod);