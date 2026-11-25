
/* 1. MOBILE MENU */
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});


/* 2. DROPDOWN MENUS */
document.querySelectorAll(".dropdown-toggle").forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.classList.toggle("open");
    });
});


/* 3. CLOSE MENU AFTER CLICKING A LINK */
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        document.querySelectorAll(".nav-dropdown")
            .forEach(dropdown => dropdown.classList.remove("open"));
    });
});
