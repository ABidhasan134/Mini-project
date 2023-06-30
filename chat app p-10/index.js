//some worke to finish store in local storage and clear from local storage

const NaBid=document.querySelector("#ABid");
const NhAyati=document.querySelector("#Hayati");
const Heading=document.querySelector(".chat-heading");
const masseges=document.querySelector(".massege");
const Mtime=document.querySelector(".massege-time");
const from=document.querySelector(".chat-input");
const input=document.querySelector(".text");
const send=document.querySelector(".submit");
const attach=document.querySelector(".atch");
const Clear=document.querySelector(".clear");
const chat=document.querySelector(".chat-masseges");

const storLocal=JSON.parse(localStorage.getItem(masseges)) || [];

//changing Sender by cellback function
var massegeSender="ABid";
const UpdateSender=(name)=>{
     massegeSender=name;
    Heading.innerHTML = `${massegeSender} chatting..`
    input.ariaPlaceholder = `Type here ${massegeSender}`
    //also use === for equeal 
    //when we add classList than use class name without Dot(.)
    //Name color changing section
    if(name==="ABid")
    {
        NaBid.classList.add("active-person");
        NhAyati.classList.remove("active-person");
    }
    if(name==="Hayati")
    {
        NhAyati.classList.add("active-person");
        NaBid.classList.remove("active-person");
    }
    input.focus();
}
NaBid.onclick=()=>UpdateSender("ABid");
NhAyati.onclick=()=>UpdateSender("Hayati");

//set massage condition for everytime 
const ChatMasseges=(massege)=>
`
    <div class="masseges ${massege.sender === 'ABid' ? 'blue-bg' : 'gray-bg'}">
    <div class="massege-sender">${massege.sender}</div>
    <div class="massege-text">${massege.text}</div>
    <div class="massege-time">${massege.timetemp}</div>
    </div>
`

const sendMassege=(e)=>{
   //to prevent default system of null the input box
    e.preventDefault();
    //geting time and date also formating here and Keep in timetemp variable
    var timetemp=new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
//set massage formet
const massege={
    sender:massegeSender,
    text: input.value,
     timetemp,
}
    storLocal.push(massege);
    localStorage.setItem('masseges',JSON.stringify(massege));

//chat will change accoding to chatMasseges() function
    chat.innerHTML += ChatMasseges(massege);
    //this line clear the before massage in input 
    from.reset();
    //2 property to help scroll down auto 
    chat.scrollTop= chat.scrollHeight;

}
//add listener on submit icon 
from.addEventListener("submit",sendMassege);


