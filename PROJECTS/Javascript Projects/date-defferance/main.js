let fdate = document.getElementById("input1");
let ldate = document.getElementById("input2");
let btn = document.querySelector("button");
let result = document.querySelector("span")
let warning = document.getElementById("warning")

btn.addEventListener("click", () => {

  let fvalue = fdate.value;
  let lvalue = ldate.value;



  let date1 = new Date(fvalue).getTime();
  let date2 = new Date(lvalue).getTime();

  let defference = date2 - date1;



  let year = (Math.floor(defference / (1000 * 60 * 60 * 24 * 365)));
  let month = (Math.floor(defference / (1000 * 60 * 60 * 24 * 30.4375)));
  let week = (Math.floor(defference / (1000 * 60 * 60 * 24 * 7)));
  let days = (Math.floor(defference / (1000 * 60 * 60 * 24)));
  let hours = (Math.floor(defference / (1000 * 60 * 60 * 60)));
  let minutes = (Math.floor(defference / (1000 * 60 * 60)));
  let seconds = (Math.floor(defference / (1000 * 60)));

  result.innerHTML = "<br> " + "Years : " + year + "<br>" + "Months : " + month + "<br> " + "Weeks : " + week + "<br>" + "Days : " + days + "<br> " + "Hours : " + hours + "<br>" + "Minutes : " + minutes + "<br>" + "Seconds : " + seconds;


  if(fvalue== "",lvalue==""){

    warning.innerHTML="* Please Enter Date"
    result.style.display="none"
  }
  else{
    warning.innerHTML=""

    warning.style.display="inline"

    result.style.display="block"
    

  }


})

