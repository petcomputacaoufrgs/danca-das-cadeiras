# index
# what do you need to know?
# npm stuff
# folder structure

# what do you need to know?
# 	front end:
		html
		css (bootstrap)
		javascript (jQuery)
# 	back end:
		javascript (MOAAARR!!)
		node.js (express and ejs)
		MongoDB (mongoose)

# npm stuff
Install package command:
npm install package_name --save

To start using install packages where:
	package_name = {
		express,
		body-parser,		
		ejs,
		mongoose,
		passport,
		passport-local,
		passport-local-mongoose			
	}


// see if any package needs update
npm outdated -g --depht=0


// to update all
npm update -g

else

npm update -g <package_name>

# folder structure

// folder structure
// we build this folder structure loosely upon MVC - movel view controller - model

main folder (folder that contains this Readme will be called '/' (root)

/app.js -> main file where server and routing is set up

/globals.js -> contains constants that might be used in various places, like which characters are allowed on the email, password and username, that are required both in the back and front end, so if you use this you won't have to change multiple places :D

/package.json -> contains which packages are installed in this version. 

/package-lock.json -> pretty much the same thing as package.json, but more detailed I think. I dont remember, It's been a while since I worked in this, should be easy to google it :b 

/views -> contains pages, assets and partials folders and .ejs (html) files that represents one full front end page

/views/assets -> contains css (for .css files) and scripts (for .js files)

/views/assets/css -> all styling files

/views/assets/scripts -> contains lib folder (utilitary functions) and fron end scripts (.js)

/views/partials -> contains .ejs or .html files: the purpose of this folder is to store files that will be included in other .ejs files using the command '<% include partials/partial_filename.html %>' from a page in the views folder. See login.ejs for an example

/node_modules -> npm package manager will automatically use this folder. Don't mess with it unless you know what you are doing

/models -> contains backend classes and similar stuff

models/utils -> functions for the back end. For example: contains validation function (sees if user data is of an accepted format) 

/controller -> empty as of right know.
