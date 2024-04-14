let array: number []= [1,2,3,4,5,6,7,8,9,10];
array.forEach(number => {
    let suffex: string = "th";
    if(number === 1){
        suffex = "st"
    }
    else if(number === 2){
        suffex = "nd"
    }
    else if(number === 3){
        suffex = "rd"
    }

    console.log(`${number}${suffex}`);


});