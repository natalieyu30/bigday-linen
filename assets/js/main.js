/*=============== SHOW MENU ===============*/
const showMenu = (toggledId, navId) => {
  const toggle = document.getElementById(toggledId);
  const nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

// window.addEventListener("scroll", () => console.log(window.pageYOffset));

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scrollUp
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/*=============== CLEAR A FORM AFTER SUBMISSION ===============*/
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

/*=============== GET DAY OF THE WEEK / RESPONSE TO WINDOW ===============*/
// const days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
const openingHour = [
  { day: "Sun.", hour: "Closed" },
  { day: "Mon.", hour: "09:00 a.m. – 03:00 p.m." },
  { day: "Tue.", hour: "09:00 a.m. – 03:00 p.m." },
  { day: "Wed.", hour: "Closed" },
  { day: "Thu.", hour: "09:00 a.m. – 03:00 p.m." },
  { day: "Fri.", hour: "09:00 a.m. – 03:00 p.m." },
  { day: "Sat.", hour: "Closed" },
];
// const now = new Date();

const days = document.querySelectorAll(".day");

const today = openingHour[new Date().getDay()].day;
const openHour = openingHour[new Date().getDay()].hour;

const getTodayOpen = (todayId) => {
  const today = document.getElementById(todayId);
  if (openHour != "Closed") {
    today.innerText = `Today (Open) : ${openHour}`;
  } else {
    today.innerText = `Today (Closed)`;
  }
};

// getTodayOpen("today");

days.forEach((d) => {
  if (d.innerHTML === today) {
    d.parentElement.innerHTML = `
      <tr>
        <td class="day"><b>${today}</b></td>
        <td class="hour"><b>${openHour}</b></td>
      </tr>
    `;
  }
});

/*=============== DARK LIGHT THEME ===============*/
