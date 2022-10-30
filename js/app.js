//getting navbar
const navBarList = document.querySelector("#navbar__list");

//Create an array of nav links
const lists = ["About Me", "My Stack", "My Porjects", "My Socials"];

//get all sections
const sections = document.querySelectorAll("section");

// build the nav
function buildNav() {
  //iterate over them and append it to navbar
  for (let i = 0; i < lists.length; i++) {
    const listElement = document.createElement("li");
    listElement.innerHTML = `<a navElement="section${
      i + 1
    }" class="menu__link">${lists[i]}</a>`;
    //add event listener to li childeren which is anchorTag
    listElement.addEventListener("click", () => {
      //call the function and pass it the child element (anchorTag)
      navigateToSection(listElement.children[0]);
    });
    navBarList.appendChild(listElement);
  }
}

function activeSection(sections) {
  for (const section of sections) {
    //get the position of each section
    const inView = section.getBoundingClientRect();

    if (
      inView.top >= 0 &&
      inView.left >= 0 &&
      inView.bottom <= window.innerHeight &&
      inView.right <= window.innerWidth
    ) {
      section.classList.add("your-active-class");
      const currentSection = section.getAttribute("id");
      //get all li elements and its childs
      const navElements = navBarList.childNodes;
      //iterate overthem

      for (const element of navElements) {
        if (
          element.childNodes[0].getAttribute("navElement") == currentSection
        ) {
          element.childNodes[0].classList.add("element__active");
        } else {
          element.childNodes[0].classList.remove("element__active");
        }
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

//scroll event to the whole document so whenever the document is scrolled the function is called
document.addEventListener("scroll", () => {
  activeSection(sections);
});

//activate hamburger
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const navBar = document.querySelector("#navbar__list");
  navBar.classList.toggle("active");
});

// Build menu
buildNav();

// Scroll to anchor ID using scrollIntoView event

function navigateToSection(element) {
  //get the attribute value
  const elementSection = element.getAttribute("navElement");

  //checking whether it is empty or not
  if (elementSection != null) {
    //get its corresponding section
    const section = document.querySelector(`#${elementSection}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }
}
