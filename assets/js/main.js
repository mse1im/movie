window.addEventListener("load", () => {
    const checkBox = document.querySelectorAll(".switchCheck");
    const currentTheme = document.querySelector("html");
    let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
    let mobileNav = document.getElementsByClassName("nav-mobile")[0];

    /* hamburger-menu */
    hamburgerMenu.addEventListener("click", () => {

        if (hamburgerMenu.classList.contains("open")) {
            mobileNav.classList.remove("d-block")
            mobileNav.classList.add("d-none")
            hamburgerMenu.classList.remove("open");
        } else {
            hamburgerMenu.classList.add("open");
            mobileNav.classList.remove("d-none")
            mobileNav.classList.add("d-block")
        }
    })

    checkBox.forEach(item => {
        item.addEventListener("click", function () {
            if (item.checked) {
                localStorage.setItem("themeSchema", "dark");
                currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            } else {
                localStorage.setItem("themeSchema", "light");
                currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            }
        })
    })

    function themeSchema() {
        if (localStorage.getItem("themeSchema") == "dark") {
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            checkBox.forEach(item => {
                item.checked = true;
            })
        } else {
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            checkBox.forEach(item => {
                item.checked = false;
            })
        }
    }

    themeSchema();
})