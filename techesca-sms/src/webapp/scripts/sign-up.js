	function validate() 
	{
	
		//validate password match
		var pass1 = document.getElementById("password").value;
		var pass2 = document.getElementById("confpass").value;
		var ok = true;
		if (pass1 != pass2)
		{
			alert("Passwords Do not match!");
			document.getElementById("password").style.borderColor = "#E34234";
			document.getElementById("confpass").style.borderColor = "#E34234";
			ok = false;
		}
		else 
		{
			ok = true;
		}
		return ok;

		
		//validate first name field
		var firstName = document.getElementById("fname").value;
		var pattern = /^[A-Za-z]+$/;
		var fNameOk = true;
		if(firstName.match(pattern))
		{
			fNameOk = true;
		}
		else
		{
			alert('First Name can contain only alphabets!');
			fNameOk = false;
		}
		return fNameOk;
		
		
		//validate contact number
		var contactNum = document.getElementById("contact").value;
		var contactOk = true;
		if(isNAN(contactNum)) 
		{
			alert("Please enter only digits in the \"contact\" field.");
			contactOk = false;
		}
		else
		{
			contactOk = true;
		}
		return contactOk;

	}
	
	
		/*
		
		//validate password length
		if (form1.password.value.length < 5) 
		{
			alert("Please enter at least 5 characters in the \"Password\" field.");
			form1.password.focus();
			return (false);
		}
		
		//validate email address, must have @ and .
		var checkEmail = "@.";
		var checkStr = theForm.Email.value;
		var EmailValid = false;
		var EmailAt = false;
		var EmailPeriod = false;

		for (i = 0;  i < checkStr.length;  i++) 
		{
			ch = checkStr.charAt(i);
			for (j = 0;  j < checkEmail.length;  j++) 
			{
				if (ch == checkEmail.charAt(j) && ch == "@")
					EmailAt = true;
				if (ch == checkEmail.charAt(j) && ch == ".")
					EmailPeriod = true;
				if (EmailAt && EmailPeriod)
					break;
				if (j == checkEmail.length)
					break;
			}

			//validate if both the @ and . are in the string

			if (EmailAt && EmailPeriod) 
			{
				EmailValid = true
				break;
			}
		}

		
		if (!EmailValid) 
		{
			alert("The \"email\" field must contain an \"@\" and a \".\".");
			form1.email.focus();
			return (false);
		}
		
		//validate name
		var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		var checkStr = form1.fname.value;
		var allValid = true;

		for (i = 0;  i < checkStr.length;  i++) 
		{
			ch = checkStr.charAt(i);
			for (j = 0;  j < checkOK.length;  j++)
			if (ch == checkOK.charAt(j))
				break;
			if (j == checkOK.length) 
			{
				allValid = false;
				break;
			}
		}

		if (!allValid)
		{
			alert("Please enter only letter and numeric characters in the \"name\" field.");
			form1.fname.focus();
			return (false);
		}
		*/