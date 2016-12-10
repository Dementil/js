'use strict';

// 1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
// В решении использовать только математические и логические операторы. Результат в консоль.
// Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!
// 2. Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.
// 3. Написать программу для перевода числа из десятичной системы счисления в двоичную и наоборот. Вам понадобится метод Math.floor(), чтобы отбросить дробную часть и метод pow() объекта Math, он возводит число в степень

//Задание 1
console.log('Задание 1:');

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


//Задание 2
console.log('Задание 2:');
console.log('отсортируем по убыванию массив [9, 7, 1, 4, 9, 6]')

var numbers = [9, 7, 1, 4, 9, 6]; //не удалось решить

// for (var i = 0; i< numbers.length; i++) {
//         if (numbers[i] > numbers[i+1]) { numbers.splice(1, numbers.push(numbers[i])) }
// }
   
// console.log(numbers);

// for (var i = 0; i < n-1; i++)
//      { for (var j = 0; j < n-1-i; j++)
//         { if (numbers[j+1] < numbers[j])
//            { var t = numbers [j+1]; numbers[j+1] = numbers[j]; numbers[j] = t; }
//         }
//      }

//     // else if (numbers[++index] > numbers[index++]) {
//     //     numbers.splice(1, numbers[index], numbers.push(numbers[++index]))
//     // }
// // }

// console.log(numbers);


// Задание 3 
console.log('Задание 3'); 


var number10, arr, a, b;

number10 = 25;
arr=[];

do{ 
a=number10%2;
console.log(a);
arr.push(a);
console.log(arr);
b=Math.floor(number10/2);
number10=b;
} while(b != 0); 
arr.reverse(); 

arr = arr.join(''); 
console.log(arr); 

