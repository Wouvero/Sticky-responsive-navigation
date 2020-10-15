const menuBtn = document.querySelector('.menu_btn')
const mobileNavigation = document.querySelector('.mobile_navigation')
let menuOpen = false;

const mobileMenu = () => {
    if(!menuOpen){
        menuBtn.classList.add('open')
        mobileNavigation.classList.add('active')
        menuOpen = true
    }else{
        menuBtn.classList.remove('open')
        mobileNavigation.classList.remove('active')
        menuOpen = false
    }
}

menuBtn.addEventListener('click' , mobileMenu)