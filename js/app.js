/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

//getting navbar
const navBarList = document.querySelector("#navbar__list");

//Create an array of nav links
const lists = ["About Me", "My Stack", "My Porjects", "My Socials"];

//get all sections
const section = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  //iterate over them and append it to navbar
  for (let i = 0; i < lists.length; i++) {
    const listElement = document.createElement("li");
    listElement.innerHTML = `<li><a data-nav="section${
      i + 1
    }" class="menu__link">${lists[i]}</a>`;

    navBarList.appendChild(listElement);
  }
}

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function (event) {
  section.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= 0 &&
      section.getBoundingClientRect().top <= 700
    ) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

//activate hamburger
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const navBar = document.querySelector("#navbar__list");
  navBar.classList.toggle("active");
});

// Build menu
buildNav();

// Scroll to section on link click
const aboutMe = document.querySelector("li");
const sections = document.querySelectorAll("section");

navBarList.addEventListener("click", function (event) {
  //get element clicked and navigate to its section
  //accessing data using dataset object
  if (event.target.dataset.nav) {
    document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({
      behavior: "smooth",
      //vertical alignment
      block: "end",
    });
  }
});
