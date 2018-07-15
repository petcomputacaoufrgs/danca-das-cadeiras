# **Dança das Cadeiras**
The repo dedicated to the develpment of the "Dança das Cadeiras" project!\
It's currently being develped by a team from PET Computação UFRGS!\

Please if you have any questions just e-mail us @

	pet@inf.ufrgs.br

## *index*
- what do you need to know?
- npm - node package manager - stuff
- folder structure
- alive git branches
- contact information

# what do you need to know?
##	for anything:
- git version control (including dealing with merge conflicts)
- javascript
## 	front end:
- html
- css (bootstrap)
- jQuery (javascript library)
## 	back end:
- javascript (MOAAARR!!)
- node.js (express and ejs)
- MongoDB (mongoose)

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


See if any package needs update

	npm outdated -g --depht=0

- to update all

		npm update -g
- else

		npm update -g <package_name>

# **folder structure**

we build this folder structure loosely upon MVC - movel view controller - model

- /
	
	main folder (folder that contains this Readme will be called '/' (root)

- /app.js

	main file where server and routing is set up

- /globals.js 

	contains constants that might be used in various places, like which characters are allowed on the email, password and username, that are required both in the back and front end, so if you use this you won't have to change multiple places :D

- /package.json 

	contains which packages are installed in this version. 

- /package-lock.json 

	pretty much the same thing as package.json, but more detailed I think. I dont remember, It's been a while since I worked in this, should be easy to google it if you need to know :b 

- /views 

	contains pages, assets and partials folders and .ejs (html) files that represents one full front end page

- /views/assets 

	contains css (for .css files) and scripts (for .js files)

- /views/assets/css 

	all styling files

- /views/assets/scripts 

	contains lib folder (utilitary functions) and fron end scripts (.js)

- /views/partials 

	contains .ejs or .html files: the purpose of this folder is to store files that will be included in other .ejs files using the command '<% include partials/partial_filename.html %>' from a page in the views folder. See login.ejs for an example

- /node_modules 

	npm package manager will automatically use this folder. Don't mess with it unless you know what you are doing

- /models 

	contains backend classes and similar stuff

- /models/utils 

	functions for the back end. For example: contains validation function (sees if user data is of an accepted format) 

- /controller 

	empty as of right know.

# **alive git branches:**
## *master*
-> most of the work can be found here
## *disciplines-interface*
-> the part where you would be able to select disciplines is being worked here. try it with the checkout command and then use node app.js, go to localhost:500/test to see!. it has been merged with master already, but keep developing it here
##	*footer*
-> contains page footers. Will probably have conflicts when merging the the login.ejs, register.ejs and maybe other files. Be ready to deal with merge conflicts before merging
there might be others, I don't remember, but I took a look at the branches tree and it didn't seem like there were any

# contact information
	
if you have any doubts you can contact me directly through PETamigos, if you are from PET, or through email:

	pet@inf.ufrgs.br
	pedro.cardouzo@gmail.com

with the subject of "Dança Das Cadeiras"