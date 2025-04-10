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

