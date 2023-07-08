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

var react=document.querySelector(".love");
react.addEventListener("click",LoveReact);

function LoveReact(){
  // react.classList.toggle("love");
  // console.log("clicked")
  react.style.color=="red";
}
