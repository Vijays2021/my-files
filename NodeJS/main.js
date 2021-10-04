const appfunction = require('./actors.js');

console.log("Good afternoon");

appfunction.addActors('Vijay');

console.log(appfunction.displayNames());
console.log(appfunction.popActors());
console.log(appfunction.shiftActors());
console.log(appfunction.concatActors());
console.log(appfunction.sliceActors());

