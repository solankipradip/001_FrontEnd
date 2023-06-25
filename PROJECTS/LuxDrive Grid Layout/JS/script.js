const toggleButton = document.getElementById('cross_submenu');
const submenu = document.getElementById('main_responsive');
const close_btn = document.getElementById('close_btn');

toggleButton.addEventListener('click', () => {
    submenu.classList.toggle('active_submenu');
    // toggleButton.style.display="none";
    // close_btn.style.display="block";




})

//  close_btn.addEventListener('click', () => {
//     submenu.classList.remove('active_submenu');
//         toggleButton.style.display="block"
//         close_btn.style.display="none";

//  })

let x = document.getElementById("span");
// let s_menu = document.getElementById("submenu");
let s_menu1 = document.getElementById("submenu1");
let s_menu2 = document.getElementById("submenu2");
let s_menu3 = document.getElementById("submenu3");
let s_menu4 = document.getElementById("submenu4");
let s_menu5 = document.getElementById("submenu5");
let span5 = document.getElementById("span5");
// let li1 = document.getElementById("li1");





s_menu.style.display = "block"

function myNew() {

    s_menu1.classList.toggle("submenu_toggle");
    s_menu2.classList.remove("submenu_toggle");
    s_menu3.classList.remove("submenu_toggle");
    s_menu4.classList.remove("submenu_toggle");
    s_menu5.classList.remove("submenu_toggle");
    // li1.style.display="block"


}
function myNew2() {
    s_menu2.classList.toggle("submenu_toggle");
    s_menu1.classList.remove("submenu_toggle");
    s_menu3.classList.remove("submenu_toggle");
    s_menu4.classList.remove("submenu_toggle");
    s_menu5.classList.remove("submenu_toggle");

}
function myNew3() {
    s_menu3.classList.toggle("submenu_toggle");
    s_menu1.classList.remove("submenu_toggle");
    s_menu2.classList.remove("submenu_toggle");
    s_menu4.classList.remove("submenu_toggle");
    s_menu5.classList.remove("submenu_toggle");


}
function myNew4() {
    s_menu4.classList.toggle("submenu_toggle");
    s_menu1.classList.remove("submenu_toggle");
    s_menu3.classList.remove("submenu_toggle");
    s_menu2.classList.remove("submenu_toggle");
    s_menu5.classList.remove("submenu_toggle");


}
function myNew5() {
    s_menu5.classList.toggle("submenu_toggle");
    s_menu1.classList.remove("submenu_toggle");
    s_menu3.classList.remove("submenu_toggle");
    s_menu4.classList.remove("submenu_toggle");
    s_menu2.classList.remove("submenu_toggle");


}









