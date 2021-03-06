var express 		  = require("express"),
app 				  = express(),
bodyParser 			  = require("body-parser");//,
//mongoose 			  = require("mongoose"),
//passport 			  = require("passport"),
//passportLocal 		  = require("passport-local"),
//passportLocalMongoose = require("passport-local-mongoose");


// utils
var validation = require("./models/utils/validation.js");


// globals
var globals = require("./globals.js");

var Course = require("./models/Course");


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
	var login = req.body.login; // .rememberMe is "on" if box was checked, undefined otherwise

	console.log(login);
	res.send("heyyy");
});

app.get('/register', function(req, res){
	res.render("register", {AllowedCharacters:globals.AllowedCharacters, Courses:globals.Courses});
});


app.post('/register', function(req, res){
	var registerData = req.body.registerData;
	
	if(validation.validateAllInputs(registerData)){
		console.log("Valid input");
		console.log(registerData);
		//register on the backend
	}else{
		console.log("Invalid input");
		console.log(registerData);
		//redirect to a "invalid information page"
	}

	res.redirect("/");
});


app.get("/forgot_password", function(req, res){
	
});


app.post("/forgot_password", function(req, res){
	var email = req.body.email;

});


app.get('/test', function(req, res){
	res.render("partials/discipline_selector");
});

app.get('/course/:id', function(req, res){
	var course = new Course();
	// here will be a database function that given the name of a course 
	// (must be the same as the pattern in the backend) returns the whole course
	course.fetchData("Ciência da Computação");

	res.send(course.createInterfaceCourse());


});


app.get("*", function(req, res){
	// do some funny image
	res.send("This page doesn't exists!!!!!11!!11");
});

app.listen(5000, 'localhost', function() {
	console.log("Server Online");
});