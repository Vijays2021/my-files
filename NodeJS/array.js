var actors = [];
function addActors(names){
    actors.push(names);
}

function displayNames(){
 return actors;
}

var arr = ["Vijay", "Ajith", "Vikram", "Surya"];
function popActors(){
last_element = arr.pop();
return arr;
} 


var arr1 = [true, 2, 3, 4];
function shiftActors(){
first_item = arr1.shift();
return arr1; // [2, 3, 4]
} 

var arr2 = [true, 2, 3, "4"];
function concatActors(){
new_array = arr2.concat(5, 6, 7);
return new_array;
}


function sliceActors(){
new_array = arr2.slice(0, 2);
return new_array;
}

module.exports.addActors = addActors;
module.exports.displayNames =displayNames;
module.exports.popActors = popActors;
module.exports.shiftActors = shiftActors;
module.exports.concatActors = concatActors;
module.exports.sliceActors = sliceActors;