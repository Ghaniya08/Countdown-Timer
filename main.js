#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.italic.blue("\t\t\t________### (❁´◡`❁) Project 9 CountDown timer By Ghaniya Khan (❁´◡`❁) ###________\t\t\t\t"));
console.log(chalk.italic.red.underline("\n \t\t\t\t\t\ Enter the number between 60 and its in seconds \t\t\t\t \n "));
const input = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: chalk.italic.magenta("Enter the time in seconds:"),
});
//if value is greter then 1 sec 
if (input.userInput > 60) {
    console.log(chalk.italic.red(">Please enter the seconds between 0 to 60"));
    console.log(chalk.blue.italic("Thanks for coming🥰"));
    process.exit();
    //if value is string
}
else if (isNaN(input.userInput)) {
    console.log(chalk.italic.red(">Please enter the valid number."));
    console.log(chalk.blue.italic("Thanks for coming🥰"));
    process.exit();
}
//answer
let answer = input.userInput;
//make funcion and pass parameter
function Time(val) {
    //make variable in function initial time and use new date to use seconds and i have to get the seconds from user so use set seconds and calcutate in it again use new date because add the user value in seconds and + value
    let sec = new Date().setSeconds(new Date().getSeconds() + val);
    //to make it in formet of seconds and add the initial time()
    let anssecond = new Date(sec);
    // use it to fire the time one by one time will be change and make arrow function
    setInterval((() => {
        let current = new Date();
        let timeDiff = differenceInSeconds(anssecond, current);
        // if time is up it stop and show this message  
        if (timeDiff <= 0) {
            console.log(chalk.italic.yellow("Timer is expired"));
            console.log(chalk.blue.italic("Thanks for coming🥰"));
            process.exit();
        }
        //convert value into a min and sec  
        let minutes = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let seconds = Math.floor((timeDiff % 60));
        console.log(`${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`);
    }), 1000);
}
;
Time(answer);
