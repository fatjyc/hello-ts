import { describe, it, expect, beforeEach, vi } from "vitest";
import { Greeter } from "./greeter";
import { languages } from "./languages";

vi.mock("./languages", () => ({
  languages: vi.fn(),
}));

describe("Greeter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should greet in a supported language", () => {
    const mockLanguage = "en";
    const mockGreeting = "Hello";
    vi.mocked(languages).mockReturnValue(mockGreeting);

    const greeter = new Greeter(mockLanguage, "Alice");
    const result = greeter.greet();

    expect(result).toBe("Hello Alice!");
    expect(languages).toHaveBeenCalledWith(mockLanguage);
  });

  it("should greet in a supported language with default name", () => {
    const mockLanguage = "es";
    const mockGreeting = "Hola";
    vi.mocked(languages).mockReturnValue(mockGreeting);

    const greeter = new Greeter(mockLanguage);
    const result = greeter.greet();

    expect(result).toBe("Hola World!");
    expect(languages).toHaveBeenCalledWith(mockLanguage);
  });

  it("should return 'Language not supported!' for an unsupported language", () => {
    const mockLanguage = "unsupported";
    vi.mocked(languages).mockReturnValue(undefined);

    const greeter = new Greeter(mockLanguage, "Alice");
    const result = greeter.greet();

    expect(result).toBe("Language not supported!");
    expect(languages).toHaveBeenCalledWith(mockLanguage);
  });
});
