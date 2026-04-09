var typed = new Typed(".text", {
    strings: ["Full Stack Developer","Node.js & React Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

function hamMenu() {
    let menu = document.getElementById("navLinks");
    menu.classList.toggle("active");
}