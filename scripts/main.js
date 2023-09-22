const header = document.getElementById("header");
const sticky = header.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

//-------------------------------------------------------
const mobile = document.querySelector(".mobile");
const burguer = document.querySelector(".burguer");
const close = document.querySelector(".close");

burguer.addEventListener("click", () => {
    mobile.classList.toggle("active");
})

close.addEventListener("click", () => {
    mobile.classList.remove("active");
})

//-------------------------------------------------------
const daniele = document.getElementById("daniele-btn");
const emanuele = document.getElementById("emanuele-btn");

function bgConfig() {
    document.querySelector(".equipe-image").style.backgroundSize = "50% 100%";
    document.querySelector(".equipe-image").style.backgroundRepeat = "no-repeat";
    document.querySelector(".equipe-image").style.backgroundAttachment = "fixed";
}

daniele.addEventListener("click", (e) => {
    e.preventDefault();

    daniele.classList.add("active");
    emanuele.classList.remove("active");

    document.getElementById("text-emanuele").style.display = "none";
    document.getElementById("text-daniele").style.display = "block";

    document.querySelector(".equipe-image").style.background = "url('../images/daniele.png')";
    bgConfig();
})

emanuele.addEventListener("click", (e) => {
    e.preventDefault();

    emanuele.classList.add("active");
    daniele.classList.remove("active");

    document.getElementById("text-daniele").style.display = "none";
    document.getElementById("text-emanuele").style.display = "block";

    document.querySelector(".equipe-image").style.background = "url('../images/emanuele.png')";
    bgConfig();
})