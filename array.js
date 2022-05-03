

/*---------------------------- declaring an array -----------------------------*/

var thingsName = ["Books","Pen","Notes","Cap","Mobile","Shoes","Glass","Mug"];
// console.log(thingsName);

var randomDigits = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
// console.log(randomDigits);


/* ---------------------adding new element in last of array------------------- */

var fruits = ['Apple','Orange','Banana','Lichi','Strawberry'];
// console.log(fruits);

// push to add element 
fruits.push('Jackfruit');
// console.log(fruits);

// pushing multiple element in the array
fruits.push('Pineapple','Water Melon');
// console.log(fruits);

fruits.push('Malta','Raspberry','lemon');
// console.log(fruits);


/*------------------ adding new element in first of an array -----------------*/

var foodList = ['chicken carry','chicken fry','chicken ball'];
// console.log(foodList);

// unshift an element on array start
foodList.unshift('Fried Rice');
// console.log(foodList);

// unshift multiple element in the array
foodList.unshift('Beef','Beef tikka');
// console.log(foodList);

foodList.unshift('Fish Carry','Fried fish','Beef Noodles');
// console.log(foodList);


/*------------------ remove element from array start --------------------  */
// i'm calling here the first array in this code. which name is thingsName
// and i will operation on that array

// console.log(thingsName);

thingsName.shift();
// console.log(thingsName);


/* ----------------- remove element from array last --------------------- */
// here i call again first array and operation it.

// console.log(thingsName);

thingsName.pop();
// console.log(thingsName);


/*------------------------ array length check ---------------------------*/
