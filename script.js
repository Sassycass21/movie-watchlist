const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const genreSelect = document.getElementById("movie-genre");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");

const watchlist = {
    movies: [
        {
            title: "The Princess Bride",
            genre: "Adventure",
            watched: false
        }
    ],
    toggleWatched(index) {
        // TODO (Step 4)
    },
    removeMovie(index) {
        // TODO (Step 4)
    }
};

function saveMovies() {
    // TODO (Step 6)
}

function loadMovies() {
    // TODO (Step 6)
}

function renderMovies() {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    watchlist.movies.forEach((movie, index) => {
        const li = document.createElement("li");
        li.textContent = movie.title + " (" + movie.genre + ") - " + (movie.watched ? "Watched" : "Not Watched");

        const watchedButton = document.createElement("button");
        watchedButton.tpe = "button";
        watchedButton.textContent = movie.watched ? "Mark as Unwatched" : "Mark as Watched";
        watchedButton.addEventListener("click", () => {
            watchlist.toggleWatched(index);
            renderMovies();
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            watchlist.removeMovie(index);
            renderMovies();
        });

        li.appendChild(watchedButton);
        li.appendChild(removeButton);
        movieList.appendChild(li);
    });
    
    const emptyMessage = document.getElementById("empty-message");
    if (watchlist.movies.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

form.addEventListener("submit", (event) => {
    // TODO (Step 5)
});

loadMovies();
renderMovies();