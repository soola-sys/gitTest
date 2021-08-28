'use strict';

let numberOfFilms;

function begin(){
    do {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?','');
    } while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}
begin();
let personalMovieDB = new Object();
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;
let q1;
let q2;

 function rememberFilms(){
    for (let i = 0; i < 2; i++) {
        q1 = prompt('Один из последних просмотренных фильмов ?','');
        q2 = prompt('На сколько оцените его ?','');
     
         if(q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50){
              personalMovieDB.movies[q1] = q2;
              console.log('Succes');
          } else {
              console.log('error');
              i--;
          }
         }
 }
 rememberFilms();
function detectRole(){
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
}
detectRole();

function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    let i = 0;
    let answer;
    while(i<3){
      i++;
      answer = prompt(`Ваш любимый жанр под номером ${i}`,'');
      if(answer != null && answer != '' && answer.length < 50 && isNaN(answer)){
        personalMovieDB.genres[i-1] = answer;
      }
      else{
        console.log('Something went wrong');
        i--;
      }
    }
}
showMyDB();
writeYourGenres();