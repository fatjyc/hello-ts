const languages = (lang: string) => {
    switch (lang) {
        case "en":
            return "Hello";
        case "es":
            return "Hola";
        case "fr":
            return "Bonjour";
        case "de":
            return "Hallo";
        default:
            return undefined;
    }
};

export { languages };
