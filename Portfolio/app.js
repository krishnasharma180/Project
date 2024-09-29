const menuBar = document.querySelector(".menu");
const sideMenu = document.querySelector(".side-menu");
const sideParts = document.querySelectorAll(".side-menu .part");
const backgroundImage = document.querySelector(".image");
const image = document.querySelector(".image-card");
const navParts = document.querySelectorAll(".web-info .part");

// creating scroll Effect

 window.addEventListener('scroll',()=>{
value = window.scrollY;
backgroundImage.style.marginTop=value*2 + 'px';
 });

//adding animation to side-menu

menuBar.addEventListener('click',()=>{
   sideMenu.classList.toggle('active');
});

// Creating smooth scroll effect when clicked on nav items

let anchors =document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor=>{
  anchor.addEventListener('click',function(e) {
    e.preventDefault();


    const sectionId = anchor.getAttribute('href').substring(1); 
    const section = document.getElementById(sectionId); 
    
    if (section) {
      const offsetTop = section.offsetTop; 
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' 
      })
    }

  }
  )
});
// applying border effect to skills

const technicalskill = document.querySelector(".progress-bars");
const professionalskill = document.querySelector(".circular-bars");
const heading1 = document.querySelector(".technical");
const heading2 = document.querySelector(".professional");

heading1.addEventListener('click',()=>{
   heading2.classList.remove('belowborder');
   heading1.classList.add('belowborder')
   technicalskill.style.display="flex";
   professionalskill.style.display="none";
});
heading2.addEventListener('click',()=>{
   heading1.classList.remove('belowborder');
   heading2.classList.add('belowborder');
   technicalskill.style.display="none";
   professionalskill.style.display="flex";
});


const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.web-info .part');
const menuItems = document.querySelectorAll('.side-menu .part');

const activateNav = () => {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navItems.forEach((item) => item.classList.remove('belowborder'));
    navItems[index].classList.add('belowborder');
    menuItems.forEach((item) => item.classList.remove('sideborder'));
    menuItems[index].classList.add('sideborder');
};

window.addEventListener('scroll', activateNav);

// submitting form

const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
   e.preventDefault();
   fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
          alert('Form submitted successfully!');
          form.reset(); // Clear input fields
      } else {
          alert('There was a problem with your submission.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('There was a problem with your submission.');
  });
});
// download button style

const clickedButton = document.querySelectorAll(".download");
clickedButton.forEach((button)=>{
  button.addEventListener('click',()=>{
  button.classList.add("backgroundcolor");
  setTimeout(()=>{
    button.classList.remove("backgroundcolor");
  },150)
  
  })
})



