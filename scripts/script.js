function generateAkanName() {
  document
    .getElementById("AkanForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const day = parseInt(document.getElementById("Day").value);
      const month = parseInt(document.getElementById("Month").value);
      const year = parseInt(document.getElementById("year").value);
      const gender = document.querySelector('input[name="Male"]:checked')
        ? "male"
        : "female";

      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();
      const maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame",
      ];
      const femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama",
      ];

      let akanName = "";

      if (gender === "male") {
        akanName = maleNames[dayOfWeek];
      } else if (gender === "female") {
        akanName = femaleNames[dayOfWeek];
      }

      alert("Your Akan name is: " + akanName);
    });
}

document.getElementById("AkanForm").addEventListener("submit", (e) => {
  e.preventDefault();
  generateAkanName();
});
