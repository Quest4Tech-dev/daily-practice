const modal=document.getElementById("modal");
const signupbtn=document.getElementById("btn");
const closemodal=document.querySelector(".close");

signupbtn.onclick=()=>{
    modal.style.display="block";
};
closemodal.onclick=()=>{
    modal.style.display="none";
};
window.onclick=(event)=>{
    if (event.target=== modal){
        modal.style.display="none";
    }
};
const signupForm=document.querySelector("#signup-form");
signupForm.onsubmit=(e)=>{
    e.preventDefault();
    modal.style.display="none";
    alert("thank you for joining us, see you at the starting line");
    
};

