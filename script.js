/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   THREE-DOT MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        navMenu.classList.toggle("active");

    });

}


/* =========================================================
   CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

    });

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    if (
        navMenu &&
        menuBtn &&
        !navMenu.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {

        navMenu.classList.remove("active");

    }

});


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {

            return;

        }


        const targetElement =
            document.querySelector(targetId);


        if (targetElement) {

            event.preventDefault();


            const header =
                document.querySelector(".header");


            const headerHeight =
                header ? header.offsetHeight : 0;


            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   ESCAPE KEY CLOSES MENU
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

    }

});


/* =========================================================
   PREVENT BROKEN EMPTY PROJECT LINKS
========================================================= */

document.querySelectorAll('.project-btn[href="#"]').forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

    });

});


/* =========================================================
   PAGE LOADED
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("loaded");

});
