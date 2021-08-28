let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');

let personalMovieDB = new Object();
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

let question1 = prompt('Один из последних просмотренных фильмов ?','');
let question2 = prompt('На сколько оцените его ?','');
personalMovieDB.movies[question1] = question2;
console.log(personalMovieDB);