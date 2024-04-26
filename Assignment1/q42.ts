let magican_Names: string[] = ["Ahmed", "Naveed", "Qasim"];

function make_great(magican_Names: string[]) {
    magican_Names.forEach(magican => {
        console.log(`Great ${magican}`);
    });
}

make_great(magican_Names);
