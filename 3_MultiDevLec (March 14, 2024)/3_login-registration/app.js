// For the title
const title = document.querySelector('#title');
// For reg form
const regForm = document.querySelector('.regForm');

// For reg form fields
const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');

// For login form
const logForm = document.querySelector('.logForm');

// For login form fields
const username = document.getElementById('username');
const password = document.getElementById('password');

// For username and passwords
const usernameAndPasswords = {}

// For getting the date and time today
const time = new Date().toLocaleString();

// For checking if a username already exists
function checkIfUserExists(username, usernameAndPasswords) {
	if (usernameAndPasswords.hasOwnProperty(username)) {
		return true
	}
}

// For validating username and passwords stored 
function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
	if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
		return true;
	}
}

regForm.addEventListener('submit', function (e) {
	e.preventDefault();

	// Validate if one of the fields are empty
	if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
		alert("Fill out all the forms first");
	}

	// Store username and password to JS object
	else {
		if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
			alert('Username is already taken');
		}
		else {

			// Store the username and passwords inside the JavaScript Object 
			usernameAndPasswords[usernameReg.value] = passwordReg.value;
			console.log(usernameAndPasswords);

			// Display the login form and get rid of the registration form on the page
			logForm.style.display = "block";
			regForm.style.display = "none";

		}
	}

})

logForm.addEventListener('submit', function (e) {

	// Passing username and password to the function
	if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

		// Hide the login form and title after user has been validated
		logForm.style.display = "none";
		title.style.display = "none";

		// Greet user who just logged in
		document.querySelector('.welcomePanel #greeting').innerHTML = "Good day! " + username.value + ". It's currently " + time;
	}
	else {

		// Login invalid
		alert("Username and password don't exist");

	}

})