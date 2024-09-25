import { Greeter } from "./lib/greeter";
import * as readline from "node:readline";

console.info("Please Input Language (en, es, fr, de):");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on("line", (language: string) => {
    const greeter = new Greeter(language);
    console.log(greeter.greet());
    rl.close();
});
