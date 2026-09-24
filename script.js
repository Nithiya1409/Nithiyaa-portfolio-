/* =========================
   PROJECT DATA
========================= */

const projects = [

    {
        title: "Solar Powered Wireless Charging Road for EV",
        domain: "ECE + CSE • INTERDISCIPLINARY PROJECT",

        summary:
            "An interdisciplinary project exploring the integration of solar energy and wireless power transfer for electric vehicle charging.",

        sections: [
            {
                title: "Project Overview",
                text:
                    "The project explores a solar-powered approach to wireless charging for electric vehicles, combining renewable energy concepts with wireless power transfer."
            },

            {
                title: "Problem Statement",
                text:
                    "Electric vehicles require convenient and sustainable charging solutions. The project investigates how solar energy and wireless charging concepts can be brought together."
            },

            {
                title: "Proposed Solution",
                text:
                    "The proposed concept combines solar energy generation with wireless power transfer to provide a contactless charging approach for EVs."
            },

            {
                title: "Working Flow",
                text:
                    "Solar Energy → Power Generation → Power Conditioning → Wireless Power Transfer → EV Charging"
            },

            {
                title: "Key Features",
                text:
                    "Renewable energy concept, wireless charging approach, interdisciplinary design, and EV-focused application."
            },

            {
                title: "Technologies / Components",
                text:
                    "Solar energy concepts, wireless power transfer concepts, power electronics concepts, and EV charging concepts."
            },

            {
                title: "My Contribution",
                text:
                    "Worked as part of the project team and contributed to the development and presentation of the interdisciplinary project."
            },

            {
                title: "Outcome",
                text:
                    "The project provided practical exposure to combining renewable energy, wireless power transfer, and electric vehicle technology."
            },

            {
                title: "Achievement",
                text:
                    "Won Third Prize in the Science Exhibition at the National Science Day Event at Government College of Technology, Coimbatore, on 13.03.2026."
            }
        ],

        ppt: "assets/documents/solar-project.pptx"
    },


    {
        title: "Camera-Free Intelligent Human Activity Detection Using Ultrasonic Sensing",
        domain: "ECE + CSE • INTERDISCIPLINARY PROJECT",

        summary:
            "An interdisciplinary concept that explores human activity detection using ultrasonic sensing instead of camera-based monitoring.",

        sections: [
            {
                title: "Project Overview",
                text:
                    "The project explores camera-free human activity detection using ultrasonic sensing technology."
            },

            {
                title: "Problem Statement",
                text:
                    "Camera-based monitoring can raise privacy concerns in certain environments. A camera-free sensing approach can be explored for detecting human movement and activity."
            },

            {
                title: "Proposed Solution",
                text:
                    "Ultrasonic sensing is used as the sensing approach for detecting changes associated with human movement and activity."
            },

            {
                title: "Working Flow",
                text:
                    "Ultrasonic Sensing → Signal Observation → Movement Detection → Activity Identification"
            },

            {
                title: "Key Features",
                text:
                    "Camera-free sensing, privacy-oriented approach, ultrasonic sensing, and human activity detection."
            },

            {
                title: "Sensing Method",
                text:
                    "The project uses ultrasonic sensing rather than visual camera input."
            },

            {
                title: "Applications",
                text:
                    "The concept can be explored for privacy-conscious monitoring and human activity detection environments."
            },

            {
                title: "Outcome",
                text:
                    "The project provided interdisciplinary exposure to sensing technology and computer science concepts."
            }
        ],

        ppt: "assets/documents/human-activity-detection.pptx"
    },


    {
        title: "Hangman",
        domain: "CSE • C PROGRAMMING",

        summary:
            "A word-guessing game developed using C programming concepts and game logic.",

        sections: [
            {
                title: "Project Overview",
                text:
                    "Hangman is an interactive word-guessing game implemented using C programming."
            },

            {
                title: "Objective",
                text:
                    "The objective is to guess the hidden word by entering letters while managing the available attempts."
            },

            {
                title: "Game Logic",
                text:
                    "The program processes the player's guesses and updates the displayed word based on whether the guessed character is present."
            },

            {
                title: "Working Flow",
                text:
                    "Start Game → Display Hidden Word → Enter Guess → Check Guess → Update Word → Continue Until Win/Loss"
            },

            {
                title: "C Concepts Used",
                text:
                    "Input/output, conditional statements, loops, character handling, arrays, and functions."
            },

            {
                title: "Features",
                text:
                    "Interactive guessing, attempt tracking, word display, and win/loss conditions."
            },

            {
                title: "Outcome",
                text:
                    "The project strengthened programming logic and understanding of control structures in C."
            }
        ],

        document: "assets/documents/hangman.pdf"
    },


    {
        title: "Tic-Tac-Toe",
        domain: "CSE • MOBILE APPLICATION",

        summary:
            "An interactive Tic-Tac-Toe game developed using MIT App Inventor with a visual interface and game logic.",

        sections: [
            {
                title: "Project Overview",
                text:
                    "A mobile Tic-Tac-Toe game developed using MIT App Inventor."
            },

            {
                title: "Objective",
                text:
                    "To create an interactive two-player game with a simple interface and clear game flow."
            },

            {
                title: "UI Design",
                text:
                    "The application uses a visual interface designed for players to interact with the game board."
            },

            {
                title: "Game Logic",
                text:
                    "The game processes player selections and checks the board state to determine the result."
            },

            {
                title: "Working Flow",
                text:
                    "Start Game → Player Move → Update Board → Check Winning Condition → Display Result"
            },

            {
                title: "Technology",
                text:
                    "MIT App Inventor"
            },

            {
                title: "Outcome",
                text:
                    "The project provided practical experience in mobile application development, UI design, and event-based logic."
            }
        ],

        document: "assets/documents/tictactoe.pdf",

        website:
            "https://nithiya1409.github.io/Tic-tac-toe-/"
    },


    {
        title: "CGPA Calculator",
        domain: "CSE • ACADEMIC APPLICATION",

        summary:
            "A CGPA calculation project supported by Software Requirements Specification documentation.",

        sections: [
            {
                title: "Project Overview",
                text:
                    "The CGPA Calculator is designed to help students calculate their academic performance using semester/course information."
            },

            {
                title: "Problem Statement",
                text:
                    "Manual calculation of academic averages can be time-consuming and may lead to calculation mistakes."
            },

            {
                title: "Proposed Solution",
                text:
                    "A calculator-based application can organize the required academic inputs and calculate the CGPA systematically."
            },

            {
                title: "Working Flow",
                text:
                    "Enter Academic Details → Process Inputs → Calculate Grade/Performance Values → Generate CGPA"
            },

            {
                title: "Key Features",
                text:
                    "Academic input handling, systematic calculation, and CGPA output."
            },

            {
                title: "Documentation",
                text:
                    "The project is supported by an SRS document describing the software requirements."
            },

            {
                title: "Outcome",
                text:
                    "The project provides practical exposure to requirement analysis and academic calculation logic."
            }
        ],

        srs: "assets/documents/cgpa-calculator-srs.pdf"
    }

];


/* =========================
   DISPLAY PROJECTS
========================= */

const projectsGrid = document.getElementById("projectsGrid");

function displayProjects() {

    projectsGrid.innerHTML = "";

    projects.forEach((project, index) => {

        const card = document.createElement("article");

        card.className = "project-card";

        card.innerHTML = `

            <div>

                <p class="project-domain">
                    ${project.domain}
                </p>

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.summary}
                </p>

            </div>

            <div class="project-footer">

                <span class="project-number">
                    0${index + 1}
                </span>

                <button
                    class="btn secondary-btn"
                    onclick="openProject(${index})"
                >
                    Explore Project
                </button>

            </div>

        `;

        projectsGrid.appendChild(card);

    });

}


/* =========================
   OPEN PROJECT
========================= */

function openProject(index) {

    const project = projects[index];

    const modal = document.getElementById("projectModal");

    const content = document.getElementById("projectModalContent");

    let sectionsHTML = "";

    project.sections.forEach(section => {

        sectionsHTML += `

            <div class="detail-box">

                <h4>
                    ${section.title}
                </h4>

                <p>
                    ${section.text}
                </p>

            </div>

        `;

    });


    let actionButtons = "";


    if (project.ppt) {

        actionButtons += `

            <a
                href="${project.ppt}"
                target="_blank"
                class="btn primary-btn"
            >
                View Project PPT
            </a>

        `;

    }


    if (project.document) {

        actionButtons += `

            <a
                href="${project.document}"
                target="_blank"
                class="btn secondary-btn"
            >
                View Project Document
            </a>

        `;

    }


    if (project.srs) {

        actionButtons += `

            <a
                href="${project.srs}"
                target="_blank"
                class="btn primary-btn"
            >
                View SRS
            </a>

        `;

    }


    if (
        project.website &&
        !project.website.includes("PASTE_YOUR")
    ) {

        actionButtons += `

            <a
                href="${project.website}"
                target="_blank"
                class="btn secondary-btn"
            >
                View Live Website
            </a>

        `;

    }


    content.innerHTML = `

        <div class="modal-title">

            <p class="modal-domain">
                ${project.domain}
            </p>

            <h2>
                ${project.title}
            </h2>

            <p class="modal-summary">
                ${project.summary}
            </p>

        </div>

        <div class="modal-sections">

            ${sectionsHTML}

        </div>

        <div class="modal-actions">

            ${actionButtons}

        </div>

    `;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE PROJECT
========================= */

function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================
   CERTIFICATE
========================= */

function openCertificate() {

    document
        .getElementById("certificateModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    document
        .getElementById("certificateModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================
   SIDE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const sideMenu =
    document.getElementById("sideMenu");

const closeMenuButton =
    document.getElementById("closeMenu");

const menuOverlay =
    document.getElementById("menuOverlay");


function openMenu() {

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

}


function closeMenu() {

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

}


menuButton.addEventListener(
    "click",
    openMenu
);

closeMenuButton.addEventListener(
    "click",
    closeMenu
);

menuOverlay.addEventListener(
    "click",
    closeMenu
);


/* Close menu after clicking navigation */

document
    .querySelectorAll(".side-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProject();

            closeCertificate();

            closeMenu();

        }

    }
);


/* =========================
   MODAL BACKGROUND CLICK
========================= */

document
    .getElementById("projectModal")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id === "projectModal"
            ) {

                closeProject();

            }

        }
    );


document
    .getElementById("certificateModal")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id === "certificateModal"
            ) {

                closeCertificate();

            }

        }
    );


/* =========================
   CONTACT FORM
========================= */

/*
   Formspree handles the form submission directly.

   The form connection is already defined in index.html:

   action="https://formspree.io/f/xwlpqldj"
   method="POST"

   IMPORTANT:
   Do NOT use event.preventDefault() here.
   Otherwise the form submission to Formspree will be stopped.
*/


/* =========================
   YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   START
========================= */

displayProjects();
