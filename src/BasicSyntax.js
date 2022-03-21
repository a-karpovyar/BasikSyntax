export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let x = 0;
    let predznach = 0;
    for (let i = 0; i < str.length; i++) {
        let promznach = simvoltooocifra(str[i]);
        if (promznach > predznach) {
            result -= 2 * x;
        }
        if (promznach !== predznach) {
            x = 0;
        }
        x += promznach;
        result += promznach;
        predznach = promznach;
    }
    return result;
}
function simvoltooocifra(simvol) {
    switch (simvol) {
        case 'I':
            return 1;
            break;
        case 'V':
            return 5;
            break;
        case 'X':
            return 10;
            break;
        case 'L':
            return 50;
            break;
        case 'C':
            return 100;
            break;
        case 'D':
            return 500;
            break;
        case 'M':
            return 1000;
            break;
    }
}
