(function (global) {
    'use strict';


    function randomInt(min, max) {//создана функция-генератор случайных чисел в интервле от 0 до 2
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function Person(firstname, lastname) {//создана функция-конструктор
        this.firstname = firstname; //заданы ссылки на объект Person
        this.lastname = lastname;
    }

    Person.prototype.getFullName = function () { //создан прототип который наследует свойства Person
        return this.firstname + ' ' + this.lastname;
    };

    
    function Fan(firstname, lastname) { //создана функция-конструктор Fan
        Person.call(this, firstname, lastname);//явно вызвали конструктор родительского класса Person
    }

    Fan.prototype = Object.create(Person.prototype); //создали прототип для Fan
    Fan.prototype.constructor = Fan;

    Fan.prototype.onGoal = function () {
        var reaction = ['скандирует речевку', 'палит фаер', 'машет флагом'],//добавили свойство реакция фанатов при забитом голе
            i = randomInt(reaction.length - 1);//через вызов элементов массива задали случайный порядок распределения реакций
        return this.getFullName() + ' ' + reaction[i];
    };

    Fan.prototype.onFail = function () {//добавили свойство реакция фанатов при промахе
        var reaction = ['хватается за голову', 'кричит судью на мыло', 'зачиняет драку'],
            i = randomInt(reaction.length - 1);
        return this.getFullName() + ' ' + reaction[i];
    };


    function Footballer(firstname, lastname) {//создана функция-конструктор Footballer 
        Person.call(this, firstname, lastname);
    }

    Footballer.prototype = Object.create(Person.prototype);//создан прототип наследующий свойства Person
    Footballer.prototype.constructor = Footballer;

    Footballer.prototype.goal = function () {//создан прототип наследующий свойства Team
        this.team.goals += 1;
    };


    function Team(name) {//создан конструктор Team
        this.name = name;
        this.footballers = [];
        this.fans = [];
        this.goals = 0;
    }

    Team.prototype.addFootballer = function (footballer) {//создан прототип добавляющий футболистов в команды
        this.footballers.push(footballer);
        footballer.team = this;
    };

    Team.prototype.addFan = function (fan) {//создан прототип который привязывает фанатов к командам
        this.fans.push(fan);
        fan.team = this;
    };


    function Scoreboard(elemId, team1, team2) { //создание табло
        this.elem = document.getElementById(elemId); //поиск элемента с Id elemId
        this.elem.classList.add('scoreboard'); //создаем класс scoreboard
        this.elem.innerHTML = '\
            <div>\
                <div class="team"></div>\
                <div class="score">\
                    <span>0</span>\
                    <span>:</span>\
                    <span>0</span>\
                </div>\
                <div class="team"></div>\
            </div>\
            <div class="messages"></div>'

        this.messages = this.elem.querySelector('.messages');
        this.team1Score = this.elem.querySelector('.score span:first-child');
        this.team2Score = this.elem.querySelector('.score span:last-child');

        this.elem.querySelector('.team:first-child').appendChild(document.createTextNode(team1.name));
        this.elem.querySelector('.team:last-child').appendChild(document.createTextNode(team2.name));

        this.team1 = team1;
        this.team2 = team2;
    }

    Scoreboard.prototype.showMessage = function (msg) {//создан прототип для табло добавляющий абзац с реакцией фанатов при таймауте 
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(msg));

        this.messages.insertBefore(p, this.messages.firstChild );
    };

    Scoreboard.prototype.updateScore = function () {//создан прототип для табло добавляющий сообщение о забитом голе
        this.team1Score.replaceChild(
            document.createTextNode(team1.goals),
            this.team1Score.firstChild
        );

        this.team2Score.replaceChild(
            document.createTextNode(team2.goals),
            this.team2Score.firstChild
        );
    };


    function Game(elemId, team1, team2) {//создание конструктора игры
        this.team1 = team1;
        this.team2 = team2;
        this.scoreboard = new Scoreboard(elemId, team1, team2);
    }

    Game.prototype.start = function (matchTime) {//создание прототипа добавляющего в игру таймер
        var that = this;

        matchTime = matchTime || 10; //заданы значения по умолчанию -заданные пользователем или 10 мили секунд

        function timeout() {//функция создающая тайм ауты
            var team = randomInt(1) ? that.team1 : that.team2,
                opponents = team === that.team1 ? that.team2 : that.team1,
                footballer = team.footballers[randomInt(team.footballers.length - 1)],
                success = randomInt(1),
                i,
                msg;

            if (success) {
                footballer.goal();
                that.scoreboard.showMessage(footballer.getFullName() + ' забил гол!');
            }

            i = team.fans.length;

            while (i--) {
                msg = success ? team.fans[i].onGoal() : team.fans[i].onFail();
                that.scoreboard.showMessage(msg);
            }

            i = opponents.fans.length;

            while (i--) {
                msg = success ? opponents.fans[i].onFail() : opponents.fans[i].onGoal();
                that.scoreboard.showMessage(msg);
            }

            that.scoreboard.updateScore();

            matchTime -= 1;
            
            if (matchTime) {
                setTimeout(timeout, 1000);//задана продолжительность тайм аута в 1 секунду
            }
        }
        
        setTimeout(timeout, 1000);//вызов функции
    };


    var team1, team2,//объявление используемых переменных
        footballer1, footballer2, footballer3, footballer4,
        fan1, fan2, fan3, fan4,
        game;

    team1 = new Team('Питерские Гризли');//зарезервирована память для названий объявления команд
    team2 = new Team('Гламурные Ёжики');

    footballer1 = new Footballer('Дмитрий', 'Иванов');//зарезервирована память для объявления футболистов
    footballer2 = new Footballer('Михаил', 'Иванов');
    footballer3 = new Footballer('Игорь', 'Смирнов');
    footballer4 = new Footballer('Юрий', 'Васильев');

    fan1 = new Fan('Кирилл', 'Версетти');//Зарезервирована память для объявления фанатов
    fan2 = new Fan('Виталий', 'Чертков');
    fan3 = new Fan('Дарья', 'Буртова');
    fan4 = new Fan('Сергей', 'Хоружа');

    team1.addFootballer(footballer1);
    team1.addFootballer(footballer2);
    team1.addFan(fan1);
    team1.addFan(fan2);

    team2.addFootballer(footballer3);
    team2.addFootballer(footballer4);
    team2.addFan(fan3);
    team2.addFan(fan4);

    game = new Game('football-wrapper', team1, team2);
    game.start();
}());