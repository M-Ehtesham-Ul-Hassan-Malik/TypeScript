// Define the magicians array
let magicians: string[] = ["Ali", "Ahmed", "Qasim"];

// Function to modify magician names to include "the Great"
function make_Great(magicians: string[]): string[] {
    let greatMagicians: string[] = []; // Corrected to be an array of strings
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

// Function to display magician names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Create a new array of great magicians
let greatMagicians = make_Great(magicians.slice()); // Creates a new modified array

// Display original magicians
console.log("Original magicians:");
show_magicians(magicians); // Shows original names

// Display great magicians
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
