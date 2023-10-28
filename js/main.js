const navEl = document.querySelector(".nav");
const hamEl = document.querySelector(".hamburger");

// existing event listener for the hamburger
hamEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamEl.classList.toggle("hamburger--open");
});

// existing event listener for the nav
navEl.addEventListener("click", () => {
  navEl.classList.remove("nav--open");
  hamEl.classList.remove("hamburger--open");
});

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "nav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "nav";
  }
}