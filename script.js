'use strict';

//Задание 1
//Плащадь параллелипипеда:
var a = 5, b = 2, c = 4, result;
result = 2 * (a * b + b * c + a * c);
console.log('Плащадь параллелипипеда равна ', result)
console.log('сравнение:', b > c ? 'ширина больше высоты' : 'высота больше ширины')

//Задание 2
var Su = 1000, Agr = 15, Bgr25, Sgr, result;
Sgr = 15 * 25;
result = Su % Sgr;
console.log('осталось не занято ',result,'м2');

//Задание 3
var Sb = 1500, Ss = 600, result;
result = 1500 - 600;
console.log('площадь кольца ',result);
