(function () {
    'use strict';

    //Задача 1
    console.log('Задача 1');

    var strWithBla = 'String with "bla-bla-bla';
    var blaStr = 'bla';

    //1.1
    console.log('пункт 1.1')

    var pos = -1;
    while ((pos = strWithBla.indexOf(blaStr, pos + 1)) != -1) {
        console.log('Строка \"blaStr\" повторяется на позиции:' + pos);
    }

    //1.2
    console.log('пункт 1.2')

    var n = 0;

    function sumBlaStr() {
        while ((pos = strWithBla.indexOf(blaStr, pos + 1)) != -1) {
            n = ++n;
        }
        console.log('Количество повторений строки \"blaStr\"  \= ' + n);
    }
    sumBlaStr()

    //Задача 2
    console.log('Задача 2');

    var sity1 = {};
    sity1.name = 'Урюпинск';
    sity1.population = 10000;
    sity1.mayor = 'Иванов Иван Иванович';


    var sity2 = { //литеральный способ
        name: 'Сыктывкар',
        population: 30000,
        mayor: 'Петров Петр Поликарпович',
    };

    sity1.amount = 1000; //создано свойство количество и ему присвоено значение
    sity1.amount = sity1.population + (sity2.population - sity1.amount); //в свойство записано новое занчение
    // console.log(sity1);

    /*function showMessage(){ //создана функция, которая выводит на экран информацию о городе
        alert("Информация о городе 1:\n" +  
            "Название города: " + sity1.name + 
            "\n" + "Население: " + sity1.population + "\n" + 
            "Мэр: " + sity1.mayor);
        alert("Информация о городе 2:\n" +  
            "Название города: " + sity2.name + 
            "\n" + "Население: " + sity2.population + "\n" + 
            "Мэр: " + sity2.mayor);;
    }
    showMessage()*/


    function showConsole() {//Вывод информации о городах в консоль
        console.log(sity1);
        console.log(sity2);
    }
    showConsole()


    var president = {
        changeMayor: function (newMayor) {
            sity1.changeLogin = newMayor;
        }
    }

    president.changeMayor('Петров Петр Поликарпович');
    console.log(sity1.changeLogin);


    //Задача 3
    console.log('Задача 3');

    function runCalculator() {
        function useCalculator() {
            var chek = confirm('Запустить калькулятор');
            if (chek == true) {
                getDataFromUser()
            } else {
                alert('Вы закрыли программу');
            }
        }
        useCalculator();
    }
    runCalculator();

    // Код добавлен для работы функции getDataFromUser()
    var a, b, operator;
    a = Math.floor(Math.random() * 1000);
    b = Math.floor(Math.random() * 1000);
    //


    function getDataFromUser() {
        var data = [a, operator, b];
        var operations = data.join(',');
        console.log(operations);
    };

    getDataFromUser();







} ())