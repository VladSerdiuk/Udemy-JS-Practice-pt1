const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотернных фильмов?', ''),
      b = prompt('На сколько вы его оцените?', ''),
      c = prompt('Один из последних просмотернных фильмов?', ''),
      d = prompt('На сколько вы его оцените?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);