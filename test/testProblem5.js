const yearsOfCar = require("./testProblem4");
const {olderCarsbefore2000} = require("../problem5");

const olderCar = olderCarsbefore2000(yearsOfCar);

console.log("Number of car older than 2000 is " + olderCar.length);
