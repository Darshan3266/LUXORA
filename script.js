// console.log("js");


//dropmenu btn for mobile responivenss
const menuBox = document.getElementById("menuBox");
function menuBar() {
  if (menuBox.style.display === "none") {
    menuBox.style.display = "block";


  }
  else {
    menuBox.style.display = "none"
  }

}

//scrollBtn in homepage
const scrollbtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollbtn.style.display = "block";

  }
  else {
    scrollbtn.style.display = "none";
  }
})


const fadeConts = document.querySelectorAll(".fade-up");
console.log(fadeConts);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Visible");
      
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.3
  })
  fadeConts.forEach((elements) => {
    observer.observe(elements);

});