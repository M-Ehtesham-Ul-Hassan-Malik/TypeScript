let oldguestlist: string [] = ["Ubaid Shah Shb", "Asif", "Khalil Chishti"];
for (let i = 0; i<oldguestlist.length; i++){
    console.log("Mr",oldguestlist[i],"lets have a dinner together.")
}

console.log("Sorry,",oldguestlist[1],"could not come to dinner")

//modified guest list
oldguestlist.splice(1,1,"Amjad") //deleting "Asif" from guest list by its index & replacing it with Amjad

//let new_guest = "Amjad"
//oldguest_list.push(new_guest) //adding new guest into the list
for (let i = 0; i<oldguestlist.length; i++){
    console.log("Mr",oldguestlist[i],"lets have a dinner together.")
}

console.log("\nI just got a larger table for dinner so I can invite 3 more people.\n")


//array.splice(startIndex, 0, ...elementsToInsert);

oldguestlist.push("Ahmed") //inserting guest at last
oldguestlist.splice(0,0,"Ehtesham") //inserting guest at bigginning of array
oldguestlist.splice(3,0,"Mumtaz Malik") //inserting guest at middle of array

//New invitation
for (let i = 0; i<oldguestlist.length; i++){
    console.log("Mr",oldguestlist[i],"lets have a dinner together.")
}

console.log("\n\n")

console.log("I can only invite 2 people for dinner because of unavailiblity of table!\n")

while(oldguestlist.length !=2){
    oldguestlist.pop()
}

for(let i = 0; i < oldguestlist.length; i++){
    console.log("Mr",oldguestlist[i],"please join me tonight for the dinner.")
}



export const guestlist: string[] = ["Ubaid Shah Shb", "Asif", "Khalil Chishti","Ahmed", "Ehtesham", "Mumtaz"];





