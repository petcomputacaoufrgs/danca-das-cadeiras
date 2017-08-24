// test
document.querySelector('form').addEventListener('submit', function(event){
	var email = document.querySelector('#user-email').value;
	var isGoogle = email.slice(email.indexOf('@')+1) === 'gmail.com';
	if(isGoogle){
		document.querySelector('#user-email + div').style.display = 'none';	
	}else{
		document.querySelector('#user-email + div').style.display = 'block';
		event.preventDefault();
	    event.stopPropagation();
	}
});

// window.addEventListener('load', function{
// 	var form = document.querySelector('form');
// 	form.addEventListener('submit', function(event){
// 		if (form.checkValidity() == false) {
// 	        event.preventDefault();
// 	        event.stopPropagation();
// 	     }
// 	}, false);
// }, false);