//Trip icon up or rotatetion 
var Hinput = document.querySelectorAll(".Hinput");
var HIcon = document.querySelectorAll(".Hkey");

Array.from(Hinput).forEach((input) => {
  input.addEventListener("click", () => {
    Array.from(HIcon).forEach((icon) => {
      icon.style.transform = "rotate(180deg)";
    });
  });
});

var react=document.querySelector("#Love1");
var LoveNum=document.querySelector("#cNum1");

react.addEventListener("click",LoveReact);

console.log(LoveNum.valueOf());
var numb=(LoveNum.textContent);
// console.log(numb);
console.log(numb.valueOf());

function LoveReact(){
 react.classList.toggle("active");
//  LoveNum.innerHTML=LoveNum;
if(numb.valueOf()===numb){
  LoveNum.innerHTML=parseInt(LoveNum.innerHTML)+1;
  console.log(LoveNum.value);
}
else{
  LoveNum.innerHTML==parseInt(LoveNum.innerHTML);
}
}




// $(document).ready(function(){
//   $(react).click(function(){
//     $(react).toggleclass("active");
//     console.log("clicked");
//   });

// });



  


