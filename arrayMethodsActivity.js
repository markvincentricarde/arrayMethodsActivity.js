// 
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2); //combines arr1 and arr2
console.log(combinedArr); // logs the contents of arr1 anr arr2

let fruits = ["Banana", "Orange", "Apple", "Mango"]; //fruit array
fruits.push("Kiwi"); //push string "kiwi" to the fruits array
console.log(fruits); //logs updated fruits array

let array1 = [1, 2, 3]; 
array1.unshift(4, 5); //adds numbers 4 and 5 to the beginning of the array
console.log(array1); // logs updated array1

fruits.pop(); //removes last element in the fruits array
console.log(fruits); // logs updated fruits array

let array2 = [1, 2, 3];
array2.shift(); //removes first element of array2
console.log(array2); //logs updated array2

fruits.sort(); //sorts fruits array alphabetically
console.log(fruits); // logs fruit array wit it's values in alphabetical manner


let slicedFruits = fruits.slice(1, 3); //new variable to store index 1 to 3 in the fruits array 
console.log(slicedFruits); // logs ["Banana", "Mango"]


let months = ["January", "February", "March", "April", "May"];
months.splice(2, 1, "March updated", "April updated"); // Removes 1 element from index 2 and adds 2 new elements
console.log(months); // logs ["January", "February", "March updated", "April updated", "May"]
