const hamburger=document.querySelector(".hamburger");
const navbarLinks=document.querySelector('.navbar_menu');


hamburger.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
    if(hamburger.src.match('hamburger')){
        hamburger.src="../images/icon-close.svg";
    }else{
        hamburger.src='../images/icon-hamburger.svg';
    }
})

