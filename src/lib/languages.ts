const languages = (lang: string) => {
    switch (lang) {
        case "en":
            return "Hello";
        case "es":
            return "Hola";
        case "fr":
            return "Bonjour";
        case "de":
            return "Hallo";
        case "it":
            return "Ciao";
        case "pt":
            return "Olá";
        case "ru":
            return "Привет";
        case "ja":
            return "こんにちは";
        case "ko":
            return "안녕하세요";
        case "zh":
            return "你好";
        case "ar":
            return "مرحبا";
        case "hi":
            return "नमस्ते";
        case "bn":
            return "হ্যালো";
        case "pa":
            return "ਹੈਲੋ";
        case "gu":
            return "હેલો";
        case "ta":
            return "வணக்கம்";
        case "te":
            return "హలో";
        case "ml":
            return "ഹലോ";
        case "kn":
            return "ಹಲೋ";
        case "mr":
            return "हॅलो";
        case "ne":
            return "नमस्कार";
        case "si":
            return "හෙලෝ";
        case "th":
            return "สวัสดี";
        case "vi":
            return "xin chào";
        case "tr":
            return "Merhaba";
        case "fa":
            return "سلام";
        case "ur":
            return "ہیلو";
        case "he":
            return "שלום";
        case "yi":
            return "העלא";
        case "id":
            return "Halo";
        case "ms":
            return "Halo";
        case "fil":
            return "Halo";
        case "sw":
            return "Halo";
        case "af":
            return "Hallo";
        case "sq":
            return "Përshëndetje";
        case "am":
            return "ሰላም";
        case "hy":
            return "Բարև";
        case "az":
            return "Salam";
        case "eu":
            return "Kaixo";
        case "be":
            return "Прывітанне";
        default:
            return undefined;
    }
};

export { languages };
