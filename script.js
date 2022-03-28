function todayhour(){

    var today=new Date();

    document.write(today.toDateString());
}

function thistime(){

    var thishour=new Date();

    document.write(thishour.toTimeString());
}

document.write("<h2>");
todayhour();
document.write("</h2>");

document.write("<h1>");
document.write("¿And what time is it?");
document.write("</h1>");

document.write("<h2>");
thistime();
document.write("</h2>");

