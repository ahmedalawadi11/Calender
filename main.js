

function showtime() {
    var date =new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var second=date.getSeconds();
 //صفر بجانب الرقم اللي في الساعه
    hours=(hours<10)? "0"+hours:hours;
    minutes=(minutes<10)? "0"+minutes:minutes;
    second=(second<10)? "0"+second:second;
    if(hours>12){
        hours=hours-12;
    } //12hours
    // var time=hours+":" +minutes+":"+second; //طريقه تانية بحطهم جوه تايم وبعرض تايم 
    document.getElementById("clock").innerHTML=hours+":" +minutes+":"+second;
    setTimeout(showtime,1000); //live
}
showtime();

var day;
switch( new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday" +"- "+ "weekend";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;

        //دمج اكتر من حاله
        // case 7:
        // case 8:
        // case 9:
        //     day="ahmed";
        //     break;
}
document.getElementById("lap").innerHTML="today is :" +"  " +day;
