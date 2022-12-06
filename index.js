console.log('Looking into the javascript...');
let person = {
    age:36,
    name:"Ant",
    weight:72
}
person.weight = 66;
console.log(person);
console.log(person.name);

let arrayData = ['year', 'month', 12, true, true, null, null, false]
console.log(arrayData);
console.log(arrayData[3]);
console.log(arrayData.length);

function greet (name, year) {
    console.log("Hello, " + name + '! You are ' + (2022-year) + " now");
}

greet ('Vasil Vasilovych', 1960);