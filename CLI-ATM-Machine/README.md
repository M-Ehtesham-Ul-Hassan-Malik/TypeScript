### Project Name: ATM Machine Application

#### Description
A simple ATM console application built with Node.js and inquirer.js that simulates basic banking operations such as depositing money, withdrawing money, checking balance, and donating to NGOs.

#### Features
- Login with a secret PIN (i.e: 4824).
- Deposit money into the account.
- Withdraw money from the account (with validation for insufficient funds).
- Check the current account balance.
- Donate money to a selected NGO.

#### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/M-Ehtesham-Ul-Hassan-Malik/TypeScript.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CLI-ATM-MACHINE
   ```

3. Install dependencies:
   ```bash
   npm install inquirer
   ```

#### Usage
1. Start the application:
   ```bash
   npm start
   ```

2. Follow the prompts to perform desired operations:
   - Enter your secret PIN to login.
   - Choose an operation from the provided list (Deposit Amount, Withdraw Amount, Check Balance, Donate to NGO).
   - Provide necessary inputs as prompted (e.g., amount to deposit/withdraw, NGO for donation).

## Versions
Version 1.0.0: Initial release with basic banking operations such as depositing money, withdrawing money, checking balance, and donating to NGOs.
<br>
Version 1.0.1: To use the application directly from the command line without cloning the repository, you can use the following npx command:
```
npx basic-atm-machine-ehtesham
```

#### Dependencies
- [inquirer](https://www.npmjs.com/package/inquirer): Used for interactive command-line prompts.

#### License
This project is licensed under the [ISC License](LICENSE).

#### Author
M Ehtesham Ul Hassan Malik
