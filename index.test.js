const { stringToArray, deleteCharacters, insertDash, func1, capitalize, changeRegister, removeChar,
    zeros, comparison, insensitiveSearch, initCap, initSnake, repeatStr, endsWith,
    insert, limitStr, count, strip, cutString, findWord
} = require('.');

test('1. Преобразовать строку в массив слов. Напишите функцию stringToArray(str), которая преобразует строку в массив слов.', () => {
    expect(stringToArray('Привет мир')).toEqual(['Привет', 'мир']);
    expect(stringToArray('Преобразовать строку в массив слов')).toEqual(['Преобразовать', 'строку', 'в', 'массив','слов']);
})

test('2. Напишите функцию deleteCharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.', () => {
    expect(deleteCharacters('Привет', 3)).toBe('При');
    expect(deleteCharacters('возвращает', 6)).toBe('возвра');
    expect(deleteCharacters('функцию', 7)).toBe('функцию');
})

test('3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.', () => {
    expect(insertDash('При этом все символы строки необходимо') ).toBe('ПРИ-ЭТОМ-ВСЕ-СИМВОЛЫ-СТРОКИ-НЕОБХОДИМО');
})

test('4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.', () => {
    expect(func1('которая принимает строку') ).toBe('Которая принимает строку');
})

test('5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.', () => {
    expect(capitalize('которая возвращает строку') ).toBe('Которая Возвращает Строку');
})

test('6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».', () => {
    expect(changeRegister('КаЖдЫй ОхОтНиК') ).toBe('кАжДыЙ оХоТнИк');
})

test('7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.', () => {
    expect(removeChar('П!"№;р%:?и*()в_+-е=#@$^&*[]т{}/`~') ).toBe('Привет');
})

test('8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение.', () => {
    expect(zeros(145, 5)).toBe('00145');
    expect(zeros(33, 4)).toBe('0033');
    expect(zeros(33, 4)).toBe('0033');
})

test('9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.', () => {
    expect(comparison('Привет', 'пРиВет') ).toBe(true);
    expect(comparison('Привет мир', 'пРиВет') ).toBe(false);
    expect(comparison('Привет мир', 'пРиВет Mир') ).toBe(false);
})

test('10. Напишите функцию insensitiveSearch(str1, str2), которая проверяет нахождение подстроки str2 в строке str1 без учёта регистра символов.', () => {
    expect(insensitiveSearch('которая осуществляет поиск подстроки', 'КоТоРаЯ') ).toBe(true);
    expect(insensitiveSearch('которая осуществляет поиск подстроки', 'КоТоРаЯ') ).toBe(true);
})

test('11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.', () => {
    expect(initCap('hEllo woRld') ).toBe('HelloWorld');
    expect(initCap('beSt VariabLe foR nAmE') ).toBe('BestVariableForName');
})

test('12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.', () => {
    expect(initSnake('BestVarName') ).toBe('best_var_name');
})

test('13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.', () => {
    expect(repeatStr('Привет', 4) ).toBe('ПриветПриветПриветПривет');
    expect(repeatStr('Привет', 0) ).toBe('');
})

test('14. Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.', () => {
    expect(endsWith('Привет мир', 'мир')).toBe(true);
    expect(endsWith('Привет мир', '1мир')).toBe(false);
})

test('15. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.', () => {
    expect(insert("Привет мир", "прекрасный ", 7)).toBe("Привет прекрасный мир");
})

test('16. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.', () => {
    expect(limitStr("Очень длинный интересный текст", 13, '!')).toBe("Очень длинный!");
})

test('17. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.', () => {
    expect(count("ПриветПриветПриветПривет", "Привет")).toBe(4);
    expect(count("Привет Привет Привет Привет При", "Привет")).toBe(4);
})

test('18. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.', () => {
    expect(strip("   Строка с   лишними     пробелами     ")).toBe("Строка с лишними пробелами");
})

test('19. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.', () => {
    expect(cutString("Которая удаляет лишние слова из строки", 3)).toBe("Которая удаляет лишние");
})

test('20. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.', () => {
    expect(findWord("word", " которая проверяет, существует ли в строке str слова word.")).toBe(true);
    expect(findWord("сущестует", " которая проверяет, существует ли в строке str слова word.")).toBe(false);
})
