// 1. Create an empty array `emptyArray`
// 2. Create an array `hobbies`, add 6 hobbies to it
// 3. Create an array `numbers`, add your favorite 5 numbers
// 5. Print out the second number from the array `numbers`
// 6. Print out the last hobby from the array `hobbies`
// 7. Add a fake hobby to the end of the array `hobbies` 
// 8. Print the last hobby 
// 9. Print the length of array `hobbies`
// 10. Remove the last 2 hobbies from array `hobbies`
// 11. Print length of `hobbies`
// 12. Empty the array `hobbies`
// 13. Print every element in hobbies in a single line

let emptyArray = []
let hobbies = ["Gaming", "Brunch", "Kitties", "TTRPGs", "Anime", "More Brunch"]
let numbers = [5, 7, 8, 17, 69]
console.log(numbers[1])
console.log(hobbies[5])
hobbies.push("Mountain Climbing")
console.log(hobbies[hobbies.length-1])
console.log(hobbies)
hobbies.pop()
hobbies.pop()
console.log(hobbies)
hobbies = []
console.log(hobbies)