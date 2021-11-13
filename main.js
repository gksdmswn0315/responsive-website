'use strict';

//넷바 색상 변경
// let :변하는 상수 | const :변하지 않는 상수
const navbar =document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window. scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
<<<<<<< HEAD

=======
>>>>>>> 23aa4d9207aee994e795aace9996768a92a651f8
});

//넷바메뉴 선택시 해당 부분으로 이동하기
const navbarMenu = document.querySelector('.navbar__menu');
<<<<<<< HEAD
navbarMenu.addEventListener("click", (event)=>{
=======
navbarMenu.addEventListener("click", (event)=> { // 화살표 함수 (학교에서 안배움)
>>>>>>> 23aa4d9207aee994e795aace9996768a92a651f8
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
});

//contact me 버튼 이동하기
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", ()=> {
    scrollIntoView('#contact');
});

//home 투명도 조절
const home = document.querySelector(".home__container")
const homeHeight = home.getBoundingClientRect().height;
<<<<<<< HEAD
document.addEventListener("scroll", ()=>{
=======
document.addEventListener("scroll", ()=> {
>>>>>>> 23aa4d9207aee994e795aace9996768a92a651f8
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

//햄버거 메뉴 클릭할 때
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
<<<<<<< HEAD
navbarToggleBtn.addEventListener("click", ()=>{
=======
navbarToggleBtn.addEventListener("click", ()=> {
>>>>>>> 23aa4d9207aee994e795aace9996768a92a651f8
    navbarMenu.classList.toggle("open");
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
<<<<<<< HEAD
}
=======
}

>>>>>>> 23aa4d9207aee994e795aace9996768a92a651f8
