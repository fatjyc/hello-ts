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

  it('should greet in a supported language', () => {
    vi.mocked(languages).mockReturnValue('Hello');
    const greeter = new Greeter('en', 'Alice');
    expect(greeter.greet()).toBe('Hello Alice!');
  });

  it('should greet with default name when no name is provided', () => {
    vi.mocked(languages).mockReturnValue('Hello');
    const greeter = new Greeter('en');
    expect(greeter.greet()).toBe('Hello World!');
  });

  it('should return "Language not supported!" for an unsupported language', () => {
    vi.mocked(languages).mockReturnValue(undefined);
    const greeter = new Greeter('xx', 'Alice');
    expect(greeter.greet()).toBe('Language not supported!');
  });
});
