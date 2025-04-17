const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav_ul"); // Use the correct ID

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active"); // This will show/hide the 
});


fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    console.log("Navbar loaded successfully!");

    setTimeout(() => {
      const menuToggle = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector("#nav_ul");

      if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      } else {
        console.error("Menu elements not found!");
      }
    }, 100);
  })
  .catch(error => console.error("Error loading navbar:", error));