
const menuBox = document.getElementById("menuBox");
function menuBar() {
  if (menuBox.style.display === "none") {
    menuBox.style.display = "block";


  }
  else{
    menuBox.style.display="none"
  }

}


const scrollbtn=document.getElementById("scrollBtn");

window.addEventListener("scroll",()=>{
  if(window.scrollY>300){
    scrollbtn.style.display="block";

  }
  else{
    scrollbtn.style.display="none";
  }
})
