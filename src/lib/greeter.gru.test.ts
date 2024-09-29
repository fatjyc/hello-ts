/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Greeter } from './greeter';
import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('./languages', () => ({
  languages: vi.fn((language) => {
    if (language === 'en') return 'Hello';
    if (language === 'es') return 'Hola';
    return null;
  }),
}));

describe('Greeter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should greet in English', () => {
    const greeter = new Greeter('en', 'Alice');
    expect(greeter.greet()).toBe('Hello Alice!');
  });

  it('should greet in Spanish', () => {
    const greeter = new Greeter('es', 'Bob');
    expect(greeter.greet()).toBe('Hola Bob!');
  });

  it('should return language not supported', () => {
    const greeter = new Greeter('fr', 'Charlie');
    expect(greeter.greet()).toBe('Language not supported!');
  });

  it('should greet the world when no name is provided', () => {
    const greeter = new Greeter('en');
    expect(greeter.greet()).toBe('Hello World!');
  });
});