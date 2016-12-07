'use strict';

//Задание 1
//Плащадь параллелипипеда:
var a = 5, b = 2, c = 4, result;
result = 2 * (a * b + b * c + a * c);
console.log('Плащадь параллелипипеда равна ', result)
console.log('сравнение:', b > c ? 'ширина больше высоты' : 'высота больше ширины')

//Задание 2
var parcelS= 10, a = 15, b = 25, sBed, parcelM, result;
parcelM = parcelS*100;
sBed = 15 * 25;
result = parcelM % sBed;
console.log('осталось не занято ',result,'м2');

//Задание 3
var sBigDm = 15, sSmall = 600, sBigSm, result;

sBigSm=sBigDm*10*10;
result = sBigSm - 600;
console.log('площадь кольца ',result);
