const translit = (str: string): string => {
    const ru = 'А-а-Б-б-В-в-Г-г-Д-д-Е-е-Ё-ё-Э-э-Ж-ж-З-з-И-и-I-i-I-i-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split('-');
    const en = 'A-a-B-b-V-v-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-\'-\'-Y-y-\'-\'-E-e-YU-yu-YA-ya'.split('-');

    let res = '';
    for (let i = 0, l = str.length; i < l; i++) {
        const s = str.charAt(i);
        const n = ru.indexOf(s);
        if (n >= 0) {
            res += en[n];
        } else {
            res += s;
        }
    }
    return res;
}

export const generateSlug = (str: string): string => {
    // Транслитерация русских символов
    let url: string = translit(str);

    // Заменяем пробелы на дефисы
    url = url.replace(/\s+/g, '-');

    // Удаляем все неалфавитно-цифровые символы, кроме дефисов и подчеркиваний
    url = url.replace(/[^0-9a-z_\-]+/gi, '');

    // Заменяем несколько дефисов одним
    url = url.replace(/-+/g, '-');

    // Приводим к нижнему регистру
    url = url.toLowerCase();

    return url;
}