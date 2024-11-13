import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Greeter } from './greeter';
import { languages } from './languages';

vi.mock('./languages', () => ({
  languages: vi.fn(),
}));

describe('Greeter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should greet with the correct message for a supported language', () => {
    // Arrange
    const mockLanguage = 'en';
    const mockGreeting = 'Hello';
    const name = 'Alice';
    vi.mocked(languages).mockReturnValueOnce(mockGreeting);

    // Act
    const greeter = new Greeter(mockLanguage, name);
    const result = greeter.greet();

    // Assert
    expect(result).toBe(`${mockGreeting} ${name}!`);
    expect(languages).toHaveBeenCalledWith(mockLanguage);
  });

  it('should greet with the default name if no name is provided', () => {
    // Arrange
    const mockLanguage = 'en';
    const mockGreeting = 'Hello';
    vi.mocked(languages).mockReturnValueOnce(mockGreeting);

    // Act
    const greeter = new Greeter(mockLanguage);
    const result = greeter.greet();

    // Assert
    expect(result).toBe(`${mockGreeting} World!`);
    expect(languages).toHaveBeenCalledWith(mockLanguage);
  });

  it('should return "Language not supported!" for an unsupported language', () => {
    // Arrange
    const mockLanguage = 'unsupported';
    vi.mocked(languages).mockReturnValueOnce(undefined);

    // Act
    const greeter = new Greeter(mockLanguage);
    const result = greeter.greet();

    // Assert
    expect(result).toBe('Language not supported!');
    expect(languages).toHaveBeenCalledWith(mockLanguage);
  });
});
