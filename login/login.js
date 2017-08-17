// make a POST request with login information for the server
document.getElementById('login-button').addEventListener('click', function(){
	console.log('loggin user info:');
	console.log(document.getElementById('user-email').value);
	console.log(document.getElementById('user-password').value);
});
