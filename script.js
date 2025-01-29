function calculateAge() {
  let dobInput = document.getElementById("dob").value;

  if (dobInput === "") {
      alert("Please select your date of birth!");
      return;
  }

  let dob = new Date(dobInput);
  let today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  let monthDiff = today.getMonth() - dob.getMonth();
  let dayDiff = today.getDate() - dob.getDate();

  // Adjust age if birth month or day hasn't occurred yet
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }

  document.getElementById("result").innerText = `You are ${age} years old!`;
}
