let hr= document.getElementById("hour");
let min= document.getElementById("min");
let second= document.getElementById("sec");
function display ()
{
    let date= new Date;
    //geting hour, min and second form libary function 
    let aa= date.getHours();
    let bb= date.getMinutes();
    let cc= date.getSeconds();//have to use () to get function 

    //Equation of rotation of clock hour min and sec
    let hRotation= 30*aa + bb/2;
    let mRotation= 6*bb;
    let sRotation= 6*cc;
    //the equation of finding time is below 
/*  FOR HOURS 
    12hours =360deg
    1hours=360/12=30deg
    h hours=30h deg
    
    60min = 30deg
    1min = 30/60=1/2deg
    m min = m/2 deg
*/
/*  FOR MINITUS
    60 min = 360deg
    1min = 360/60= 6deg
    m min = m6 deg
*/
/*  FOR SECOND
    60 sec = 360 deg
    1s = 360/60 deg =6deg
    s sec= s6 deg
*/
    hr.style.transform =`rotate(${hRotation}deg)`;
    min.style.transform =`rotate(${mRotation}deg)`;
    second.style.transform =`rotate(${sRotation}deg)`;
}
setInterval(display,1000);
