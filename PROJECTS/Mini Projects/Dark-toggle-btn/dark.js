let a = document.querySelector(".toggle_btn_box");
let b = document.querySelector(".toggle_btn");
let c = document.querySelector("body");


function changecolor() {
    a.classList.toggle("active");
    b.classList.toggle("active");
    c.classList.toggle("active")

    // document.body.style.backgroundColor="black"

}