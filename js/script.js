'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?','');

let personalMovieDB = new Object();
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

//  for (let i = 0; i < 2; i++) {
//     let q1 = prompt('Один из последних просмотренных фильмов ?','');
//     let q2 = prompt('На сколько оцените его ?','');

//     if(q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50){
//         personalMovieDB.movies[q1] = q2;
//         console.log('Succes');
//     } else {
//         console.log('error');
//         i--;
//     }
  let i = 0;
  do {
      i = i + 1;
    let q1 = prompt('Один из последних просмотренных фильмов ?','');
    let q2 = prompt('На сколько оцените его ?','');

   if(q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50){
      personalMovieDB.movies[q1] = q2;
       console.log('Succes');
   } else {
        console.log('error');
       i--;
   }

  } while(i < 2);
   
 if(personalMovieDB.count < 10){
     console.log('Просмотрено довольно мало фильмов');
 }
 else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
     console.log('Вы классический зритель');
 }
 else if(personalMovieDB.count > 30){
     console.log('Вы киноман');
 }
 else {
     console.log('Произошла Ощибка');
 }
console.log(personalMovieDB);

