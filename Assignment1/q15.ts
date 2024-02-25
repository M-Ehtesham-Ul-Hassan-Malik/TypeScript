let old_guest_list: string [] = ["Ubaid Shah Shb", "Asif", "Khalil Chishti"];
for (let i = 0; i<old_guest_list.length; i++){
    console.log("Mr",old_guest_list[i],"lets have a dinner together.")
}

console.log("Sorry,",old_guest_list[1],"could not come to dinner")

//modified guest list
old_guest_list.splice(1,1,"Amjad") //deleting "Asif" from guest list by its index & replacing it with Amjad

//let new_guest = "Amjad"
//old_guest_list.push(new_guest) //adding new guest into the list
for (let i = 0; i<old_guest_list.length; i++){
    console.log("Mr",old_guest_list[i],"lets have a dinner together.")
}
