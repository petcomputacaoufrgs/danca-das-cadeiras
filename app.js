var express 		  = require("express"),
app 				  = express(),
bodyParser 			  = require("body-parser"),
mongoose 			  = require("mongoose"),
passport 			  = require("passport"),
passportLocal 		  = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose");


app.use(bodyParser.urlencoded({extended: true}));

// tells express to look for things in the public folder aswell
// by default it will only look at the views folder
app.use(express.static("views/assets/")); 

// tells express to expect .ejs as default files on .render() and paths, unless otherwise specified;
app.set("view engine", "ejs");


app.get('/', function(req, res){
	res.render("login");
});

app.post('/login', function(req, res){
	var email = req.body.email; 
	var password = req.body.password;
	var rememberMe = req.body.rememberMe; // "on" if box was checked, undefined otherwise

	console.log("Email: " + email); // of course this is not staying
	console.log("Password: " + password); // of course this is not staying
	console.log("RM: " + rememberMe); // of course this is not staying
	res.send("heyyy");
});

app.get('/register', function(req, res){
	res.render("register");
});

app.post('/register', function(req, res){
	var name = req.body.username,
		email = req.body.email,
		password = req.body.password,
		course = req.body.course,
		internship = req.body.internship;
	
	console.log("name: " + name);
	console.log("email: " + email);
	console.log("password: " + password);
	console.log("course: " + course);
	console.log("internship: " + internship);	

	res.redirect("/");
});

app.get("/forgot_password", function(req, res){
	
});


app.post("/forgot_password", function(req, res){
	var email = req.body.email;

});










app.get("*", function(req, res){
	// do some funny image
	res.send("This page doesn't exists!!!!!11!!11");
});

app.listen(5000, 'localhost', function() {
	console.log("Server Online");
});