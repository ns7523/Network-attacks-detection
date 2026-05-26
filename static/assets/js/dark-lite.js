// Dark Lite

const button = document.querySelector(".dark-light");
(function () {
    let onpageLoad = localStorage.getItem("theme");
    if (onpageLoad === "dark-theme") {
        document.body.classList.add("dark-theme");
    }
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-theme");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-theme") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark-theme");
    }
}
