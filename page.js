document.addEventListener("DOMContentLoaded", function () {
    const contentArea = document.getElementById("content-area");
    const sidebars = document.querySelectorAll(".sidebar");
    const hideSidebarSections = ["home", "about", "contact"];

    function checkActiveSection() {
        let currentHash = window.location.hash.replace("#", "");
        console.log("Current Section:", currentHash);

        if (hideSidebarSections.includes(currentHash)) {
            console.log("Hiding sidebar for:", currentHash);
            sidebars.forEach(sidebar => sidebar.classList.remove("show-sidebar"));
            contentArea.classList.remove("show-content-area");
        } else {
            console.log("Checking for sidebar visibility:", currentHash);
            let foundSidebar = false;

            sidebars.forEach(sidebar => {
                if (sidebar.dataset.section === currentHash) {
                    console.log("Showing sidebar for:", currentHash);
                    sidebar.classList.add("show-sidebar");
                    foundSidebar = true;
                } else {
                    sidebar.classList.remove("show-sidebar");
                }
            });

            if (foundSidebar) {
                contentArea.classList.add("show-content-area");
            } else {
                console.warn("No matching sidebar found for:", currentHash);
            }
        }
    }

    window.addEventListener("hashchange", checkActiveSection);
    checkActiveSection();
});