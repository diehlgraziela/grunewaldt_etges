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