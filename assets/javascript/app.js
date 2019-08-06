// giphy api key EZDTGbiqXXiqZl2mKgXw3iiXuNNZtQ3S

var videoGames = ["dota", "smash brothers", "goldeneye", "mario kart", "big buck hunter", 
                "counterstrike", "diablo", "soul calibur", "warcraft", "fifa", "doom"]

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    // Event listener for our cat-button
    $("#cat-button").on("click", function() {

        // Storing our giphy API URL for searching a given term
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=EZDTGbiqXXiqZl2mKgXw3iiXuNNZtQ3S&tag=cats";
  
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