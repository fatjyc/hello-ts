import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Greeter } from './greeter';
import { languages } from './languages';

vi.mock('./languages', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./languages')>();
  return {
    ...actual,
    languages: vi.fn((language: string) => {
      const greetings: Record<string, string> = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
      };
      return greetings[language];
    }),
  };
});

describe('Greeter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should greet in English by default', () => {
    const greeter = new Greeter('en');
    expect(greeter.greet()).toBe('Hello World!');
  });

  it('should greet in Spanish', () => {
    const greeter = new Greeter('es', 'Alice');
    expect(greeter.greet()).toBe('Hola Alice!');
  });

  it('should greet in French', () => {
    const greeter = new Greeter('fr', 'Bob');
    expect(greeter.greet()).toBe('Bonjour Bob!');
  });

  it('should return "Language not supported!" for unsupported languages', () => {
    const greeter = new Greeter('de', 'Charlie');
    expect(greeter.greet()).toBe('Language not supported!');
  });

  it('should use "World" as the default name if not provided', () => {
    const greeter = new Greeter('es');
    expect(greeter.greet()).toBe('Hola World!');
  });
});
