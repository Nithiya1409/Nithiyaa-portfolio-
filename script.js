
/* =====================================================
   PORTFOLIO JAVASCRIPT
   NITHIYA SREE R
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

const profileImageBox = document.getElementById("profileImageBox");
const profileModal = document.getElementById("profileModal");
const profileModalClose = document.getElementById("profileModalClose");

const projectModal = document.getElementById("projectModal");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalContent = document.getElementById("projectModalContent");

const projectsGrid = document.getElementById("projectsGrid");

const yearElement = document.getElementById("year");


/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [

    {
        number: "PROJECT 1",

        title: "Solar Powered Wireless Charging Road for EV",

        description:
            "A concept based on solar-powered wireless charging infrastructure designed to support electric vehicles while they travel on specially designed charging roads.",

        technology:
            "Solar Energy • Wireless Charging • Electric Vehicles",

        document:
            "assets/documents/solar-project.pptx"
    },


    {
        number: "PROJECT 2",

        title:
            "Camera-Free Intelligent Human Activity Detection Using Ultrasonic Sensing",

        description:
            "A camera-free sensing system that uses ultrasonic sensing to detect human presence and activity while providing a privacy-aware approach to monitoring.",

        technology:
            "Arduino • Ultrasonic Sensor • Internet of Things (IoT) • Machine Learning",

        document:
            "assets/documents/human-activity-detection.pptx"
    },


    {
        number: "PROJECT 3",

        title: "Hangman",

        description:
            "An interactive word-guessing game where the player attempts to identify the hidden word before the allowed number of incorrect guesses is reached.",

        technology:
            "HTML • CSS • JavaScript",

        document:
            "assets/documents/hangman.pdf"
    },


    {
        number: "PROJECT 4",

        title: "Tic-Tac-Toe",

        description:
            "An interactive Tic-Tac-Toe game designed with a simple interface and responsive gameplay for two players.",

        technology:
            "HTML • CSS • JavaScript",

        document:
            "assets/documents/tictactoe.pdf",

        website:
            "https://nithiya1409.github.io/Tic-tac-toe-/"
    },


    {
        number: "PROJECT 5",

        title: "CGPA Calculator",

        description:
            "A CGPA calculation system designed to calculate academic performance based on subjects, credits and grade points.",

        technology:
            "Programming • Calculation Logic • Academic Utility",

        document:
            "assets/documents/cgpa-calculator-srs.pdf"
    }

];


/* =====================================================
   MENU
===================================================== */

function openMenu() {

    if (!sideMenu || !menuOverlay) {
        return;
    }

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    if (menuButton) {
        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }
}


function closeNavigationMenu() {

    if (!sideMenu || !menuOverlay) {
        return;
    }

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    if (menuButton) {
        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        openMenu
    );

}


if (closeMenu) {

    closeMenu.addEventListener(
        "click",
        closeNavigationMenu
    );

}


if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        closeNavigationMenu
    );

}


/* =====================================================
   CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
===================================================== */

const navigationLinks =
    document.querySelectorAll(".side-menu nav a");


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        closeNavigationMenu
    );

});


/* =====================================================
   PROFILE IMAGE MODAL
===================================================== */

function openProfileModal() {

    if (!profileModal) {
        return;
    }

    profileModal.classList.add("active");

    profileModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeProfileModal() {

    if (!profileModal) {
        return;
    }

    profileModal.classList.remove("active");

    profileModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


if (profileImageBox) {

    profileImageBox.addEventListener(
        "click",
        openProfileModal
    );

}


if (profileModalClose) {

    profileModalClose.addEventListener(
        "click",
        closeProfileModal
    );

}


/* Close profile modal by clicking outside */

if (profileModal) {

    profileModal.addEventListener(
        "click",
        function (event) {

            if (event.target === profileModal) {

                closeProfileModal();

            }

        }
    );

}


/* =====================================================
   CREATE PROJECT CARDS
===================================================== */

function displayProjects() {

    if (!projectsGrid) {
        return;
    }

    projectsGrid.innerHTML = "";


    projects.forEach(function (project, index) {

        const projectCard =
            document.createElement("article");

        projectCard.className =
            "project-card";


        let buttonsHTML = `

            <button
                type="button"
                class="btn primary-btn"
                onclick="openProject(${index})">

                View Project

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        `;


        if (project.website) {

            buttonsHTML += `

                <a
                    href="${project.website}"
                    target="_blank"
                    rel="noopener"
                    class="btn secondary-btn">

                    Live Website

                    <i class="fa-solid fa-up-right-from-square"></i>

                </a>

            `;

        }


        projectCard.innerHTML = `

            <div class="project-number">

                ${project.number}

            </div>

            <h3>

                ${project.title}

            </h3>

            <p>

                ${project.description}

            </p>

            <p class="project-technology">

                <strong>Technology:</strong>
                ${project.technology}

            </p>

            <div class="project-actions">

                ${buttonsHTML}

            </div>

        `;


        projectsGrid.appendChild(
            projectCard
        );

    });

}


/* =====================================================
   OPEN PROJECT MODAL
===================================================== */

function openProject(index) {

    const project = projects[index];

    if (!project || !projectModal) {
        return;
    }


    let documentButton = "";


    if (project.document) {

        documentButton = `

            <a
                href="${project.document}"
                target="_blank"
                rel="noopener"
                class="btn primary-btn">

                <i class="fa-solid fa-file-lines"></i>

                View Document

            </a>

        `;

    }


    let websiteButton = "";


    if (project.website) {

        websiteButton = `

            <a
                href="${project.website}"
                target="_blank"
                rel="noopener"
                class="btn secondary-btn">

                <i class="fa-solid fa-globe"></i>

                Visit Website

            </a>

        `;

    }


    projectModalContent.innerHTML = `

        <div class="project-number">

            ${project.number}

        </div>

        <h2>

            ${project.title}

        </h2>

        <p>

            ${project.description}

        </p>

        <p>

            <strong>Technology:</strong>

            ${project.technology}

        </p>

        <div class="project-actions">

            ${documentButton}

            ${websiteButton}

        </div>

    `;


    projectModal.classList.add("active");


    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE PROJECT MODAL
===================================================== */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("active");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


if (projectModal) {

    projectModal.addEventListener(
        "click",
        function (event) {

            if (event.target === projectModal) {

                closeProjectModal();

            }

        }
    );

}


/* =====================================================
   CERTIFICATE MODAL
===================================================== */

function openCertificate() {

    const certificateModal =
        document.getElementById(
            "certificateModal"
        );


    if (!certificateModal) {
        return;
    }


    certificateModal.classList.add(
        "active"
    );


    certificateModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";

}


function closeCertificate() {

    const certificateModal =
        document.getElementById(
            "certificateModal"
        );


    if (!certificateModal) {
        return;
    }


    certificateModal.classList.remove(
        "active"
    );


    certificateModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";

}


/* Close certificate by clicking outside */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );


if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        function (event) {

            if (event.target === certificateModal) {

                closeCertificate();

            }

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        closeNavigationMenu();

        closeProfileModal();

        closeProjectModal();

        closeCertificate();

    }
);


/* =====================================================
   FOOTER YEAR
===================================================== */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   INITIALIZE PROJECTS
===================================================== */

displayProjects();
