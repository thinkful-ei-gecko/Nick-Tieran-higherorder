


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