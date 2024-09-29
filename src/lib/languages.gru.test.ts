/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { languages } from './languages';
import { describe, it, expect } from 'vitest';

describe('languages', () => {
  it('should return correct greeting for English', () => {
    expect(languages('en')).toBe('Hello');
  });

  it('should return correct greeting for Spanish', () => {
    expect(languages('es')).toBe('Hola');
  });

  it('should return correct greeting for French', () => {
    expect(languages('fr')).toBe('Bonjour');
  });

  it('should return correct greeting for German', () => {
    expect(languages('de')).toBe('Hallo');
  });

  it('should return correct greeting for Chinese', () => {
    expect(languages('zh')).toBe('你好');
  });

  it('should return undefined for unknown language', () => {
    expect(languages('xx')).toBeUndefined();
  });
});