import { describe, it, expect } from 'vitest';
import { Greeter } from './greeter';

describe('Greeter', () => {
  it('should return "Hello!" for English', () => {
    const greeter = new Greeter('en');
    expect(greeter.greet()).toBe('Hello!');
  });

  it('should return "Hola!" for Spanish', () => {
    const greeter = new Greeter('es');
    expect(greeter.greet()).toBe('Hola!');
  });

  it('should return "Bonjour!" for French', () => {
    const greeter = new Greeter('fr');
    expect(greeter.greet()).toBe('Bonjour!');
  });

  it('should return "Hallo!" for German', () => {
    const greeter = new Greeter('de');
    expect(greeter.greet()).toBe('Hallo!');
  });

  it('should return "Language not supported!" for unsupported language', () => {
    const greeter = new Greeter('invalid');
    expect(greeter.greet()).toBe('Language not supported!');
  });

  it('should store language in instance property', () => {
    const greeter = new Greeter('en');
    expect(greeter.language).toBe('en');
  });
});
