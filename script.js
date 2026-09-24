/* =========================================================
   NITHIYA SREE R - PORTFOLIO
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   WAIT FOR PAGE TO LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
       ==================================================== */

    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const projectModal = document.getElementById("projectModal");
    const certificateModal = document.getElementById("certificateModal");

    const projectModalContent =
        document.getElementById("projectModalContent");

    const year = document.getElementById("year");


    /* =====================================================
       PROJECT DATA
       ===================================================== */

    const projects = [

        {
            title: "Solar Powered Wireless Charging Road for EV",

            description:
                "A smart road concept that uses solar energy and wireless charging technology to charge electric vehicles while they are travelling.",

            technologies:
                "Solar Energy, Wireless Charging, EV Technology",

            type:
                "Renewable Energy & Electric Vehicle Project",

            ppt:
                "assets/documents/solar-project.pptx"
        },


        {
            title:
                "Camera-Free Intelligent Human Activity Detection Using Ultrasonic Sensing",

            description:
                "A camera-free system that uses ultrasonic sensing to detect human presence and activity while maintaining privacy.",

            technologies:
                "Arduino, HC-SR04 Ultrasonic Sensor, LDR, Buzzer, Machine Learning",

            type:
                "IoT & Intelligent Detection System",

            ppt:
                "assets/documents/human-activity-detection.pptx"
        },


        {
            title: "Hangman",

            description:
                "A simple word-guessing game developed to demonstrate programming logic, user interaction and game-based problem solving.",

            technologies:
                "Programming, Game Logic",

            type:
                "Mini Game Project",

            document:
                "assets/documents/hangman.pdf"
        },


        {
            title: "Tic-Tac-Toe",

            description:
                "A classic two-player Tic-Tac-Toe game developed as an interactive web project.",

            technologies:
                "HTML, CSS, JavaScript",

            type:
                "Web Development Project",

            document:
                "assets/documents/tictactoe.pdf",

            website:
                "https://nithiya1409.github.io/Tic-tac-toe-/"
        },


        {
            title: "CGPA Calculator",

            description:
                "A CGPA calculator designed to calculate academic performance based on subjects, credits and grade points.",

            technologies:
                "Java, Calculation Logic",

            type:
                "Academic Utility Project",

            srs:
                "assets/documents/cgpa-calculator-srs.pdf"
        }

    ];


    /* =====================================================
       MENU FUNCTIONS
       ===================================================== */

    function openMenu() {

        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "true");
        }

        document.body.style.overflow = "hidden";
    }


    function closeNavigationMenu() {

        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
        }

        document.body.style.overflow = "";
    }


    /* Open menu */

    if (menuButton) {
        menuButton.addEventListener("click", openMenu);
    }


    /* Close menu */

    if (closeMenu) {
        closeMenu.addEventListener(
            "click",
            closeNavigationMenu
        );
    }


    /* Close when overlay is clicked */

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
        document.querySelectorAll(".side-menu a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            closeNavigationMenu();

        });

    });


    /* =====================================================
       DISPLAY PROJECTS
       ===================================================== */

    function displayProjects() {

        const projectsGrid =
            document.getElementById("projectsGrid");

        if (!projectsGrid) return;

        projectsGrid.innerHTML = "";


        projects.forEach(function (project, index) {

            const card =
                document.createElement("article");

            card.className = "project-card";


            card.innerHTML = `

                <div>

                    <div class="project-number">
                        PROJECT ${String(index + 1).padStart(2, "0")}
                    </div>

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                </div>


                <button
                    type="button"
                    class="project-view-btn"
                    onclick="openProject(${index})">

                    View Project →

                </button>

            `;


            projectsGrid.appendChild(card);

        });

    }


    /* =====================================================
       OPEN PROJECT
       ===================================================== */

    window.openProject = function (index) {

        const project = projects[index];

        if (!project || !projectModal || !projectModalContent) {
            return;
        }


        let actionButtons = "";


        /* ---------- PPT ---------- */

        if (project.ppt) {

            actionButtons += `

                <a
                    href="${project.ppt}"
                    target="_blank"
                    rel="noopener"
                    class="btn primary-btn">

                    📊 View Project PPT →

                </a>

            `;

        }


        /* ---------- PDF DOCUMENT ---------- */

        if (project.document) {

            actionButtons += `

                <a
                    href="${project.document}"
                    target="_blank"
                    rel="noopener"
                    class="btn primary-btn">

                    📄 View Document →

                </a>

            `;

        }


        /* ---------- SRS ---------- */

        if (project.srs) {

            actionButtons += `

                <a
                    href="${project.srs}"
                    target="_blank"
                    rel="noopener"
                    class="btn primary-btn">

                    📑 View SRS →

                </a>

            `;

        }


        /* ---------- WEBSITE ---------- */

        if (project.website) {

            actionButtons += `

                <a
                    href="${project.website}"
                    target="_blank"
                    rel="noopener"
                    class="btn secondary-btn">

                    🌐 Visit Website →

                </a>

            `;

        }


        /* =================================================
           MODAL CONTENT
           ================================================= */

        projectModalContent.innerHTML = `

            <h2>
                ${project.title}
            </h2>


            <p>
                ${project.description}
            </p>


            <div class="project-details">


                <div class="detail-box">

                    <h4>
                        TECHNOLOGIES
                    </h4>

                    <p>
                        ${project.technologies}
                    </p>

                </div>


                <div class="detail-box">

                    <h4>
                        PROJECT TYPE
                    </h4>

                    <p>
                        ${project.type}
                    </p>

                </div>


            </div>


            <div class="modal-actions">

                ${actionButtons}

            </div>

        `;


        projectModal.classList.add("active");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    };


    /* =====================================================
       CLOSE PROJECT
       ===================================================== */

    window.closeProject = function () {

        if (!projectModal) return;

        projectModal.classList.remove("active");

        projectModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    };


    /* =====================================================
       CERTIFICATE
       ===================================================== */

    window.openCertificate = function () {

        if (!certificateModal) return;

        certificateModal.classList.add("active");

        certificateModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    };


    /* =====================================================
       CLOSE CERTIFICATE
       ===================================================== */

    window.closeCertificate = function () {

        if (!certificateModal) return;

        certificateModal.classList.remove("active");

        certificateModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    };


    /* =====================================================
       CLICK OUTSIDE PROJECT MODAL
       ===================================================== */

    if (projectModal) {

        projectModal.addEventListener(
            "click",
            function (event) {

                if (event.target === projectModal) {

                    window.closeProject();

                }

            }
        );

    }


    /* =====================================================
       CLICK OUTSIDE CERTIFICATE MODAL
       ===================================================== */

    if (certificateModal) {

        certificateModal.addEventListener(
            "click",
            function (event) {

                if (event.target === certificateModal) {

                    window.closeCertificate();

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

            if (event.key === "Escape") {

                closeNavigationMenu();

                window.closeProject();

                window.closeCertificate();

            }

        }
    );


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       INITIALIZE PROJECTS
       ===================================================== */

    displayProjects();

});
