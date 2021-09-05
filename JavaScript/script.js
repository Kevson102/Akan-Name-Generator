function akanGenerator (){
  // We begin by collecting the form inputs.

  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;

  var genders = document.getElementById('gender');
  var gender = genders.options[genders.selectedIndex].text;

  // from the collected data, we extract the values required by the formula.
  var century = parseInt(yearOfBirth.slice(0,2));
  var year = parseInt(yearOfBirth.slice(2,4));
  var date = parseInt(date);
  var month = parseInt(month);
  // The month and the date require no modification.

  // We now create arrays to hold the male Akan names and the female Akan names.
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // With all the variables that we need, we can now write the formula for calculating the day of the week
  var centuryValue;
  if (yearOfBirth>=1700 && yearOfBirth<=1799){
    centuryValue = 4
  } else if (yearOfBirth>=1800 && yearOfBirth<=1899){
    centuryValue = 2
  } else if (yearOfBirth>=1900 && yearOfBirth<=1999){
    centuryValue = 0
  } else if (yearOfBirth>=2000 && yearOfBirth<=2099){
    centuryValue = 6
  }
  dayOfWeek = (year + (Math.floor(year/4)) +date + month + centuryValue)%7;

  if (gender === "Male"){
    document.getElementById('output').innerHTML = "Since you are "+ gender+" and you were born on "+weekDays[dayOfWeek]+", your Akan name is "+maleNames[dayOfWeek]+".";
  } else {
    document.getElementById('output').innerHTML = "Since you are "+ gender+" and you were born on "+weekDays[dayOfWeek]+", your Akan name is "+femaleNames[dayOfWeek]+".";
  }
}
function resetForm() {
  document.getElementById ('output').innerHTML = "Your Akan name will display here";
  // console.clear();
}