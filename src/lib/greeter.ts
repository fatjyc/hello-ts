import { languages } from "./languages";

class Greeter {
    language: string;
    name: string;
    constructor(language: string, name = "World") {
        this.language = language;
        this.name = name;
    }
    greet() {
        const greeting = languages(this.language);
        if (greeting) {
            return `${greeting} ${this.name}!`;
        } else {
            return "Language not supported!";
        }
    }
}

export { Greeter };
