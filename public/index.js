document.addEventListener("DOMContentLoaded", () => {
  const movieListElement = document.getElementById("movieList");
  const favoritesListElement = document.getElementById("favoritesList");

  // Save API Key 
  const apiKey = "c3505eebf0ca93e8a8009d3b920ab28c";
  const tmdbApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  // Fetch movie data from TMDB API
  fetch(tmdbApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      
      displayMovies(movies);
    })
    .catch((error) => console.error("Error fetching data:", error));

  // Display movies in the UI
  function displayMovies(movies) {
    movieListElement.innerHTML = "";
    movies.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      movieListElement.appendChild(movieElement);
    });
  }

  // Create HTML element for a movie
  function createMovieElement(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <span>${movie.title}</span>
      <span class="favorite" data-id="${movie.id}">❤️</span>
    `;

    const favoriteButton = movieElement.querySelector(".favorite");
    favoriteButton.addEventListener("click", () => toggleFavorite(movie));

    return movieElement;
  }

  // Toggle movie in favorites
  function toggleFavorite(movie) {
    const favorites = getFavorites();
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }

    displayFavorites();
  }

  // Get favorites from localStorage
  function getFavorites() {
    const favoritesString = localStorage.getItem("favorites");
    return JSON.parse(favoritesString) || [];
  }

  // Save favorites to localStorage
  function saveFavorites(favorites) {
    const favoritesString = JSON.stringify(favorites);
    localStorage.setItem("favorites", favoritesString);
  }

  // Add movie to favorites
  function addFavorite(movie) {
    const favorites = getFavorites();
    favorites.push(movie);
    saveFavorites(favorites);
  }

  // Remove movie from favorites
  function removeFavorite(movie) {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    saveFavorites(updatedFavorites);

    displayFavorites();

    return updatedFavorites;
  }

  // Display favorites in the UI
  function displayFavorites() {
    const favorites = getFavorites();
    favoritesListElement.innerHTML = "";

    favorites.forEach((movie) => {
      const favoriteElement = document.createElement("div");
      favoriteElement.classList.add("movie");
      favoriteElement.innerHTML = `
        <span>${movie.title}</span>
        <span class="favorite" data-id="${movie.id}">❌</span>
      `;

      const removeButton = favoriteElement.querySelector(".favorite");
      removeButton.addEventListener("click", () => removeFavorite(movie));

      favoritesListElement.appendChild(favoriteElement);
    });
  }
});
