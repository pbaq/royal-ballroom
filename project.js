// GENERAL
function changeFontSize(newSize) {
	if (newSize > 9 && newSize < 31) {
		var pageContent = document.getElementsByClassName('page-content')[0];
		pageContent.style.fontSize = newSize + 'pt';
		changeNavFontSize(newSize);
		changeInputFontSize(pageContent, newSize);
		
	} else {
		alert('Text size must be between 10 and 30');
	}
}


// RESGISTER
function toggleCardInfo(show) {
	if (show) {
		document.getElementById('cardInfo').style.display = 'block';
	} else {
		document.getElementById('cardInfo').style.display = 'none';
	}
}

function updatePrice() {
	var form = document.getElementById('registerForm');
	var weeksPayed = 1;
	var classPrice = 15;
	if (form.typeofclass.value === "individual") {
		classPrice = 20;
	}
	if (form.paymentTime.value === "perMonth") {
		weeksPayed = 4;
	}
	var price = weeksPayed * classPrice;
	var priceLabel = document.getElementById('totalPrice');
	priceLabel.value = price;
	priceLabel.innerHTML = price;
}

// Form Validation
function validateAll(form) {
	return (validateNames(form.firstname.value, form.surname.value)
	&& validateContact(form.phone.value, form.email.value)
	&& validateBirth(parseInt(form.dayBirth.value), parseInt(form.monthBirth.value), parseInt(form.yearBirth.value))
	&& validateCard(form.payment.value === "online", form.cardnumber.value, form.monthExp.value, form.yearExp.value, form.secCode.value));
}

function validateNames(first, sur) {
	if (first.length <= 0) {
		alert('First name must be provided.');
	} else if (sur.length <= 0) {
		alert('Surname must be provided.');
	} else {
		return true;
	}
	return false;
}

function validateContact(phone, email) {
	var validatePhone = false;
	var validateEmail = false;
	if (phone.length > 7) {
		validatePhone = true;
	} 
	var indexOfAt = email.indexOf('@');
	if (email.length > 4 && indexOfAt >= 1 && email.indexOf('.') > indexOfAt + 1) {
		validateEmail = true;
	}
	if (validatePhone || validateEmail) {
		return true;
	} else {
		alert('Either a valid phone number of a valid email must be provided.');
		return false;
	}
}

function validateBirth(day, month, year) {
	var date = new Date();
	var age = date.getFullYear() - year;
	if (day < 1 || day > 31) {
		alert('Invalid day of birth.');
	} else if (month < 1 || month > 12) {
		alert('Invalid month of birth.');
	} else if (age < 75) {
		alert('You must be over 75 to participate in our classes.')
	} else {
		return true;
	}
	return false;
}

function validateCard(payOnline, cardNumber, month, year, secCode) {
	if (payOnline) {
		var date = new Date();
		var code = parseInt(secCode);
		if (cardNumber.length < 16) {
			alert('Invalid card number');
		} else if (month < 1 || month > 12) {
			alert('Invalid month of card expiration.');
		} else if (year < date.getFullYear()) {
			alert('Card has expired.');
		} else if (code != secCode || secCode.length !== 3) {
			alert('Invalid security code');
		} else {
			return true;
		}
		return false;
	}
	return true;	
}

// GENERAL
function changeNavFontSize(newSize) {
	var size = parseInt(newSize) + 1;
	var leftNav = document.getElementsByClassName('left-nav')[0];
	if (leftNav) {
		leftNav.style.fontSize = size + 'pt';
	}
	var navContent = document.getElementsByClassName('nav');
	for (i = 0; i < navContent.length; i++) {
		navContent[i].style.fontSize = size + 'pt';
	}
}

function changeInputFontSize(pageContent, newSize) {
	var inputs = pageContent.getElementsByTagName('input');
	for(i = 0; i < inputs.length; i++) {
		inputs[i].style.fontSize = newSize + 'pt';
	}
	var textAreas = pageContent.getElementsByTagName('textarea');
	for(j = 0; j < textAreas.length; j++) {
		textAreas[j].style.fontSize = newSize + 'pt';
	}
}