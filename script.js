/* =========================================
   NITHIYA SREE R - PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   1. THREE-DOT MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");


function openMenu() {

    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.classList.add("menu-open");
}


function closeSideMenu() {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.classList.remove("menu-open");
}


menuButton.addEventListener(
    "click",
    openMenu
);


closeMenu.addEventListener(
    "click",
    closeSideMenu
);


menuOverlay.addEventListener(
    "click",
    closeSideMenu
);


/* Close menu after selecting a section */

document.querySelectorAll(
    ".side-menu nav a"
).forEach(function(link) {

    link.addEventListener(
        "click",
        closeSideMenu
    );

});


/* =========================================
   2. PROJECT INFORMATION
========================================= */

const projects = [

    {
        number: "PROJECT 1",

        title:
            "Solar Powered Wireless Charging Road for EV",

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
            "Arduino • Ultrasonic Sensor • IoT • Machine Learning",

        document:
            "assets/documents/human-activity-detection.pptx"
    },


    {
        number: "PROJECT 3",

        title:
            "Hangman",

        description:
            "An interactive word-guessing game where the player attempts to identify the hidden word before the allowed number of incorrect guesses is reached.",

        technology:
            "HTML • CSS • JavaScript",

        document:
            "assets/documents/hangman.pdf"
    },


    {
        number: "PROJECT 4",

        title:
            "Tic-Tac-Toe",

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

        title:
            "CGPA Calculator",

        description:
            "A CGPA calculation system designed to calculate academic performance based on subjects, credits and grade points.",

        technology:
            "Programming • Calculation Logic • Academic Utility",

        document:
            "assets/documents/cgpa-calculator-srs.pdf"
    }

];


/* =========================================
   3. CREATE PROJECT CARDS
========================================= */

const projectsGrid =
    document.getElementById("projectsGrid");


projects.forEach(function(project, index) {

    const card =
        document.createElement("article");

    card.className =
        "project-card";


    card.innerHTML = `

        <div class="project-number">
            ${project.number}
        </div>

        <div class="project-card-content">

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <div class="project-tech">
                ${project.technology}
            </div>

            <button
                type="button"
                class="project-view-btn"
                onclick="openProject(${index})">

                View Project

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        </div>

    `;


    projectsGrid.appendChild(card);

});


/* =========================================
   4. PROJECT MODAL
========================================= */

const projectModal =
    document.getElementById("projectModal");

const projectModalContent =
    document.getElementById(
        "projectModalContent"
    );

const projectModalClose =
    document.getElementById(
        "projectModalClose"
    );


function openProject(index) {

    const project =
        projects[index];


    let websiteButton = "";


    /* Show website button only for
       projects having a website */

    if (project.website) {

        websiteButton = `

            <a
                href="${project.website}"
                target="_blank"
                rel="noopener"
                class="btn primary-btn">

                Visit Website

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </a>

        `;

    }


    projectModalContent.innerHTML = `

        <div class="project-details">

            <span class="project-modal-number">
                ${project.number}
            </span>

            <h2>
                ${project.title}
            </h2>


            <div class="detail-box">

                <h4>
                    ABOUT THE PROJECT
                </h4>

                <p>
                    ${project.description}
                </p>

            </div>


            <div class="detail-box">

                <h4>
                    TECHNOLOGIES
                </h4>

                <p>
                    ${project.technology}
                </p>

            </div>


            <div class="modal-actions">

                ${websiteButton}

                <a
                    href="${project.document}"
                    target="_blank"
                    rel="noopener"
                    class="btn secondary-btn">

                    View Document

                    <i class="fa-solid fa-file-lines"></i>

                </a>

            </div>

        </div>

    `;


    projectModal.classList.add("active");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================
   5. CLOSE PROJECT MODAL
========================================= */

function closeProject() {

    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


projectModalClose.addEventListener(
    "click",
    closeProject
);


/* Close when clicking outside popup */

projectModal.addEventListener(
    "click",
    function(event) {

        if (event.target === projectModal) {

            closeProject();

        }

    }
);


/* =========================================
   6. CERTIFICATE POPUP
========================================= */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );


function openCertificate() {

    certificateModal.classList.add(
        "active"
    );

    certificateModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeCertificate() {

    certificateModal.classList.remove(
        "active"
    );

    certificateModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* Close certificate by clicking outside */

certificateModal.addEventListener(
    "click",
    function(event) {

        if (event.target === certificateModal) {

            closeCertificate();

        }

    }
);


/* =========================================
   7. ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeSideMenu();

            closeProject();

            closeCertificate();

        }

    }
);


/* =========================================
   8. CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   9. SMOOTH SECTION NAVIGATION
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});
