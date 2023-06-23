
// Today Date Code 

function showDate(){
    var t= new Date();

    var d_day = ["Sunday","Monday","Tuseday","Trusday","Friday","Satarday"];
    var day= d_day[ t.getDay()];

    var m_month= ["January","February","March","April","May","June","July","August","September","Octomber","November","December"];
     var month = m_month[t.getMonth()];

    var date= t.getDate();
    var year= t.getFullYear();

    date = date<10 ? "0" + date : date;

    var today= day + " , " + month + " , " + date + " , " + year;

    document.getElementById("day").innerText=today;




}


// Digital clock code 

function showTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";

    if(h > 12){
        h= h-12;
        
    }
    
    if(h>12){
        session = "PM";

    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    var time = h + " : " + m + " : " + s + "  " + session;
    document.getElementById("time").innerText=time;

    setTimeout(showTime,1000);
}