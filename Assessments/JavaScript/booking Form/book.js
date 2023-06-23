
menu = document.getElementById("menu");

star = document.getElementById("star");

ul_tag = document.getElementById("ul");

f_day = document.getElementById("one");

h_day = document.getElementById("two");

hour_time = document.getElementById("three")

var book_date = document.getElementById("b_date")

var book_time = document.getElementById("b_time");

var book_slot = document.getElementById("b_slot");

var mobile = document.getElementById("m_number");

function test() {
    if (ul_tag.style.display == "none") {
        ul_tag.style.display = "block"
    }
    else {
        ul_tag.style.display = "none"
    }
}

f_day.addEventListener("click", function () {
    menu.innerHTML = one.innerHTML;
    book_time.style.display="none";
    book_slot.style.display="none";
    ul_tag.style.display = "none"


    


})

h_day.addEventListener("click", function () {
    menu.innerHTML = two.innerHTML;
    book_time.style.display="none";
    book_slot.style.display="inline-block";
    ul_tag.style.display = "none"



})

hour_time.addEventListener("click", function () {
    menu.innerHTML = three.innerHTML;
    book_time.style.display="inline-block";
    book_slot.style.display="none";
    ul_tag.style.display = "none"

    


})


