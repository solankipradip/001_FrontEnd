let x = document.getElementById("main");
let login = document.getElementById("login");
let cross = document.getElementById("close")

function Click() {

    if(login.style.opacity="0"){

        x.style.filter="blur(4px)"
        login.style.opacity="1"
        login.style.top="200px"

    }
    else{
        login.style.opacity="0"

    }
}

cross.addEventListener("click",function(){
    login.style.top="100px"
    x.style.filter="blur(0)"

    login.style.opacity="0"

})



