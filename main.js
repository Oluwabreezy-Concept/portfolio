const menuBar = document.getElementById('menuBar');
const exitBar = document.getElementById('exitBar');
const navBar = document.querySelector('.navbar');

menuBar.addEventListener('click', function(){
  if (navBar.style.display === 'none'){
      console.log('clicked');
      navBar.style.display = 'block';
      document.body.style.overflowY = 'hidden';
  
  }else {
      navBar.style.display = "none";
      document.body.style.overflowY = 'auto';
  
    }
  });
  
  exitBar.addEventListener('click', function(){
  if (navBar.style.display === 'block'){
      console.log('clicked');
      navBar.style.display = 'none';
      document.body.style.overflowY = 'auto';
  
  }else {
      navBar.style.display = "block";
      document.body.style.overflowY = 'hidden';
  
    }
  });


const autoTypeElement = document.querySelector('.grid1 h1');
const autoTypeElement2 = document.querySelector('.grid1 p');
const text = 'OLUBODUN';
const paragraph = 'Creating digital experiences that are intentional, meaningful, and impactful. understanding the why behind every design decision and using that insight to craft solutions that drive real results. My designs are purpose-driven, with the power to inspire, educate, and engage.';
const typingSpeed = 100; // in milliseconds
const typingSpeed2 = 50; // in milliseconds


let i = 0;
function autoTypeH1() {
  if (i < text.length) {
    autoTypeElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(autoTypeH1, typingSpeed);
  } else {
    i = 0;
    autoTypeP();
  }
}

function autoTypeP() {
  if (i < paragraph.length) {
    autoTypeElement2.innerHTML += paragraph.charAt(i);
    i++;
    setTimeout(autoTypeP, typingSpeed2);
  }
}

autoTypeH1();

