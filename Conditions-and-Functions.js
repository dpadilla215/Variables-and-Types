// Equals
let equals = 1 === 1;

console.log(equals)
//Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than equal to
let greaterThanEq = 5>= 5;

// Less than equal to
let lessThanEq = 4 <= 9;

//Not equals
let notEquals = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower)

function compareStorePrices (storeA, storeB){

}
if (storeAIsLower) {
    console.log("Store A has the lower price")
}else if (storeB < storeA) {
    console.log("Store B has the lower price")
} else{
    console.log("Their prices are equal")
}

compareStorePrices(10,5);
compareStorePrices(7,10);
function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber)

let x = 10;

function addNumbers (n,m,x){
    console.log(x)
    let b;
    if(1===1){
        let b = 8;
    }
    return n + m;
}
addNumbers()

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 1, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
   // console.log("i is equal to: " + i);
   console.log(ourArray[i]);
   for (let j = 0; j<10; j++){
       console.log('j is equal to: ' + j)
   }
}

let y = 0;
while (y<10) {
    console.log('ran');
    y=y + 1;
}