window.APP.init.navigation = function() {
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
        navLink.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
    }

    navLink.forEach((n) => n.addEventListener("click", linkAction));
};