function make_car(model: string, manufacturer: string, ...options: [string, any][]): object {
    // Define the car object with explicit type annotations
    let car: { model: string; manufacturer: string; [key: string]: any } = { model, manufacturer };

    // Process each option and assign to the car object
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Corrected function calls with individual arrays for each option
console.log(make_car("Civic", "Honda", ["color", "red"], ["year", 2017]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
