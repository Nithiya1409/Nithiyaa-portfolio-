document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. THREE-DOT MENU
    ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

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

    if (menuButton) {
        menuButton.addEventListener("click", openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeNavigationMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeNavigationMenu);
    }


    /* =====================================================
       2. CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(".side-menu nav a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", closeNavigationMenu);
    });


    /* =====================================================
       3. PROJECT DATA
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
       4. DISPLAY PROJECTS
    ===================================================== */

    const projectsGrid =
        document.getElementById("projectsGrid");

    function displayProjects() {

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

                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

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
       5. PROJECT MODAL
    ===================================================== */

    const projectModal =
        document.getElementById("projectModal");

    const projectModalContent =
        document.getElementById("projectModalContent");


    /* =====================================================
       6. OPEN PROJECT
    ===================================================== */

    window.openProject = function (index) {

        const project = projects[index];

        if (!project ||
            !projectModal ||
            !projectModalContent) {
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

                    <i class="fa-solid fa-file-powerpoint"></i>

                    View Project PPT →

                </a>
            `;
        }


        /* ---------- PDF ---------- */

        if (project.document) {

            actionButtons += `
                <a
                    href="${project.document}"
                    target="_blank"
                    rel="noopener"
                    class="btn primary-btn">

                    <i class="fa-solid fa-file-pdf"></i>

                    View Document →

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

                    <i class="fa-solid fa-file-lines"></i>

                    View SRS →

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

                    <i class="fa-solid fa-globe"></i>

                    Visit Website →

                </a>
            `;
        }


        /* ---------- MODAL CONTENT ---------- */

        projectModalContent.innerHTML = `

            <h2>${project.title}</h2>

            <p>
                ${project.description}
            </p>

            <div class="project-details">

                <div class="detail-box">

                    <h4>TECHNOLOGIES</h4>

                    <p>
                        ${project.technologies}
                    </p>

                </div>

                <div class="detail-box">

                    <h4>PROJECT TYPE</h4>

                    <p>
                        ${project.type}
                    </p>

                </div>

            </div>

            <div class="modal-actions">
                ${actionButtons}
            </div>
        `;


        /* ---------- SHOW POPUP ---------- */

        projectModal.classList.add("active");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    };


    /* =====================================================
       7. CLOSE PROJECT
    ===================================================== */

    window.closeProject = function () {

        if (!projectModal) return;

        projectModal.classList.remove("active");

        projectModal.setAttribute(
            "aria-hidden",
            "true"
        );

        /*
           IMPORTANT:
           Only the popup closes.
           The user stays on the portfolio page.
        */

        document.body.style.overflow = "";
    };


    /* =====================================================
       8. CERTIFICATE MODAL
    ===================================================== */

    const certificateModal =
        document.getElementById("certificateModal");


    window.openCertificate = function () {

        if (!certificateModal) return;

        certificateModal.classList.add("active");

        certificateModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    };


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
       9. CLOSE PROJECT BY CLICKING OUTSIDE
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
       10. CLOSE CERTIFICATE BY CLICKING OUTSIDE
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
       11. ESC KEY
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
       12. CURRENT YEAR
    ===================================================== */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       13. START PROJECT DISPLAY
    ===================================================== */

    displayProjects();

});
