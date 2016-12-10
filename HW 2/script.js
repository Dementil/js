'use strict';

//Задание 1
console.log('Задание 1 (решение через массив и методы Math.sqrt и Math.pow:');
/*1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
В решении использовать только математические и логические операторы. Результат в консоль.
Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!*/

//даны три точки
//X = (2;2)
//Y = (3;5)
//Z = (6;2)

var x, y, z;

x = [2, 2];
y = [3, 5];
z = [6, 2];

//найдем длины сторон
//длина стороны равно корню из (x1-x2) в квадрате +(y1-y2) в квадрате

var lengthYX = Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2));
console.log('длина стороны YX = ', lengthYX);

var lengthYZ = Math.sqrt(Math.pow(z[0] - y[0], 2) + Math.pow(z[1] - y[1], 2));
console.log('длина стороны YZ = ', lengthYZ);

var lengthXZ = Math.sqrt(Math.pow(z[0] - x[0], 2) + Math.pow(z[1] - x[1], 2));
console.log('длина стороны XZ = ', lengthXZ);

// определим вид треугольника

if (Math.pow(lengthYZ, 2) + Math.pow(lengthXZ, 2) < Math.pow(lengthYZ, 2)) {
    console.log('треугольник является остроугольным');
} else if (Math.pow(lengthYZ, 2) + Math.pow(lengthXZ, 2) > Math.pow(lengthYZ, 2)) {
    console.log('треугольник является тупоугольным');
} else {
    console.log('треугольник является прямоугольным');
};

//Второй вариант решения
console.log('Задание 1 (решение через теорему Пифагора:');

var
    xa = 2, ya = 2,
    xb = 3, yb = 5,
    xc = 2, yc = 2;



((xa - xb) * (xa - xb) + (ya - yb) * (ya - yb)) +
    ((xc - xb) * (xc - xb) + (yc - yb) * (yc - yb)) ==
    ((xc - xa) * (xc - xa) + (xc - xa) * (xc - xa)) ?
    console.log('Треугольник прямоугольный') : console.log('Треугольник не является прямоугольным');

/*Задание 2
Создать массив из чисел. 
Выполнить сортировку массива по возрастанию методом пузырька. 
Запрещено использовать стандартные методы.
*/

console.log('Задание 2:');

var numbers = [9, 7, 1, 4, 9, 6];
var n = numbers.length;
var k;

console.log('отсортируем по убыванию массив [9, 7, 1, 4, 9, 6]')

for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            k = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = k;
        }
    }
}
console.log('Массив отсортирован: ' + numbers);


/*Задание 3 
Написать программу для перевода числа из десятичной системы счисления в двоичную и наоборот. 
Вам понадобится метод Math.floor(), чтобы отбросить дробную часть и метод pow() объекта Math, он возводит число в степень
*/

console.log('Задание 3');

var number10, number2, arr, i;

number10 = 89;
arr = [];
i = 0;

while (number10 > 0) {
    arr[i] = number10 % 2;
    number10 = Math.floor(number10 / 2) + '';
    i++;
}


number2 = '';
i = arr.length;
while (i > 0) {
    i--;
    number2 = number2 + arr[i];
}


console.log('перевод числа из десятичной системы  в двоичную')

number10 = null;
for (var i = 0; i < arr.length; i++) {
    number10 += Math.pow(2, i) * arr[i];
}


number2 = Number(number2);
console.log('Двоичное значение: ', number2);
console.log('Десятичное значение: ', number10);

