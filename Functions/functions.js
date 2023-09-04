// Part 1 - Defining and using functions and understanding scope

// Array of movie objects
const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];
  
  // Declare a function called findMovie with argument called movieTitle
  function findMovie(movieTitle) {
    // Loop through the movies array
    for (const movie of movies) {
      // Check if the current movie title matches the movieTitle argument
      if (movie.title === movieTitle) {
        // Log details of the movie
        console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}`);
      }
      // Log the value of movie before the loop closes
      console.log("Value of movie inside loop:", movie);
    }
  }
  
  // Call the findMovie function with an argument of "Star Wars"
  findMovie("Star Wars");
  
  // variable called movie, value of "Thor: Ragnarok"
  var movie = "Thor: Ragnarok";
  

  console.log("Movies array:", movies);
  console.log("Value of movie:", movie);
  
  
  // Change the declaration of movie to have the var keyword in front of it
  var movie = "Thor: Ragnarok";
  console.log("Movies array:", movies);
  console.log("Value of movie:", movie);
  
  // Add a call to the findMovie with the argument set to movie
  findMovie(movie);