var oldguest_list = ["Ubaid Shah Shb", "Asif", "Khalil Chishti"];
for (var i = 0; i < oldguest_list.length; i++) {
    console.log("Mr", oldguest_list[i], "lets have a dinner together.");
}
console.log("Sorry,", oldguest_list[1], "could not come to dinner");
//modified guest list
oldguest_list.splice(1, 1, "Amjad"); //deleting "Asif" from guest list by its index & replacing it with Amjad
//let new_guest = "Amjad"
//oldguest_list.push(new_guest) //adding new guest into the list
for (var i = 0; i < oldguest_list.length; i++) {
    console.log("Mr", oldguest_list[i], "lets have a dinner together.");
}
console.log("\nI just got a larger table for dinner so I can invite 3 more people.\n");
oldguest_list.push("Ahmed"); //inserting guest at last
oldguest_list.splice(0, 0, "Ehtesham"); //inserting guest at bigginning of array
oldguest_list.splice(3, 0, "Mumtaz Malik"); //inserting guest at middle of array
//New invitation
for (var i = 0; i < oldguest_list.length; i++) {
    console.log("Mr", oldguest_list[i], "lets have a dinner together.");
}
