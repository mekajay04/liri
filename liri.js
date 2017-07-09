

var fs = require("fs");
var stuffINeed = require("./keys.js");

var request = require("request");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

var command = process.argv[2];

// Twitter

if (command === 'my-tweets') {


	var client = new twitter({
		consumer_key: stuffINeed.twitterKeys.consumer_key,
		consumer_secret: stuffINeed.twitterKeys.consumer_secret,
		access_token_key: stuffINeed.twitterKeys.access_token_key,
		access_token_secret: stuffINeed.twitterKeys.access_token_secret,
	});

	client.get('statuses/user_timeline', function (error, tweets, response) {
		
		if (error) throw error;
		//	  console.log(tweets);  // The favorites. 

		for (var j = 0; j < tweets.length && j < 20; j++) {
			console.log(tweets[j].created_at);
			console.log(tweets[j].text);
		}
		//	  
	});
}




///////////////////////OMDB///////////////////
if (command === 'movie-this') {
	// Then run a request to the OMDB API with the movie specified
	request("http://www.omdbapi.com/?t=taken&y=&plot=short&apikey=40e9cece", function (error, response, body) {

		// If the request is successful (i.e. if the response status code is 200)
		"use strict";
		if (!error && response.statusCode === 200) {

			console.log(JSON.parse(body));
			// Parse the body of the site and recover just the imdbRating
			// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
			console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
			console.log("The movie's plot is: " + JSON.parse(body).imdbPlot);
		}
	});
}


//////////////////////SPOTIFY///////////////////
	if (command === 'spotify-this-song') {


	
	var spotify = new spotify({
		id: '6ccd5ef5e79747a393b13599f0449b44',
		secret: '31d39736a501418fae2181495b834058',
	});
	// 
	spotify
		.search({
			type: 'track',
			query: 'Cherry Hill'
		})
		.then(function (response) {
			"use strict";
			console.log(response.tracks.items);

		})
		.catch(function (err) {
			"use strict";
			console.log(err);
		});


}