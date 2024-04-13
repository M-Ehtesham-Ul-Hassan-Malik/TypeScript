let users: string[] = ["Amjad", "Fatima", "Admin", "Ehtesham", "Ahmed"]

users.forEach(users => {
    if(users=="Admin"){
        console.log("Hello Admin, would you like to see status report")
    }
    else{
        console.log(`Hello ${users}, thank you for logging in again`)
    }
});