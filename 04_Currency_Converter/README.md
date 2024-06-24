Certainly! Here is the updated `README.md` file with the version specified:

```markdown
# Currency Converter

A simple command-line application to convert currency amounts using real-time exchange rates. Built with TypeScript, Inquirer, Chalk, and Node Fetch.

## Features

- Fetches real-time exchange rates
- Allows user to select currencies and amount for conversion
- Displays converted amount

## Version History

The version 1.0.0 was initaial version of the program.
This is version 1.0.1 of the Currency Converter program after fixing bugs.


## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/M-Ehtesham-Ul-Hassan-Malik/TypeScript.git
   cd 04_Currency_Converter
   ```

2. Install dependencies:

   ```sh
  npm install inquirer chalk node-fetch

   ```

3. Make the script executable by running the following command:

   ```sh
   tsc index.ts && node index.js
   ```

## Usage

Run the application:

```sh
./index.js
```

Follow the prompts to select the currencies and enter the amount for conversion.

## Example

```sh
$ ./index.js
? Converting from: (Use arrow keys)
❯ USD 
  EUR 
  GBP 
  ... 

? Enter the amount you want to convert: 100
? Converting into: (Use arrow keys)
❯ PKR 
  INR 
  BDT 
  ... 

Converting from USD
Converting to PKR
Your 100 USD is equal to 19755.00 PKR
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

