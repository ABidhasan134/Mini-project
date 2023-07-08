var endDate=("2 Feb 2024 10:00 PM");
//console.log(endDate);

function clock()
{
    var end=new Date(endDate);
    //console.log(end); //get the time out date
    var start=new Date();
    //console.log(start); get now days date
    var diff=(end-start)/1000;
    //console.log(diff); //diffrent of date will calculet in milisecond
    var days=Math.floor(diff/3600/24);
    //console.log(days);
    var Hours=Math.floor(diff/3600)%24;
    //console.log(Hours);// remainder value of a day
   var min=Math.floor(diff/3600)%60;
//    console.log(min) left value of min for that divid by 60
    var sec=Math.floor(diff)%60;
    console.log(sec);

   
    document.querySelector(".Days").innerHTML=days;
    //changeing the 00 into days
    document.querySelector(".hours").innerHTML=Hours;
    document.querySelector(".Min").innerHTML=min;
    document.querySelector(".sec").innerHTML=sec;
}
clock();
setInterval(clock,100);
//this is for the second run in page 