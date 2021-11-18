'use strict'
const myMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (myMobile.Android() || 
                myMobile.BlackBerry() || 
                myMobile.iOS() || 
                myMobile.Opera() || 
                myMobile.Windows());
    }
};








//Открывыет, закрывает панель навигации. 

const menuNav = document.querySelector('.menu-nav');
const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
        menuNav.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
        
    });
}

// Убирает при скроле панель навигации а так же меню навигации при скроле вверх вниз

let lastScroll = 0;
// const deafaultOffset = 200;
const header = document.querySelector('.section_header');


const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() && myMobile.any() ) {
    
        
        menuNav.classList.remove('_active');
        iconMenu.classList.remove('_active');
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide() ){
        
        
        header.classList.remove('hide');
       
        
    } else {
        menuNav.classList.remove('_active');
        iconMenu.classList.remove('_active');
    }

    lastScroll = scrollPosition();
})

// Открывает и закрывает Sign-in ПК И Mobile версия.

const btnLoginPC = document.querySelector('.sign-in')
const btnLoginMobail = document.querySelector('.svg-header');
const popup = document.querySelector('.popup');
const popup__body = document.querySelector('.popup__body');
let valuePadding = window.innerWidth - document.querySelector('.valuePaddingLock').offsetWidth + 'px';
const menu_nav_header = document.querySelector('.section_header');


if (btnLoginPC && btnLoginMobail) {
    
    btnLoginPC.addEventListener("click", function(e) {
        
        document.body.classList.add("_lock"); 
        popup.classList.add('open'); 
        
        if (valuePadding) {
            document.body.style.paddingRight = valuePadding;
            
           
            }
        if (isMobail.any()) {
            menu_nav_header.style.paddingRight = valuePadding;
        }

    });

    btnLoginMobail.addEventListener("click", function(e) {
        
        document.body.classList.add("_lock");
        popup.classList.add('open');  
        
        if (valuePadding) {
            document.body.style.paddingRight = valuePadding;
            menu_nav_header.style.paddingRight = valuePadding;
            
           } 
        
    });

   
}

if (popup && popup__body) {
    popup.addEventListener("click", function(e) {
        

        if (e.target == popup || e.target == popup__body) {

            document.body.classList.remove("_lock");
            popup.classList.remove('open');

            if (valuePadding) {
            document.body.style.paddingRight = '0px';
            menu_nav_header.style.paddingRight = '0px';
            }
              
            
        }} 
               
    )}
    
 

   

