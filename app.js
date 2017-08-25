var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	passport 	= require("passport");


var __viewsdir = __dirname + "/views/";

app.use(bodyParser.urlencoded({extended: true}));

// tells express to look for things in the public folder aswell
// by default it will only look at the views folder
app.use(express.static( __viewsdir + "assets/")); 

// tells express to expect .ejs as default files on .render() and paths, unless otherwise specified;
app.set("view engine", "ejs");


app.get('/', function(req, res){
	res.render("login");
});

app.get('/register', function(req, res){
	res.render("register");
});

app.get("*", function(req, res){
	// do some funny image
	res.send("This page doesn't exists!!!!!11!!11");
});

app.listen(5000, 'localhost', function() {
	console.log("Server Online");
});