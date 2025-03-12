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

  it('should greet with the correct greeting when the language is supported', () => {
    vi.mocked(languages).mockReturnValue('Hello');

    const greeter = new Greeter('en', 'Alice');
    const result = greeter.greet();

    expect(result).toBe('Hello Alice!');
    expect(languages).toHaveBeenCalledWith('en');
  });

  it('should greet with the default name when no name is provided', () => {
    vi.mocked(languages).mockReturnValue('Hello');

    const greeter = new Greeter('en');
    const result = greeter.greet();

    expect(result).toBe('Hello World!');
    expect(languages).toHaveBeenCalledWith('en');
  });

  it('should return "Language not supported!" when the language is not supported', () => {
    vi.mocked(languages).mockReturnValue(undefined);

    const greeter = new Greeter('unsupported', 'Bob');
    const result = greeter.greet();

    expect(result).toBe('Language not supported!');
    expect(languages).toHaveBeenCalledWith('unsupported');
  });
});
