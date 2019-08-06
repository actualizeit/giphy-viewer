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