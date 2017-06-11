var Twit = require('twit')
var express=require('express');
var request = require('request');
var router = express.Router();
var cors = require('cors'); 

var T = new Twit({
  consumer_key:         'zkajjNReeAMWwVgp1FSHAT2cK',
  consumer_secret:      'Djv3mm2JSEL9Omc3hq78zk8YSGr8cglGAl9UIX58vu0CYosAaF',
  access_token:         '806386679598710784-AGi1WKa3HqBg0pC19K6QlkKQL9BRYLB',
  access_token_secret:  'KHB3V08pFYfg3fU2Fawr0qspQoXaODWFWoSXMmb6V7nTO',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

var app = express();
app.use(cors());  
//Setup rotuing for app
app.use(express.static(__dirname + '/public'));

var jsonData=[];

app.get('/tweetsGet',function(req,res){

	console.log("i was called Hurray");
	var resData=jsonData;
	jsonData=[];
	return res.json(resData);
	// res.send(JSON.stringify(resData));
	console.log( "coming after return also weird" + resData);

});


console.log("Streaming Live Twitter Feeds...");

var stream = T.stream('statuses/filter',{ locations : [-180,-90,180,90] , language: 'en' } )
stream.on('tweet', function (tweet) {

	if(jsonData.length >=200)
		jsonData=[];


	console.log('.');

	if( tweet.place != null )
	  	if( tweet.place.hasOwnProperty('bounding_box') )
	  		if( tweet.place.bounding_box.coordinates !== null )
	  			if(  tweet.place.hasOwnProperty('full_name') )
	  				if( tweet.hasOwnProperty('user') )
	  					if( tweet.user.hasOwnProperty('profile_image_url') )  						
	  						if( tweet.hasOwnProperty('text') )
	  							if( tweet.hasOwnProperty('source') ){
									  jsonData.push(
									  {
									  	"coordinates" : tweet.place.bounding_box.coordinates ,
									  	"place_name" : tweet.place.full_name ,
									  	"profile_image_url" : tweet.user.profile_image_url,
									  	"text" : tweet.text,
									  	"source" : tweet.source 
									  }
									  	);
	  					  console.log(tweet);

	  							}


});

app.listen(process.env.PORT || 5000  , function () {
	console.log('example app listening on port 30	00!');
});