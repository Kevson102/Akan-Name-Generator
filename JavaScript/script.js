function akanGenerator (){
  // We begin by collecting the form inputs.

  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;

  var genders = document.getElementById('gender');
  var gender = genders.options[genders.selectedIndex].text;

  // from the collected data, we extract the values required by the formula.
  var century = yearOfBirth.slice(0,2);
  var year = yearOfBirth.slice(2,4);
  // The month and the date require no modification.

  // We now create arrays to hold the male Akan names and the female Akan names.
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // With all the variables that we need, we can now write the formula for calculating the day of the week
  var calculation1 = Math.floor(century/4);
  var calculation2 = Math.floor(2*century-1);
  var summation1 = calculation1 +calculation2;
  var calculation3 = Math.floor(5*year/4);
  var calculation4 = Math.floor(26*(month+1)/10);
  var dayOfWeek = (summation1 + calculation3 +calculation4 +date) % 7;
  // var dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+date) % 7;
  // since the day of week cannot be a decimal, we round down any decimal number to the nearest whole number.
  // var dayOfWeek = Math.floor(dayOfWeek);

  // Since the Akan names are given based on gender, we create a control flow.
  if (gender === "Male"){
    document.getElementById('output').innerHTML = "Since you are "+ gender+" and you were born on "+weekDays[dayOfWeek]+", your Akan name is "+maleNames[dayOfWeek]+".";
  } else {
    document.getElementById('output').innerHTML = "Since you are "+ gender+" and you were born on "+weekDays[dayOfWeek]+", your Akan name is "+femaleNames[dayOfWeek]+".";
  }
}