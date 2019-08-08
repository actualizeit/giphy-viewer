

var videoGames = ["dota", "smash brothers", "goldeneye", "mario kart", "big buck hunter", 
                "counterstrike", "diablo", "soul calibur", "warcraft", "fifa", "doom"]

function displayGameGifs() {

  var game = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=EZDTGbiqXXiqZl2mKgXw3iiXuNNZtQ3S&q=" + game + "&limit=10&offset=0&lang=en";

  // Creating an AJAX call for the specific game button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
console.log(response)

for (var i = 0; i < response.data.length; i++) {

  // Creating a div to hold the game
    var gameDiv = $("<div class='font-weight-bold m-2'>");

    // Storing the rating data
    var rating = response.data[i].rating;

    // Creating an element to have the rating displayed
    var rated = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    gameDiv.append(rated);

    // Retrieving the URL for the image
    var gifURLStill = response.data[i].images.fixed_height_still.url
    var gifURLAnimate = response.data[i].images.fixed_height.url

    // Creating an element to hold the image
    var image = $("<img>")
    image.attr("src", gifURLStill)
    image.attr("alt", response.data[i].slug)
    image.attr("data-still", gifURLStill)
    image.attr("data-animate", gifURLAnimate)
    image.attr("data-state", "still")
    image.attr("id", "gif")

    // Appending the image
    gameDiv.append(image);

    // Putting the game gifs above the previous game gifs
    $("#game-gif-view").prepend(gameDiv);
}
  });

}

  // Function for displaying buttons
  function renderButtons() {

    // Deleting the buttons prior to adding new buttons to the array
    // (this is necessary otherwise you will have repeat buttons)
    $("#game-buttons").empty();

    // Looping through the array of games
    for (var i = 0; i < videoGames.length; i++) {

      // Then dynamicaly generating buttons for each game in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding the bootstrap elements desired to the button
      a.addClass("btn btn-sm align-middle font-weight-bold m-1");
      // Adding a data-attribute
      a.attr("data-name", videoGames[i]);
      // Adding an ID
      a.attr("id", "game-btn")
      // Providing the initial button text
      a.text(videoGames[i]);
      // Adding the button to the buttons-view div
      $("#game-buttons").append(a);
    }
  }

      //Adding a button function
      $(document).on("click", "#add-button", function() {
        event.preventDefault();
        $("body").css({ 'background-color': "black" });
        $("body").css('background-image', 'none');
        // This line grabs the input from the textbox
        var game = $("#add-button-form").val().trim();
        $('#add-button-form').val('');
        // Adding game from the textbox to our array
        videoGames.push(game);
        // Calling renderButtons which handles the processing of our videoGame array
          renderButtons();
      });

      // Adding a click event listener to all elements with an id of "game-btn"
      $(document).on("click", "#game-btn", displayGameGifs);

      // Calling the renderButtons function to display the intial buttons
      $( document ).ready(function() {
        renderButtons();
      }); 

      $(document).on("click", "#gif", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });