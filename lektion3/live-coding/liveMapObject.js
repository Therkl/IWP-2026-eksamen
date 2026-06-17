/*
Using map to extract members of an array of objects.
*/

let carObjects = [
    {id: 1, brand: "Tesla", cost: 10000},
    {id: 2, brand: "BYD", cost: 8000},
    {id: 3, brand: "Mercedes", cost: 12000}
];

let carNames = carObjects.map( car => car.brand );

console.log(carNames);