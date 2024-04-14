function design_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

// Call the function with different arguments
design_shirt(); // Output: Making a large t-shirt with the message "I love TypeScript" printed on it.
design_shirt("medium"); // Output: Making a medium t-shirt with the message "I love TypeScript" printed on it.
design_shirt("small", "Dive into Coding"); // Output: Making a small t-shirt with the message "Dive into Coding" printed on it.
