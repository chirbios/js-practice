/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// "use strict";
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// let a = prompt('Один из последних просмотренных фильмов?',''),
//     b = prompt('На сколько оцените его?',''),
//     c = prompt('Один из последних просмотренных фильмов?',''),
//     d = prompt('На сколько оцените его?','');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {
//        film: a,
//        rating: b,
//        film1: c,
//        rating1: d,
//     },
//     actors: {},
//     genres: [],
//     privat: false
// };
// console.log(personalMovieDB.moviesfilm, `:`, personalMovieDB.movies.rating);
// console.log(personalMovieDB.movies.film1, `:`, personalMovieDB.movies.rating1);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла  --циклы

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять  -- условия

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" -- циклы и условия

4) Потренироваться и переписать цикл еще двумя способами*/



// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

    
// for (let i = 0; i < 2; i++) {
    
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b; 
//         console.log('done');
//     } 
//     else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");
// } else if (10 <= personalMovieDB.count <= 30) {
//     alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30){
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }


     
// console.log(personalMovieDB);


// 'use strict';

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// do { const a = prompt('Один из последних просмотренных фильмов?', ''),
// b = prompt('На сколько оцените его?', '');

// } while ( let i = 0; i < 2; i++);


// console.log(personalMovieDB);
// let i = 0;
// do {
//     const a = prompt('Один и последних просмотренных фильмов', ''),
//      b = prompt('На сколько оцените его', '');
//      i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//     } else {
//      console.log('error');
//      i--;
//     }
// } while (i < 2);


// let i = 0;
// while (i < 2) {
//     const a = prompt('Один и последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его', '');
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//     } else {
//      console.log('error');
//      i--;
//     }
// };

// 'use strict';
// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(10, 4));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => a + b;

// 'use strict';

// const str = "test";

// console.log(str.toUpperCase());
// console.log(str);

// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


'use strict';

let numberOfFilms;


function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))  {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');
        } 
        else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPesonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (10 <= personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPesonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }

}

writeYourGenres();



