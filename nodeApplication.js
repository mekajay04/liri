// Include the request npm package (Don't forget to run "npm install request" in this folder first!)

var fs = require("fs");
var stuffINeed = require("./keys.js");

var request = require("request");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

var client = new Twitter({
  consumer_key: stuffINeed.twitterKeys.consumer_key,
  consumer_secret: stuffINeed.twitterKeys.consumer_secret,
  access_token_key: stuffINeed.twitterKeys.access_token_key,
  access_token_secret: stuffINeed.twitterKeys.access_token_secret,
});

var params = {screen_name: "mekajay04"};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
	
search: function({ type: "Russ", query: 'My search query', limit: 20 }, callback);
// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

  	console.log(JSON.parse(body));
	    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});
	
	var spotify = new Spotify({
  id: meka.jay,
 secret: 31d39736a501418fae2181495b834058,
});
 
spotify.search ({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
  
});
	