const menuBar = document.getElementById('menuBar');
const exitBar = document.getElementById('exitBar');
const navBar = document.querySelector('.navbar');
const viewBtn = document.querySelector('.viewBtn');
const viewBtn2 = document.querySelector('.viewBtn2');
const back2top = document.querySelector('#back2top');
const scrollheight = window.innerHeight * 0.4;

viewBtn.onclick = function(){
    window.location.href='https://oluwabreezy-concept.github.io/mansionette/';
    console.log('clicked')
}
viewBtn2.onclick = function(){
    window.location.href='https://oluwabreezy-concept.wegic.app/';
    console.log('clicked')
}


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

window.addEventListener('scroll', function(){
    if (window.scrollY > scrollheight){
        back2top.style.display='block'
    }
    else (back2top.style.display='none')
})

back2top.addEventListener('click', function(){
    window.scrollTo({top:0, behavior: 'smooth'});
});


