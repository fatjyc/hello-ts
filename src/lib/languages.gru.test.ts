/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { languages } from './languages';
import { describe, it, expect } from 'vitest';

describe('languages', () => {
  it('should return the correct greeting for English', () => {
    expect(languages('en')).toBe('Hello');
  });

  it('should return the correct greeting for Spanish', () => {
    expect(languages('es')).toBe('Hola');
  });

  it('should return the correct greeting for French', () => {
    expect(languages('fr')).toBe('Bonjour');
  });

  it('should return the correct greeting for German', () => {
    expect(languages('de')).toBe('Hallo');
  });

  it('should return the correct greeting for Italian', () => {
    expect(languages('it')).toBe('Ciao');
  });

  it('should return the correct greeting for Portuguese', () => {
    expect(languages('pt')).toBe('Olá');
  });

  it('should return the correct greeting for Russian', () => {
    expect(languages('ru')).toBe('Привет');
  });

  it('should return the correct greeting for Japanese', () => {
    expect(languages('ja')).toBe('こんにちは');
  });

  it('should return the correct greeting for Korean', () => {
    expect(languages('ko')).toBe('안녕하세요');
  });

  it('should return the correct greeting for Chinese', () => {
    expect(languages('zh')).toBe('你好');
  });

  it('should return undefined for unsupported language', () => {
    expect(languages('xx')).toBeUndefined();
  });
});