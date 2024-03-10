import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "PKR": 1,
        "SAR": 0.013,
        "EUR": 0.003
    },
    "USD": {
        "USD": 1,
        "PKR": 278.92,
        "SAR": 3.75,
        "EUR": 0.91
    },
    "SAR": {
        "USD": 0.27,
        "PKR": 74.37,
        "SAR": 1,
        "EUR": 0.24
    },
    "EUR": {
        "USD": 1.09,
        "PKR": 305.24,
        "SAR": 4.10,
        "EUR": 1
    },
};
async function askQuestion() {
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["USD", "PKR", "SAR", "EUR"],
            message: "Select your currency:"
        },
        {
            type: "list",
            name: "to",
            choices: ["USD", "PKR", "SAR", "EUR"],
            message: "Select your conversion currency:"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount:"
        }
    ]);
    const { from, to, amount } = answers;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(`your currency exchange from ${from}to ${to} is ${result}`);
    }
    else {
        console.log("Invalid amount");
    }
}
async function restsart() {
    do {
        await askQuestion();
        var askAgain = await inquirer.prompt({
            type: "input",
            name: "startAgain",
            message: "Do you want to continue. Press Y :"
        });
    } while (askAgain.startAgain == "y" || askAgain.startAgain == "YES" || askAgain.startAgain == "Y" || askAgain.startAgain == "yes");
}
restsart();
