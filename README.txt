Movie WatchList
---------------

GitHub Repository: 
https://github.com/Sassycass21/movie-watchlist

Movie Properties:
Each movie is stored as an object in the movies array.

title: stores the name of the movie as a string
genre: stores the selected movie genre as a string
watched: stores the Boolean to track whether the movie has been watched

Watchlist Method:
The toggleWatched(index) method changes the watched status of a movie in the array.
It uses the index to find the correct movie and the ! operator to switch between true/false.

Saving and Loading:
The saveMovies() function uses JSON.stringify() to convert the movies array into a string and saves it to localStorage.

The loadMovies() function uses localStorage.getItem() to retreive the saved movies and JSON.pars() to convert the string back into an array.

A try/catch block handles errors if the saved data cannot be loaded correctly.
