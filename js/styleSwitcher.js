const links = document.querySelectorAll(".alternate-style");


function setActiveStyle(color) {
  for (let i = 0; i < links.length; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
      localStorage.setItem('color' , `${color}`)
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

if(localStorage.getItem('color') != null) {
    setActiveStyle(localStorage.getItem('color'));
}


const toogleSwitcher = document.querySelector(".toogle-style-switcher");
const styleSwitcher = document.querySelector(".style-switcher");

toogleSwitcher.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

const bodySkin = document.querySelectorAll(".body-skin");


for (let i = 0; i < bodySkin.length; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "Dark") {
      localStorage.setItem('darkMode' , "true")
        document.body.classList.add("dark");
      
    } else {
      localStorage.setItem('darkMode' , "false")
        document.body.classList.remove("dark");
    }
  });
}
if(localStorage.getItem('darkMode') == "false"){
  document.body.classList.remove("dark");
  document.getElementById("dark").checked = false ; 
  document.getElementById("light").checked = true ;
}
if (localStorage.getItem('darkMode') == "true") {
  document.body.classList.add("dark");
  document.getElementById("dark").checked = true ; 
  document.getElementById("light").checked = false ;
} 

