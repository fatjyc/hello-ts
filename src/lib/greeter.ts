import { languages } from "./languages";

class Greeter {
    language: string;
    constructor(language: string) {
        this.language = language;
    }
    greet() {
        const greeting = languages(this.language);
        if (greeting) {
            return `${greeting}!`;
        } else {
            return "Language not supported!";
        }
    }
}

export { Greeter };
