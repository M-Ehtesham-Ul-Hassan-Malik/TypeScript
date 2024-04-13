let currentUsers: string[] = ["userA","userB","userC"];
let newUsers: string[]= ["userD", "USERB", "userA", "userE"];

newUsers.forEach(new_user => {
    // Check if the new username exists in the current_users list (case-insensitive)
    let is_existing = currentUsers.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());
    
    // If the username exists, print a message that it's not available
    if (is_existing) {
        console.log(`The username '${new_user}' is not available. Please choose a different username.`);
    } else {
        // If the username doesn't exist, print a message that it's available
        console.log(`The username '${new_user}' is available.`);
    }
});