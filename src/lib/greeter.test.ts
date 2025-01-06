import { describe, it, expect, beforeEach, vi } from "vitest";
import { Greeter } from "./greeter";
import { languages } from "./languages";

vi.mock("./languages", () => ({
    languages: vi.fn()
}));

describe("Greeter", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it("should return the correct greeting for a supported language", () => {
        const mockLanguages = vi.mocked(languages);
        mockLanguages.mockImplementation((lang: string) => {
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
        });

        const greeter = new Greeter("en");
        expect(greeter.greet()).toBe("Hello!");

        const spanishGreeter = new Greeter("es");
        expect(spanishGreeter.greet()).toBe("Hola!");

        const frenchGreeter = new Greeter("fr");
        expect(frenchGreeter.greet()).toBe("Bonjour!");

        const germanGreeter = new Greeter("de");
        expect(germanGreeter.greet()).toBe("Hallo!");
    });

    it('should return "Language not supported!" for an unsupported language', () => {
        const mockLanguages = vi.mocked(languages);
        mockLanguages.mockReturnValue(undefined);

        const greeter = new Greeter("jp");
        expect(greeter.greet()).toBe("Language not supported!");
    });
});
