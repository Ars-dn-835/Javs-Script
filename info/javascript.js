let diana = {
    firstname: 'Diana',
    lastname: 'Fenton',
    birthday: '07/22/1996',
    showInfo: function () {
        console.log('Student name: ' + this.firstname +
            ' ' + this.lastname);
    },
    showAge: function () {
        const deltaTime = Date.now() -
            Date.parse(this.birthday);
        const studentAge = Math.floor(deltaTime /
            (365 * 24 * 60 * 60 * 1000));
        console.log(this.firstname + ' ' + this.lastname +
            ' is ' + studentAge + 'years old.');
    }
};
console.log(diana);
diana.showInfo();
diana.showAge();

//створений за допомогою функції

function Student(firstname, lastname, birthday) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.showInfo = function () {
        console.log('Student name: ' + this.firstname +
            ' ' + this.lastname);
    },
        this.showAge = function () {
            const deltaTime = Date.now() -
                Date.parse(this.birthday);
            const studentAge = Math.floor(deltaTime /
                (365 * 24 * 60 * 60 * 1000));
            console.log(this.firstname + ' ' + this.lastname +
                ' is ' + studentAge + 'years old.');
        }

}

let muhail = new Student('name', 'last', '07/22/1996');

muhail.showAge();

let lisa = new Student('Lisa', 'Paltrow', '08/12/1998');

lisa.showInfo();
lisa.showAge();
console.log(muhail, lisa);

//клас

function Hotel(name, country, rooms, bookedRooms) {
    this.name = name;
    this.country = country;
    this.rooms = rooms;
    this.bookedRooms = bookedRooms;
    this.availableRooms = function () {
        return this.rooms - this.bookedRooms;
    }
    this.availablePercent = function () {
        return Math.floor(this.availableRooms() /
                this.rooms * 100) +
            '%';
    }
}

let antiqueRomanPalace = new Hotel('Antique Roman Palace',
    'Turkey', 270, 130);
console.log(antiqueRomanPalace.availableRooms(), antiqueRomanPalace.availablePercent());

// Принципи ООП:

// 1. Інкапсуляція (закрита територія, якийсь клас)
// щоб не можна було отримати доступ або змінити переміну
// #назва переміної
// але є 2 методи get(),set() задопомогою яких можна змінити цю переміну

// 2. Наслідування EXTENDS - вказує кого буде наслідувати
// коли дочірній обєк наслідує все від батьківського

// 3. Поліморфізм - це можливість змінювати і модифікувати наслідувані методи


class Human {
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
    }

    showInfo() {
        console.log(this.firstname + ' ' +
            this.lastname);
    }

    showAge() {
        const deltaTime = Date.now() -
            Date.parse(this.birthday);
        const age = Math.floor(deltaTime /
            (365 * 24 * 60 * 60 * 1000));
        console.log(this.firstname + ' ' +
            this.lastname + ' is ' + age +
            ' years old.');
    }
}

const john = new Human('John', 'Smith', '09-17-2003');
john.showInfo();
john.showAge();

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    square() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

let rect1 = new Rectangle(20, 30);
console.log(rect1.square(), rect1.perimeter()); //600 100
let rect2 = new Rectangle(78, 92);
console.log(rect2.square(), rect2.perimeter()); // 7176
// 340
console.log(rect1, rect2);

// наслідування
class Teacher extends Human {
    constructor(firstname, lastname, birthday,
                subjects = []) {
        super(firstname, lastname, birthday);
        this.subjects = subjects;
    }

    showSubjects() {
        console.log(this.firstname +
            ' ' +
            this.lastname +
            ' can teach you ' +
            this.subjects.join(', '));
    }
}

const kate = new Teacher('Kate', 'Lowdell', '07/15/1986',
    ['biology', 'geography']);
console.log(kate.showSubjects());

// поліморфізм

class ITMentor extends Teacher {
    constructor(firstname, lastname, birthday,
                subjects = [], level)
    {
        super(firstname, lastname, birthday, subjects);
        this.level = level;
    }
    showSubjects(){
        console.log('With '+this.firstname + ' ' +this.lastname +' you can get such IT skills: '+
            this.subjects.join(', '));

        document.write('<p>With '+this.firstname +' ' + this.lastname +' you can get such IT skills:</p><ol><li>' +
            this.subjects.join('<li>') +'</ol>');
    }
    showLevel(){
        console.log(this.firstname + ' ' + this.lastname + ' has level '+ this.level);
    }
}

const andrew = new ITMentor("Andrew", "Phillipov",
    '07/22/1986',
    ['HTML', 'CSS', 'JavaScript',
        'React', 'Angular'],
    'Senior');
andrew.showInfo();
andrew.showAge();
andrew.showSubjects();
andrew.showLevel();
