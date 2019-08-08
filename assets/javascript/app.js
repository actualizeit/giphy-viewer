// giphy api key EZDTGbiqXXiqZl2mKgXw3iiXuNNZtQ3S

var videoGames = ["dota", "smash brothers", "goldeneye", "mario kart", "big buck hunter", 
                "counterstrike", "diablo", "soul calibur", "warcraft", "fifa", "doom"]

function displayGameGifs() {

  var game = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=EZDTGbiqXXiqZl2mKgXw3iiXuNNZtQ3S&q=" + game + "&limit=10&offset=0&lang=en";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Creating a div to hold the movie
    var gameDiv = $("<div class='game'>");

    // Storing the rating data
    var rating = response.rating;

    // Creating an element to have the rating displayed
    var rated = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    gameDiv.append(rated);

    // Retrieving the URL for the image
    var gifURL = response.url;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", gifURL);

    // Appending the image
    gameDiv.append(image);

    // Putting the entire movie above the previous movies
    $("#movies-view").prepend(movieDiv);
  });

}
    // Event listener for our cat-button
    $("#game-buttons").on("click", function() {

        var searchTerm = this.val()
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=EZDTGbiqXXiqZl2mKgXw3iiXuNNZtQ3S&tag=" + searchTerm;
  
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
  
          // After the data from the AJAX request comes back
          .then(function(response) {
  
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;
  
            // Creating and storing an image tag
            var catImage = $("<img>");
  
            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");
  
            // Prepending the catImage to the images div
            $("#images").prepend(catImage);
          });
      });

  // Function for displaying movie data
  function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#game-buttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < videoGames.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("game-btn");
      // Adding a data-attribute
      a.attr("data-name", videoGames[i]);
      // Providing the initial button text
      a.text(videoGames[i]);
      // Adding the button to the buttons-view div
      $("#game-buttons").append(a);
    }
  }


      //Adding a button function
      $("#add-button").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var game = $("#add-button-form").val().trim();

        // Adding movie from the textbox to our array
        videoGames.push(game);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".game-btn", displayGameGifs);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();