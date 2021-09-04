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


  
}

( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )