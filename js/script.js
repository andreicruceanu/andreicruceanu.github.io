 const form = document.getElementById("form-contact");
 const name = document.getElementById("name");
 const email = document.getElementById("email");
 const subject = document.getElementById("subject");
 const message = document.getElementById("message");
 const buttonSend = document.getElementById("send-form");
const buttonEN =  document.querySelector("#languageEN")
const buttonRO =  document.querySelector("#languageRO")


//loader
window.addEventListener("load", function () {
 setTimeout(function () {
     document.querySelector(".preloader").classList.add("opacity-0");
   }, 1200);

  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
   }, 2000);
 });

//loader


localStorage?.getItem('language') === 'RO' ? languageRomanian() : languageEnglish();


buttonRO.addEventListener("click" , languageRomanian)

 buttonEN.addEventListener("click" , languageEnglish)

function languageRomanian() {
  fetch('ro.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
         
        localStorage.setItem("language" , "RO")
        
      if(buttonEN.classList.contains('activeLanguage')) {
         buttonEN.classList.remove('activeLanguage')
         buttonRO.classList.add('activeLanguage')
         }
        
        function valuesToArray(data) {
          return Object.keys(data).map(function (key) { return (data[key]) });
        }
        const homePageText = valuesToArray(data)[0];
        const aboutPageText = valuesToArray(data)[1];
        const contactPageText = valuesToArray(data)[2];


        document.querySelector("._styleSwitcher").innerHTML = `${homePageText.styleSwitcher}`
        document.querySelector("._home").innerHTML = `<i class="fa fa-home"></i>${homePageText.Home}`;
        document.querySelector("._about").innerHTML = `<i class="fa fa-user"></i>${homePageText.About}`;
        document.querySelector("._service").innerHTML = `<i class="fa fa-list"></i>${homePageText.Service}`;
        document.querySelector("._project").innerHTML = `<i class="fa fa-briefcase"></i>${homePageText.Project}`;
        document.querySelector("._contact").innerHTML = `<i class="fa fa-comments"></i>${homePageText.Contact}`;
        document.querySelector("._titleAbout").textContent = `${aboutPageText.aboutTitle}`;
        document.querySelector("._subTitleAbout").textContent = `${aboutPageText.subTitleAbout}`;
        document.querySelector("._contentAbout").textContent = `${aboutPageText.contentAbout}`;
        document.querySelector("._birthday").innerHTML = `${aboutPageText.birthday} :<span>13 August 1999</span>`;
        document.querySelector("._age").innerHTML = `${aboutPageText.age}: <span>22</span>`;
        document.querySelector("._email").innerHTML = `${aboutPageText.email}: <span>cruceanuandrei10@gmail.com</span>`;
        document.querySelector("._phone").innerHTML = `${aboutPageText.phone}: <span>0756345560</span>`;
        document.querySelector("._city").innerHTML = `${aboutPageText.city}: <span>${aboutPageText.bucharest}</span>`;
        document.querySelector("._cv").innerHTML = `${aboutPageText.cv}`;
        document.querySelector("._education").innerHTML = `${aboutPageText.education}`;
        document.querySelector("._colage").innerHTML = `${aboutPageText.colage}`;
        document.querySelector("._profile").innerHTML = `${aboutPageText.profile}`;
        document.querySelector("._university").innerHTML = `${aboutPageText.university}`;
        document.querySelector("._engineering").innerHTML = `${aboutPageText.engineering}
        <br />
        <br />
        ${aboutPageText.specialization}`;
        document.querySelector("._courses").innerHTML = `${aboutPageText.courses}`;
        document.querySelector("._platformaIT").innerHTML = `${aboutPageText.platformaIT}`;
        document.querySelector("._viewPlatformaIt").innerHTML = `${aboutPageText.viewPlatformaIt}`;
        document.querySelector("._udemyJS").innerHTML = `${aboutPageText.viewUdemyJS}`;
        document.querySelector("._viewUdemyJS").innerHTML = `${aboutPageText.viewPlatformaIt}`;
        document.querySelector("._time").innerHTML = `${aboutPageText.time}`;
        document.querySelector("._courseJS").innerHTML = `${aboutPageText.courseJS}`;
        
        /* Contact */
        document.querySelector("._contactMe").innerHTML = `${contactPageText.contactMe}`
        document.querySelector("._contactSubTitle").innerHTML = `${contactPageText.contactSubTitle}`
        document.querySelector("._contactHome").innerHTML = `${contactPageText.contactHome}`
        document.querySelector("._contactCity").innerHTML = `${contactPageText.contactCity}`
        document.querySelector("._contactEmail").innerHTML = `${contactPageText.Email}`
        name.placeholder = `${contactPageText.name}`
        email.placeholder = `${contactPageText.Email}`
        subject.placeholder = `${contactPageText.Subject}`
        message.placeholder = `${contactPageText.Message}`
        buttonSend.textContent = `${contactPageText.SendMessage}`
        /* Contact */
    

      });
      
    })
    .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
}

 function languageEnglish() {
  fetch('en.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {

        
        function valuesToArray(data) {
          return Object.keys(data).map(function (key) { return (data[key]) });
        }

        localStorage.setItem("language" , "EN")
        if(buttonRO.classList.contains('activeLanguage')) {
          buttonRO.classList.remove('activeLanguage')
          buttonEN.classList.add('activeLanguage')
        }
        const homePageText = valuesToArray(data)[0];
        const aboutPageText = valuesToArray(data)[1];
        const contactPageText = valuesToArray(data)[2];


        document.querySelector("._styleSwitcher").innerHTML = `${homePageText.styleSwitcher}`
        document.querySelector("._home").innerHTML = `<i class="fa fa-home"></i>${homePageText.Home}`;
        document.querySelector("._about").innerHTML = `<i class="fa fa-user"></i>${homePageText.About}`;
        document.querySelector("._service").innerHTML = `<i class="fa fa-list"></i>${homePageText.Service}`;
        document.querySelector("._project").innerHTML = `<i class="fa fa-briefcase"></i>${homePageText.Project}`;
        document.querySelector("._contact").innerHTML = `<i class="fa fa-comments"></i>${homePageText.Contact}`;
        document.querySelector("._titleAbout").textContent = `${aboutPageText.aboutTitle}`;
        document.querySelector("._subTitleAbout").textContent = `${aboutPageText.subTitleAbout}`;
        document.querySelector("._contentAbout").textContent = `${aboutPageText.contentAbout}`;
        document.querySelector("._birthday").innerHTML = `${aboutPageText.birthday} :<span>13 August 1999</span>`;
        document.querySelector("._age").innerHTML = `${aboutPageText.age}: <span>22</span>`;
        document.querySelector("._email").innerHTML = `${aboutPageText.email}: <span>cruceanuandrei10@gmail.com</span>`;
        document.querySelector("._phone").innerHTML = `${aboutPageText.phone}: <span>0756345560</span>`;
        document.querySelector("._city").innerHTML = `${aboutPageText.city}: <span>${aboutPageText.bucharest}</span>`;
        document.querySelector("._cv").innerHTML = `${aboutPageText.cv}`;
        document.querySelector("._education").innerHTML = `${aboutPageText.education}`;
        document.querySelector("._colage").innerHTML = `${aboutPageText.colage}`;
        document.querySelector("._profile").innerHTML = `${aboutPageText.profile}`;
        document.querySelector("._university").innerHTML = `${aboutPageText.university}`;
        document.querySelector("._engineering").innerHTML = `${aboutPageText.engineering}
        <br />
        <br />
        ${aboutPageText.specialization}`;
        document.querySelector("._courses").innerHTML = `${aboutPageText.courses}`;
        document.querySelector("._platformaIT").innerHTML = `${aboutPageText.platformaIT}`;
        document.querySelector("._viewPlatformaIt").innerHTML = `${aboutPageText.viewPlatformaIt}`;
        document.querySelector("._udemyJS").innerHTML = `${aboutPageText.viewUdemyJS}`;
        document.querySelector("._viewUdemyJS").innerHTML = `${aboutPageText.viewPlatformaIt}`;
        document.querySelector("._time").innerHTML = `${aboutPageText.time}`;
        document.querySelector("._courseJS").innerHTML = `${aboutPageText.courseJS}`;
        
         /* Contact */
        document.querySelector("._contactMe").innerHTML = `${contactPageText.contactMe}`
        document.querySelector("._contactSubTitle").innerHTML = `${contactPageText.contactSubTitle}`
        document.querySelector("._contactHome").innerHTML = `${contactPageText.contactHome}`
        document.querySelector("._contactCity").innerHTML = `${contactPageText.contactCity}`
        document.querySelector("._contactEmail").innerHTML = `${contactPageText.Email}`
        name.placeholder = `${contactPageText.name}`
        email.placeholder = `${contactPageText.Email}`
        subject.placeholder = `${contactPageText.Subject}`
        message.placeholder = `${contactPageText.Message}`
        buttonSend.textContent = `${contactPageText.SendMessage}`
        /* Contact */
      });
      
    })
    .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
 }





// project filter

const filterContainer = document.querySelector(".project-filter");
filterBtns = filterContainer.children;
totalFilterBtn = filterBtns.length;
projectItems = document.querySelectorAll(".project-item");
totalProjectItems = projectItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalProjectItems; k++) {
      if (filterValue === projectItems[k].getAttribute("data-category")) {
        projectItems[k].classList.remove("hide");
        projectItems[k].classList.add("show");
      } else {
        projectItems[k].classList.remove("show");
        projectItems[k].classList.add("hide");
      }

      if (filterValue === "all") {
        projectItems[k].classList.remove("hide");
        projectItems[k].classList.add("show");
      }
    }
  });
}

// project filter

//nav

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const sectionAll = document.querySelectorAll(".section");

for (let i = 0; i < navList.length; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < sectionAll.length; i++) {
      sectionAll[i].classList.remove("back-section");
    }

    for (let j = 0; j < navList.length; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        sectionAll[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < sectionAll.length; i++) {
    sectionAll[i].classList.remove("active");
  }
  const targent = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + targent).classList.add("active");
}

//nav

// togglerBtn

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < sectionAll.length; i++) {
    sectionAll[i].classList.toggle("open");
  }
}
// togglerBtn





form.addEventListener('submit' , (e) => {
  e.preventDefault();
  checkInputs() ; 
  
  if (isFormvalid()==true) {
    sendEmail() ;
 
    deleteSucces()
    name.value = "";
    email.value = "";
    message.value = "";
    subject.value = "";
 

    

  } else {
    
    e.preventDefault();
  }
 


});


function deleteSucces() {
  const inputContains = form.querySelectorAll('.form-group');
 
  inputContains.forEach((container) => {
    container.classList.remove("success");
  })

}


function isFormvalid() {
  
  const inputContains = form.querySelectorAll('.form-group');
  let result = true ; 
  inputContains.forEach((container) => {
   
     if(container.classList.contains('error')) {
       result = false ;
     }

  });
     return result ; 
}

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();



  if (nameValue == "") {
    errorFunction(name , name , buttonRO.classList.contains('activeLanguage') ? 'Completează nume' : 'Name is required');
    
  } else {
    successFunction(name);
  }

  if (emailValue == "") {
    errorFunction(email , email , buttonRO.classList.contains('activeLanguage') ? 'Completează email' : 'Email is required');
   
  } else {
    successFunction(email);
 }

  if (subjectValue == "") {
  errorFunction(subject , subject , buttonRO.classList.contains('activeLanguage') ? 'Completează subiect' : 'Subject is required');
  
  } else {
    successFunction(subject);
  }

 if (messageValue == "") {
    errorFunction(message , message , buttonRO.classList.contains('activeLanguage') ? 'Completează mesaj' : 'Message is required');
   
  } else {
    successFunction(message);
  }
}



function errorFunction(input , element , errorMessage) {
 const formGroup = input.parentElement;
 formGroup.className = "form-group error";
 const parent = element.parentElement;
 
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage ;
}
function successFunction(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function sendEmail() {

  Email.send({
     Host : "smtp.gmail.com",
     Username : "cruceanuandrei10@gmail.com",
     Password : "qcbpwvfmivguhqye",
     To : "cruceanuandrei10@gmail.com",
     From : document.getElementById("email").value,
     Subject : document.getElementById("subject").value,
     
     Body : "<br> Name: " + document.getElementById("name").value 

          + "<br> Email: " + document.getElementById("email").value

          + "<br> Mesaj: " + document.getElementById("message").value

}).then(
function (message) {
  if (message == "OK") {
   successMessageServer();
  } else {
    errorMessageServer()
  }
}
)
;
}

function successMessageServer() {
   const messageElement = document.querySelector("#messageElement");
   messageElement.style.color = "#2ecc71";
   if (buttonRO.classList.contains('activeLanguage')) {
    messageElement.textContent = "Mesaj trimis cu succes !";
  } else {
  messageElement.textContent = "Message sent successfully!";
  }
  
   messageElement.style.visibility = "visible";
   setTimeout(function() {
    messageElement.style.visibility = 'hidden'
  }, 3000) 

}

function errorMessageServer() {
  const messageElement = document.querySelector("#messageElement");
  messageElement.style.color = "red";
  if (buttonRO.classList.contains('activeLanguage')) {
    messageElement.textContent = "Mesajul nu a fost trimis , Eroare server !";
  } else {
  messageElement.textContent = "The message was not sent! , Server error !";
  }
  
  messageElement.style.visibility = "visible";

  setTimeout(function() {
    messageElement.style.visibility = 'hidden'
  }, 3000) 

}

