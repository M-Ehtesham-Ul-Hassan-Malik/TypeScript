let places: string[] = ["Makka", "Madina", "London","Berminghom", "Istambol","New York City"];

console.log("Orignal Order")
console.log(places)

console.log("\nAlphabatical Order:\n")
console.log(places.sort())

console.log("\nOrignal Order\n")
console.log(places)

console.log("\nReverse Alphabatical Order:\n")
console.log(places.sort().reverse())

console.log("\nOrignal Order:\n")
console.log(places)

places = places.reverse()
console.log("\nThe order of list has been changed now\n")
console.log(places)

places = places.reverse()
console.log("\nThe order of list has been changed back to orignal order now\n")
console.log(places)

places = places.sort()
console.log("\nThe order of list has been changed now\n")
console.log(places)

places = places.sort().reverse()
console.log("\nThe order of list has been changed now\n")
console.log(places)
