import { describe, it, expect, beforeEach, vi } from "vitest";
import { Greeter } from "./greeter";
import { languages } from "./languages";

vi.mock("./languages", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./languages")>();
  return {
    ...actual,
    languages: vi.fn(),
  };
});

describe("Greeter", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should greet in a supported language", () => {
    vi.mocked(languages).mockReturnValueOnce("Hello");
    const greeter = new Greeter("en", "Alice");
    expect(greeter.greet()).toBe("Hello Alice!");
  });

  it("should greet in a supported language with default name", () => {
    vi.mocked(languages).mockReturnValueOnce("Hello");
    const greeter = new Greeter("en");
    expect(greeter.greet()).toBe("Hello World!");
  });

  it("should return 'Language not supported!' for unsupported language", () => {
    vi.mocked(languages).mockReturnValueOnce(undefined);
    const greeter = new Greeter("xx", "Bob");
    expect(greeter.greet()).toBe("Language not supported!");
  });

  it("should return 'Language not supported!' for unsupported language with default name", () => {
    vi.mocked(languages).mockReturnValueOnce(undefined);
    const greeter = new Greeter("xx");
    expect(greeter.greet()).toBe("Language not supported!");
  });
});
