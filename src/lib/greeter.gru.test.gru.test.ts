/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Greeter } from './greeter';
import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('./languages', () => ({
  languages: (lang: string) => {
    if (lang === 'en') return 'Hello';
    if (lang === 'es') return 'Hola';
    return null;
  }
}));

describe('Greeter', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should greet in English', () => {
    const greeter = new Greeter('en', 'Alice');
    expect(greeter.greet()).toBe('Hello Alice!');
  });

  it('should greet in Spanish', () => {
    const greeter = new Greeter('es', 'Bob');
    expect(greeter.greet()).toBe('Hola Bob!');
  });

  it('should return language not supported for unsupported language', () => {
    const greeter = new Greeter('fr', 'Charlie');
    expect(greeter.greet()).toBe('Language not supported!');
  });

  it('should use default name when no name is provided', () => {
    const greeter = new Greeter('en');
    expect(greeter.greet()).toBe('Hello World!');
  });
});