#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
import fetch from "node-fetch";

// Define the type alias for the API response
type ExchangeRateApiResponse = {
  conversion_rates: Record<string, number>;
};

// Define the type for conversion rate response
type ConversionRateResponse = {
  conversion_rate: number;
};

// The API link to fetch the latest exchange rates for PKR
const apiLink = "https://v6.exchangerate-api.com/v6/6d7360705074628599176f0a/latest/pkr";

// Function to fetch exchange rate data from the API
const fetchData = async (data: string): Promise<ExchangeRateApiResponse> => {
  const response = await fetch(data); // Fetch data from the API
  const result = await response.json(); // Parse the JSON response
  return result as ExchangeRateApiResponse; // Return the parsed result as ExchangeRateApiResponse
};

// Function to fetch the conversion rate between two currencies
const fetchConversionRate = async (data: string): Promise<number> => {
  const response = await fetch(data); // Fetch data from the API
  const result = await response.json(); // Parse the JSON response
  const conversionRateResponse = result as ConversionRateResponse; // Cast the result to ConversionRateResponse
  return conversionRateResponse.conversion_rate; // Return the conversion rate
};

const main = async () => {
  const data = await fetchData(apiLink); // Fetch the latest exchange rates
  const currency = Object.keys(data.conversion_rates); // Get the list of available currencies

  // Prompt the user to select the currency to convert from
  const { name: fromCurrency } = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting from:",
    choices: currency
  });

  console.log(`Converting from ${chalk.green.bold(fromCurrency)}`);

  // Prompt the user to enter the amount to convert
  const { amount } = await inquirer.prompt({
    type: "input",
    name: "amount",
    message: `Enter the amount you want to convert:`,
    validate: (input) => {
      const isValid = !isNaN(parseFloat(input)) && parseFloat(input) > 0; // Validate if the input is a positive number
      return isValid || "Please enter a valid number."; // Return validation result
    }
  });

  // Prompt the user to select the currency to convert into
  const { name: toCurrency } = await inquirer.prompt({
    type: "list",
    name: "name",
    message: `Converting into: `,
    choices: currency
  });

  console.log(`Converting to ${chalk.green.bold(toCurrency)}`);

  // Construct the API link to fetch the conversion rate between the selected currencies
  const conversionApiLink = `https://v6.exchangerate-api.com/v6/6d7360705074628599176f0a/pair/${fromCurrency}/${toCurrency}`;

  const conversionRate = await fetchConversionRate(conversionApiLink); // Fetch the conversion rate
  const convertedAmount = parseFloat(amount) * conversionRate; // Calculate the converted amount

  console.log(`Your ${chalk.green.bold(amount)} ${chalk.green.bold(fromCurrency)} is equal to ${chalk.green.bold(convertedAmount.toFixed(2))} ${chalk.green.bold(toCurrency)}`); // Display the converted amount
};

// Execute the main function and catch any errors
main().catch(console.error);
