#! /usr/bin/env node

import inquirer from "inquirer";

// Define the type for the exchange rates
type ExchangeRates = {
  [key: string]: {
    [key: string]: number;
  };
};

// Create a Static Dataset
const exchangeRates: ExchangeRates = {
  USD: { EUR: 0.93, GBP: 0.79, INR: 83.76, JPY: 157.66, AUD: 1.51, PKR: 278.78 },
  EUR: { USD: 1.08, GBP: 0.85, INR: 90.11, JPY: 170.43, AUD: 1.63, PKR: 301.26 },
  GBP: { USD: 1.27, EUR: 1.18, INR: 105.95, JPY: 200.39, AUD: 1.92, PKR: 354.22 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.094, JPY: 1.89, AUD: 0.018, PKR: 3.34 },
  JPY: { USD: 0.0063, EUR: 0.0059, GBP: 0.0050, INR: 0.53, AUD: 0.096, PKR: 1.77 },
  AUD: { USD: 0.66, EUR: 0.61, GBP: 0.52, INR: 55.17, JPY: 104.33, PKR: 184.45 },
  PKR: { USD: 0.0036, EUR: 0.0033, GBP: 0.0028, INR: 0.30, JPY: 0.57, AUD: 0.0054 },
  // Add more currencies as needed
};

// Validate Input
function validateAmount(amount: string): boolean | string {
  const amountNumber = parseFloat(amount);
  if (isNaN(amountNumber)) {
    return 'Amount must be a number';
  }
  if (amountNumber <= 0) {
    return 'Amount must be greater than zero';
  }
  return true;
}

// Main Function
async function main() {
  let againStart = true;
  do {
    console.clear();
    console.log("\t\t------- C U R R E N C Y    C O N V E R T E R ------- \n");

    const currencies = Object.keys(exchangeRates);

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'from',
        message: 'Select the currency to convert from:',
        choices: currencies,
      },
      {
        type: 'input',
        name: 'amount',
        message: 'Enter the amount to convert:',
        validate: validateAmount,
      },
      {
        type: 'list',
        name: 'to',
        message: 'Select the currency to convert to:',
        choices: currencies,
      },
    ]) as {
      from: keyof ExchangeRates;
      to: keyof ExchangeRates;
      amount: string;
    };

    const { from, to, amount } = answers;
    const amountNumber = parseFloat(amount);

    console.log(`\nFetching exchange rate for ${from} to ${to}`);

    if (from === to) {
      console.log(`\n${amount} ${from} is equivalent to ${amount} ${to}`);
    } else if (exchangeRates[from] && exchangeRates[from][to]) {
      const convertedAmount = (amountNumber * exchangeRates[from][to]).toFixed(2);
      console.log(`\n${amount} ${from} is equivalent to ${convertedAmount} ${to}`);
    } else {
      console.log(`Conversion rate not found for ${from} to ${to}`);
    }

    const again = await inquirer.prompt({
      type: "list",
      name: "again",
      message: "\nDo you want to convert another currency?",
      choices: ["Start", "Exit"]
    });

    againStart = again.again === "Start";
    if (!againStart) {
      console.log("\nThank you for using the Currency Converter. Goodbye!\n");
    }

  } while (againStart);
}

//-----------------------------------------------------------------------------------

//Program Start

console.clear();
    console.log("\t\t------- C U R R E N C Y    C O N V E R T E R ------- \n");

let ask = await inquirer.prompt({
  type:"list",
  name:"start",
  message:"Select Any One",
  choices:["Start Currency Converter","Exit"]
})

switch(ask.start){
  case "Start Currency Converter":
  // Execute main function
  main();
  break;

  case "Exit":
    console.log("\nThank you for using the Currency Converter. Goodbye!\n");
  process.exit();
}

2