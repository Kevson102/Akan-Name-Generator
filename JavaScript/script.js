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
  var nameNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // With all the variables that we need, we can now write the formula for calculating the day of the week
  var dayOfWeek = (((century/4)-2*century-1)+((5-year/4))+((26*(month+1)/10))+date) % 7;
  // since the day of week cannot be a decimal, we round down any decimal number to the nearest whole number.
  var dayOfWeek = Math.floor(dayOfWeek);
}

( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )