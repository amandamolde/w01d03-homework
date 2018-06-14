// Easy Going

// 1. Write a for loop that will log the numbers 1 through 20.

// for (i = 1; i < 21; i++) {
// 	console.log(i);
// }


// Get Even

// 1. Write a for loop that will log only the even numbers in 0 through 200.

// for (i = 0; i < 201; i += 2) {
// 	console.log(i);
// }


// Excited Kitten

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// for (i = 0; i < 20; i++) {
// 	console.log("Love me, pet me! HSSSSSS!");
// }

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// for (i = 0; i < 20; i++) {
// 	if (i % 2 === 0) {
// 		let randomNumber = Math.random();
// 		if (randomNumber < 0.33) {
// 			console.log(i + "...human...why you taking pictures of me?...");
// 		} else if (randomNumber > 0.67) {
// 			console.log(i + "...the catnip made me do it...");
// 		} else {
// 			console.log(i + "...why does the red dot always get away...");
// 		}
// 	} else {
// 		console.log(i + "Love me, pet me! HSSSSSS!");
// 	}
// }



// Fizz Buzz

// 1. Write a javascript application that logs all numbers from 1 - 100.

// for (i = 1; i < 101; i++) {
// 	console.log(i);
// }

// 2. If a number is divisible by 3 log "Fizz" instead of the number.

// for (i = 1; i < 101; i++) {
// 	if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else {
// 		console.log(i);
// 	}
// }

// 3. If a number is divisible by 5 log "Buzz" instead of the number.

// for (i = 1; i < 101; i++) {
// 	if (i % 5 == 0) {
// 		console.log("Buzz");
// 	} else {
// 		console.log(i);
// 	}
// }

// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (i = 1; i < 101; i++) {
// 	if ((i % 3 == 0) && (i % 5 == 0)) {
// 		console.log("FizzBuzz");
// 	} else {
// 		console.log(i);
// 	}
// }

// All together because I wasn't sure if they were supposed to be seperate or together:

// for (i = 1; i < 101; i++) {
// 	if ((i % 3 == 0) && (i % 5 == 0)) {
// 		console.log("FizzBuzz");
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	} else if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else {
// 		console.log(i);
// 	}
// }


// // Getting to Know You

// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

// // 1. Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".

// thom[0] = "Gameboy";

// // 2.Karolin just had her birthday; change Karolin's array to reflect her being a year older.

// karolin[1] = 17;

// // 3. Change Matt H's hometown from Philadelphia to "Gotham City".

// matt[2] = "Gotham City";

// // 4. Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".

// kristyn[2] = "Brooklyn";


// // Yell at the Ninja Turtles

// // 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// // 2. Use a for loop to call toUpperCase() on each of them and print out the result.

// for (i=0; i < ninjaTurtles.length; i++) {
// 	console.log(ninjaTurtles[i].toUpperCase());
// }


// // Return of the Closets

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // Alien Attire

// // 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

// let kristynsShoe = kristynsCloset.shift();

// thomsCloset[2].push(kristynsShoe);

// // Dress Us Up

// //	1, Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

// // For outfit1, Kristyn will be wearing a GA hoodie and green pants.

// let outfit1 = kristynsCloset[2] + " and " + kristynsCloset[3];
// console.log(`For Outfit 1, Kristyn will be wearing a ${outfit1}`);

// // For Outfit 2, Thom will be wearing his light-blue button-up, grey jeans, and a wool scarf

// let outfit2 = thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", " + thomsCloset[2][1];
// console.log(`For Outfit 2, Thom is wearing: ${outfit2}`);
 
// // It's cold outside, so for Outfit 3, Kristyn has decided to put on her yellow knit hatt with Thom's wool mittens and wool scarf

// let outfit3 = kristynsCloset[4] + ", " + thomsCloset[2][0] + ", " + thomsCloset[2][1];
// console.log(`Brr, it's cold outside! Kristyn is wearing: ${outfit3}`);


// // Dirty Laundry

// // 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

// for(i = 0; i < kristynsCloset.length; i++) {
// 	console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
// }
 
// // 2. Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

// for (i = 0; i < thomsCloset.length; i++) {
// 	console.log(thomsCloset[i]);
// }

// // I'm not sure what the "bracket notation" part of this question is asking - is that just when we use thomsCloset[i]???


// // Multiples of 3 and 5

// let sum = 0;

// for (i = 0; i < 1000; i++) {
// 	if ((i % 3 === 0) || (i % 5 === 0)) {
// 		sum += i;
// 	}
// }

// console.log(sum); 