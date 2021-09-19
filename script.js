'use strict';

let q1;
let q2;
const  personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    begin : function(){
        do {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели ?','');
        } while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count));
    },
    rememberFilms : function(){
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
    },
    detectRole :function(){
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
    },
    showMyDB :function(){
        if(!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : function(){
        for (let i = 1; i <= 3; i++) {
            let answer;
            answer = prompt(`Ваш любимый жанр под номером ${i}`,'');
            if(answer != null && answer != '' && answer.length < 50 && isNaN(answer)){
                personalMovieDB.genres[i-1] = answer;
            }
            else{
                console.log('Something went wrong');
                i--;
              }
             
        }
        personalMovieDB.genres.forEach(function(item,i){
            console.log(`Любимый жанр ${i+1} - это ${item}`); 
          });
    },
    toggleVisibleMyDB : function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }
        else{
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.begin();
 personalMovieDB.rememberFilms();

 personalMovieDB.detectRole();

personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();