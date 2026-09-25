/* =========================================================
   NITHIYA PORTFOLIO - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SIDE MENU
       ===================================================== */

    const menuButton = document.querySelector(".menu-button");
    const sideMenu = document.querySelector(".side-menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuLinks = document.querySelectorAll(".side-menu a");

    function openMenu() {
        if (sideMenu) sideMenu.classList.add("active");
        if (menuOverlay) menuOverlay.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        if (sideMenu) sideMenu.classList.remove("active");
        if (menuOverlay) menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            if (sideMenu && sideMenu.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeMenu);
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });


    /* =====================================================
       ESC KEY - CLOSE MENU / MODALS
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
            closeProjectModal();
            closeCertificateModal();
        }

    });


    /* =====================================================
       SMOOTH SCROLLING
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =====================================================
       PROFILE IMAGE CLICK EFFECT
       ===================================================== */

    const profileImage = document.querySelector(".profile-image");

    if (profileImage) {

        profileImage.addEventListener("click", () => {

            profileImage.classList.toggle("active");

        });

    }


    /* =====================================================
       CURRENT SECTION HIGHLIGHT
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(
        '.side-menu a[href^="#"]'
    );

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                currentSection &&
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();

});
/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

    {
        title: "Solar Powered Wireless Charging Road for EV",

        description:
            "A smart road concept that uses solar energy and wireless charging technology to support electric vehicle charging while travelling.",

        technologies: [
            "Solar Energy",
            "Wireless Charging",
            "Electric Vehicles"
        ],

        document:
            "assets/documents/solar-project.pptx"
    },

    {
        title:
            "Camera-Free Intelligent Human Activity Detection Using Ultrasonic Sensing",

        description:
            "An intelligent activity detection system using ultrasonic sensing without depending on cameras.",

        technologies: [
            "Arduino",
            "Ultrasonic Sensor",
            "Internet of Things",
            "Machine Learning"
        ],

        document:
            "assets/documents/human-activity-detection.pptx"
    },

    {
        title: "Hangman",

        description:
            "A browser-based Hangman game developed using front-end web technologies.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        document:
            "assets/documents/hangman.pdf"
    },

    {
        title: "Tic-Tac-Toe",

        description:
            "An interactive Tic-Tac-Toe game developed using HTML, CSS and JavaScript.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        document:
            "assets/documents/tictactoe.pdf",

        website:
            "https://nithiya1409.github.io/Tic-tac-toe-/"
    },

    {
        title: "CGPA Calculator",

        description:
            "An academic utility designed to calculate CGPA using subject and grade information.",

        technologies: [
            "Programming",
            "Calculation Logic",
            "Academic Utility"
        ],

        document:
            "assets/documents/cgpa-calculator-srs.pdf"
    }

];


/* =========================================================
   PROJECT MODAL ELEMENTS
   ========================================================= */

const projectModal =
    document.querySelector(".project-modal");

const projectModalTitle =
    document.querySelector(".project-modal-title");

const projectModalDescription =
    document.querySelector(".project-modal-description");

const projectModalTechnologies =
    document.querySelector(".project-modal-technologies");

const projectModalDocument =
    document.querySelector(".project-modal-document");

const projectModalWebsite =
    document.querySelector(".project-modal-website");

const projectModalClose =
    document.querySelector(".project-modal-close");


/* =========================================================
   OPEN PROJECT MODAL
   ========================================================= */

function openProjectModal(index) {

    const project = projects[index];

    if (!project || !projectModal) {
        return;
    }

    if (projectModalTitle) {
        projectModalTitle.textContent = project.title;
    }

    if (projectModalDescription) {
        projectModalDescription.textContent =
            project.description;
    }


    /* Technologies */

    if (projectModalTechnologies) {

        projectModalTechnologies.innerHTML = "";

        project.technologies.forEach(technology => {

            const technologyElement =
                document.createElement("span");

            technologyElement.textContent =
                technology;

            projectModalTechnologies.appendChild(
                technologyElement
            );

        });

    }


    /* Document */

    if (projectModalDocument) {

        if (project.document) {

            projectModalDocument.href =
                project.document;

            projectModalDocument.style.display =
                "inline-flex";

        } else {

            projectModalDocument.style.display =
                "none";

        }

    }


    /* Website */

    if (projectModalWebsite) {

        if (project.website) {

            projectModalWebsite.href =
                project.website;

            projectModalWebsite.target =
                "_blank";

            projectModalWebsite.rel =
                "noopener noreferrer";

            projectModalWebsite.style.display =
                "inline-flex";

        } else {

            projectModalWebsite.style.display =
                "none";

        }

    }


    projectModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE PROJECT MODAL
   ========================================================= */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* Close when clicking outside modal */

if (projectModal) {

    projectModal.addEventListener("click", event => {

        if (event.target === projectModal) {
            closeProjectModal();
        }

    });

}


/* =========================================================
   PROJECT BUTTONS / CARDS
   ========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        openProjectModal(index);

    });

    card.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openProjectModal(index);

        }

    });

});
/* =========================================================
   CERTIFICATE MODAL
   ========================================================= */

const certificateModal =
    document.querySelector(".certificate-modal");

const certificateImage =
    document.querySelector(".certificate-modal img");

const certificateClose =
    document.querySelector(".certificate-modal-close");


/* =========================================================
   OPEN CERTIFICATE
   ========================================================= */

function openCertificateModal() {

    if (!certificateModal) {
        return;
    }

    certificateModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE CERTIFICATE
   ========================================================= */

function closeCertificateModal() {

    if (!certificateModal) {
        return;
    }

    certificateModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


if (certificateClose) {

    certificateClose.addEventListener(
        "click",
        closeCertificateModal
    );

}


if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        event => {

            if (event.target === certificateModal) {
                closeCertificateModal();
            }

        }
    );

}


/* =========================================================
   CERTIFICATE BUTTONS
   ========================================================= */

const certificateButtons =
    document.querySelectorAll(
        ".certificate-button, .view-certificate"
    );

certificateButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        openCertificateModal();

    });

});


/* =========================================================
   SCROLL REVEAL EFFECT
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".section, .skill-box, .project-card, " +
    ".achievement-box, .academic-card, " +
    ".goal-box, .creative-box, .resume-box, " +
    ".contact-form, .contact-link"
);


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        const submitButton =
            contactForm.querySelector(
                'button[type="submit"]'
            );

        if (submitButton) {

            submitButton.disabled = true;

            submitButton.textContent =
                "Sending...";

        }

    });

}


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.classList.add("image-error");

    });

});


/* =========================================================
   PAGE LOAD
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});


/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTop =
    document.querySelector(".back-to-top");

if (backToTop) {

    backToTop.addEventListener("click", event => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   PREVENT MODAL SCROLL
   ========================================================= */

window.addEventListener("wheel", event => {

    if (
        document.body.classList.contains(
            "modal-open"
        )
    ) {

        const activeModal =
            document.querySelector(
                ".project-modal.active, .certificate-modal.active"
            );

        if (
            activeModal &&
            !activeModal.contains(event.target)
        ) {
            event.preventDefault();
        }

    }

}, { passive: false });


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Nithiya Portfolio loaded successfully."
);
