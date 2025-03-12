import { describe, it, expect } from 'vitest';
import { languages } from './languages';

describe('languages function', () => {
  it('should return "Hello" for English (en)', () => {
    expect(languages('en')).toBe('Hello');
  });

  it('should return "Hola" for Spanish (es)', () => {
    expect(languages('es')).toBe('Hola');
  });

  it('should return "Bonjour" for French (fr)', () => {
    expect(languages('fr')).toBe('Bonjour');
  });

  it('should return "Hallo" for German (de)', () => {
    expect(languages('de')).toBe('Hallo');
  });

  it('should return "Ciao" for Italian (it)', () => {
    expect(languages('it')).toBe('Ciao');
  });

  it('should return "Olá" for Portuguese (pt)', () => {
    expect(languages('pt')).toBe('Olá');
  });

  it('should return "こんにちは" for Japanese (ja)', () => {
    expect(languages('ja')).toBe('こんにちは');
  });

  it('should return "안녕하세요" for Korean (ko)', () => {
    expect(languages('ko')).toBe('안녕하세요');
  });

  it('should return "你好" for Chinese (zh)', () => {
    expect(languages('zh')).toBe('你好');
  });

  it('should return "مرحبا" for Arabic (ar)', () => {
    expect(languages('ar')).toBe('مرحبا');
  });

  it('should return "नमस्ते" for Hindi (hi)', () => {
    expect(languages('hi')).toBe('नमस्ते');
  });

  it('should return "হ্যালো" for Bengali (bn)', () => {
    expect(languages('bn')).toBe('হ্যালো');
  });

  it('should return "હેલો" for Gujarati (gu)', () => {
    expect(languages('gu')).toBe('હેલો');
  });

  it('should return "வணக்கம்" for Tamil (ta)', () => {
    expect(languages('ta')).toBe('வணக்கம்');
  });

  it('should return "హలో" for Telugu (te)', () => {
    expect(languages('te')).toBe('హలో');
  });

  it('should return "ಹಲೋ" for Kannada (kn)', () => {
    expect(languages('kn')).toBe('ಹಲೋ');
  });

  it('should return "हॅलो" for Marathi (mr)', () => {
    expect(languages('mr')).toBe('हॅलो');
  });

  it('should return "नमस्कार" for Nepali (ne)', () => {
    expect(languages('ne')).toBe('नमस्कार');
  });

  it('should return "හෙලෝ" for Sinhala (si)', () => {
    expect(languages('si')).toBe('හෙලෝ');
  });

  it('should return "สวัสดี" for Thai (th)', () => {
    expect(languages('th')).toBe('สวัสดี');
  });

  it('should return "xin chào" for Vietnamese (vi)', () => {
    expect(languages('vi')).toBe('xin chào');
  });

  it('should return "Merhaba" for Turkish (tr)', () => {
    expect(languages('tr')).toBe('Merhaba');
  });

  it('should return "سلام" for Persian (fa)', () => {
    expect(languages('fa')).toBe('سلام');
  });

  it('should return "ہیلو" for Urdu (ur)', () => {
    expect(languages('ur')).toBe('ہیلو');
  });

  it('should return undefined for unsupported language', () => {
    expect(languages('xyz')).toBeUndefined();
  });
});
