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
        },
        {
            title: "Jurrasic Park",
            genre: "Adventure",
            watched: false
        }
    ],
    toggleWatched(index) {
        this.movies[index].watched = !this.movies[index].watched;
    },
    removeMovie(index) {
        this.movies.splice(index, 1);
    }
};

function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(watchlist.movies));
}

function loadMovies() {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies !== null) {
        try {
            watchlist.movies = JSON.parse(savedMovies);
        } catch (error) {
            console.log("Error loading movies:", error);
        }
    }
}

function renderMovies() {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    watchlist.movies.forEach((movie, index) => {
        const li = document.createElement("li");
        const title = document.createElement("h3");
        title.textContent = movie.title;
        const details = document.createElement("p");
        details.textContent = movie.genre + " - " + (movie.watched ? "Watched" : "Not Watched");

        const watchedButton = document.createElement("button");
        watchedButton.type = "button";
        watchedButton.textContent = movie.watched ? "Mark as Unwatched" : "Mark as Watched";
        watchedButton.addEventListener("click", () => {
            watchlist.toggleWatched(index);
            saveMovies();
            renderMovies();
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            watchlist.removeMovie(index);
            saveMovies();
            renderMovies();
        });

        li.appendChild(title);
        li.appendChild(details);
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
    event.preventDefault();
    const title = titleInput.value.trim();
    const genre = genreSelect.value;
    if (title === "") {
        message.textContent = "Enter a movie title.";
        return;
    }
    if (genre === "") {
        message.textContent = "Choose a genre.";
        return;
    }
    watchlist.movies.push({ title, genre, watched: false });
    saveMovies();
    renderMovies();
    message.textContent = "";
    titleInput.value = ""
});

loadMovies();
renderMovies();
