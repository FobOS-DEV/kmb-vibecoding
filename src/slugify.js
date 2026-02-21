const translitMap = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z",
    и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
    с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
    ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
    };
    
    function transliterateRu(text) {
    return text
    .split("")
    .map((ch) => translitMap[ch] ?? ch)
    .join("");
    }
    
    function slugify(text) {
    if (!text) return "";
    
    const normalized = transliterateRu(String(text).toLowerCase());
    
    return normalized
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
    }
    
    module.exports = { slugify };
    