/* Реализовать функцию которая будет определять, в каком регистре записан n
элемент переданной строки, если в верхнем то вернуть true, в противном случае
вернуть false. */

function func1(string, n) {
    if(string[n]===string[n].toUpperCase()) {
        return true;
    }

    else {
        return false;
    }
}



/* Реализовать функцию которая заменяет в строке str, все вхождения подстроки
find, на подстроку replace. */

function func2(str, find, replace) {
    for (let i = 0; i < str.length; i++) {
        str = str.replace(find,replace)
    }
    return str;
}
