const movie = {
  title: 'a',
  releaseYear: 2020,
  rating: 5,
  director: 'RM'
};

showProperties(movie);

function showProperties(movie) {
  for (const key in movie) {
    if (typeof(movie[key]) == 'string') {
      console.log(key, movie[key]);
    }
  }
}
