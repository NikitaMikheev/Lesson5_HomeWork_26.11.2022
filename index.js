//     Преобразовать строку в массив слов. Напишите функцию stringToArray(str), которая преобразует строку в массив слов.
function stringToArray(str){
        let array = Array.from(str);
        let stringArray=[];
        for (let i = 0; i < array.length; i++) {
                if(array[i]!='') {
                        stringArray = array.join('');
                        stringArray = stringArray.split(' ');
                }    
        }

        return stringArray;
}
//     Напишите функцию deleteCharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
function deleteCharacters(str, length){
        return str.slice(0,length);
}
//     Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
function insertDash(str) {
        str=str.toUpperCase();
        for (let i = 0; i < str.length; i++) {
                str=str.replace(' ', '-')
                
        }
        return str;
}

//     Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
function func1(str) {
        let letter=str[0].toUpperCase();
        str=str.replace(str[0], letter);
        return str;
}

//     Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
        let letter;
        let pos=0;
        let index=0;
        for (let i = 0; i < str.length; i++) {
                pos = index+1;
                index=str.indexOf(' ', pos)
                letter=str[index+1].toUpperCase();
                str=str.replace(str[index+1], letter)

        }
        return str;

}

//     Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
function changeRegister(str) {

}
//     Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
function removeChar(str) {

}
//    Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение.
function zeros(num, len) {

}
//     Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
function comparison(str1, str2) {

}
//     Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
function insensitiveSearch(str1, str2) {

}
//     Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
function initCap(str) {

}
//     Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {

}
//     Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
function repeatStr(str, n) {

}
//     Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
function endsWith(str, str1){

}
//     Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
function insert(str, substr, pos){

}
//     Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
function limitStr(str, n, symb){

}
//     Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
function count(str, stringsearch){

}
//     Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
function strip(str){

}
//     Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
function cutString(str, n){

}
//     Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
function findWord(word, str){

}

module.exports = {
        stringToArray,
        deleteCharacters,
        insertDash,
        func1,
        capitalize,
        changeRegister,
        removeChar,
        zeros,
        comparison,
        insensitiveSearch,
        initCap,
        initSnake,
        repeatStr,
        endsWith,
        insert,
        limitStr,
        count,
        strip,
        cutString,
        findWord,
};
