import { describe, it, expect } from 'vitest';
import { languages } from './languages';

describe('languages function', () => {
  it('should return "Hello" for "en"', () => {
    expect(languages('en')).toBe('Hello');
  });

  it('should return "Hola" for "es"', () => {
    expect(languages('es')).toBe('Hola');
  });

  it('should return "Bonjour" for "fr"', () => {
    expect(languages('fr')).toBe('Bonjour');
  });

  it('should return "Hallo" for "de"', () => {
    expect(languages('de')).toBe('Hallo');
  });

  it('should return "Ciao" for "it"', () => {
    expect(languages('it')).toBe('Ciao');
  });

  it('should return "Olá" for "pt"', () => {
    expect(languages('pt')).toBe('Olá');
  });

  it('should return "Привет" for "ru"', () => {
    expect(languages('ru')).toBe('Привет');
  });

  it('should return "こんにちは" for "ja"', () => {
    expect(languages('ja')).toBe('こんにちは');
  });

  it('should return "안녕하세요" for "ko"', () => {
    expect(languages('ko')).toBe('안녕하세요');
  });

  it('should return "你好" for "zh"', () => {
    expect(languages('zh')).toBe('你好');
  });

  it('should return "مرحبا" for "ar"', () => {
    expect(languages('ar')).toBe('مرحبا');
  });

  it('should return "नमस्ते" for "hi"', () => {
    expect(languages('hi')).toBe('नमस्ते');
  });

  it('should return "হ্যালো" for "bn"', () => {
    expect(languages('bn')).toBe('হ্যালো');
  });

  it('should return "ਹੈਲੋ" for "pa"', () => {
    expect(languages('pa')).toBe('ਹੈਲੋ');
  });

  it('should return "હેલો" for "gu"', () => {
    expect(languages('gu')).toBe('હેલો');
  });

  it('should return "வணக்கம்" for "ta"', () => {
    expect(languages('ta')).toBe('வணக்கம்');
  });

  it('should return "హలో" for "te"', () => {
    expect(languages('te')).toBe('హలో');
  });

  it('should return "ഹലോ" for "ml"', () => {
    expect(languages('ml')).toBe('ഹലോ');
  });

  it('should return "ಹಲೋ" for "kn"', () => {
    expect(languages('kn')).toBe('ಹಲೋ');
  });

  it('should return "हॅलो" for "mr"', () => {
    expect(languages('mr')).toBe('हॅलो');
  });

  it('should return "नमस्कार" for "ne"', () => {
    expect(languages('ne')).toBe('नमस्कार');
  });

  it('should return "හෙලෝ" for "si"', () => {
    expect(languages('si')).toBe('හෙලෝ');
  });

  it('should return "สวัสดี" for "th"', () => {
    expect(languages('th')).toBe('สวัสดี');
  });

  it('should return "xin chào" for "vi"', () => {
    expect(languages('vi')).toBe('xin chào');
  });

  it('should return "Merhaba" for "tr"', () => {
    expect(languages('tr')).toBe('Merhaba');
  });

  it('should return "سلام" for "fa"', () => {
    expect(languages('fa')).toBe('سلام');
  });

  it('should return "ہیلو" for "ur"', () => {
    expect(languages('ur')).toBe('ہیلو');
  });

  it('should return "שלום" for "he"', () => {
    expect(languages('he')).toBe('שלום');
  });

  it('should return "העלא" for "yi"', () => {
    expect(languages('yi')).toBe('העלא');
  });

  it('should return "Halo" for "id"', () => {
    expect(languages('id')).toBe('Halo');
  });

  it('should return "Halo" for "ms"', () => {
    expect(languages('ms')).toBe('Halo');
  });

  it('should return "Halo" for "fil"', () => {
    expect(languages('fil')).toBe('Halo');
  });

  it('should return "Halo" for "sw"', () => {
    expect(languages('sw')).toBe('Halo');
  });

  it('should return "Hallo" for "af"', () => {
    expect(languages('af')).toBe('Hallo');
  });

  it('should return "Përshëndetje" for "sq"', () => {
    expect(languages('sq')).toBe('Përshëndetje');
  });

  it('should return "ሰላም" for "am"', () => {
    expect(languages('am')).toBe('ሰላም');
  });

  it('should return "Բարև" for "hy"', () => {
    expect(languages('hy')).toBe('Բարև');
  });

  it('should return "Salam" for "az"', () => {
    expect(languages('az')).toBe('Salam');
  });

  it('should return "Kaixo" for "eu"', () => {
    expect(languages('eu')).toBe('Kaixo');
  });

  it('should return "Прывітанне" for "be"', () => {
    expect(languages('be')).toBe('Прывітанне');
  });

  it('should return undefined for unsupported language code', () => {
    expect(languages('xx')).toBeUndefined();
  });
});
