/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { languages } from './languages';
import { describe, it, expect } from 'vitest';

describe('languages', () => {
  it('should return the correct greeting for each language', () => {
    expect(languages('en')).toBe('Hello');
    expect(languages('es')).toBe('Hola');
    expect(languages('fr')).toBe('Bonjour');
    expect(languages('de')).toBe('Hallo');
    expect(languages('it')).toBe('Ciao');
    expect(languages('pt')).toBe('Olá');
    expect(languages('ru')).toBe('Привет');
    expect(languages('ja')).toBe('こんにちは');
    expect(languages('ko')).toBe('안녕하세요');
    expect(languages('zh')).toBe('你好');
    expect(languages('ar')).toBe('مرحبا');
    expect(languages('hi')).toBe('नमस्ते');
    expect(languages('bn')).toBe('হ্যালো');
    expect(languages('pa')).toBe('ਹੈਲੋ');
    expect(languages('gu')).toBe('હેલો');
    expect(languages('ta')).toBe('வணக்கம்');
    expect(languages('te')).toBe('హలో');
    expect(languages('ml')).toBe('ഹലോ');
    expect(languages('kn')).toBe('ಹಲೋ');
    expect(languages('mr')).toBe('हॅलो');
    expect(languages('ne')).toBe('नमस्कार');
    expect(languages('si')).toBe('හෙලෝ');
    expect(languages('th')).toBe('สวัสดี');
    expect(languages('vi')).toBe('xin chào');
    expect(languages('tr')).toBe('Merhaba');
    expect(languages('fa')).toBe('سلام');
    expect(languages('ur')).toBe('ہیلو');
    expect(languages('he')).toBe('שלום');
    expect(languages('yi')).toBe('העלא');
    expect(languages('id')).toBe('Halo');
    expect(languages('ms')).toBe('Halo');
    expect(languages('fil')).toBe('Halo');
    expect(languages('sw')).toBe('Halo');
    expect(languages('af')).toBe('Hallo');
    expect(languages('sq')).toBe('Përshëndetje');
    expect(languages('am')).toBe('ሰላም');
    expect(languages('hy')).toBe('Բարև');
    expect(languages('az')).toBe('Salam');
    expect(languages('eu')).toBe('Kaixo');
    expect(languages('be')).toBe('Прывітанне');
  });

  it('should return undefined for unknown languages', () => {
    expect(languages('unknown')).toBeUndefined();
  });
});