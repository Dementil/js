'use strict';


// Задание 1
/*Напишите функцию (), которая в зависимости от переданных в 
нее целочисленных аргументов "количество дней", 
будет выводить слово "день" в нужно форме 
"если передали - 1, то 1 день", "если передали - 3, то 3 дня" и т.д). */

var a = 3;

function showDays(a) {
    var dd = ['день', 'дня', 'дней'];
    var dayStr = a.toString();
    // console.log(dayStr[dayStr.length-1]);
    if (dayStr[dayStr.length - 1] == 1) {
        console.log(a, dd[0]);
    } else if (dayStr[dayStr.length - 1] >= 2 && dayStr[dayStr.length - 1] <= 4) {
        console.log(a, dd[1]);
    } else if (dayStr[dayStr.length - 1] > 5 || dayStr[dayStr.length - 1] == 0) {
        console.log(a, dd[2]);
    }
    return;
}

showDays(a);



//Задание 2
// Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.



var n;
function calcSum(n) {
  if (n == 1) return 1;
  return n + calcSum(n - 1);
}

n = 13;
console.log('сумма числа', n, '=', calcSum(n));


//Задание 3

/*Написать функцию, которая возвращает новую функцию, 
которая увеличивает/уменьшает переданное число на указанный при карировании шаг. */


var numb = function (firstnumb) {
    return function (secondnumb) {
        console.log(firstnumb-secondnumb);
    }
}
var fin = numb(5);
fin(54);

